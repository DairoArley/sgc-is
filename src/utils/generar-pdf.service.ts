import { Injectable } from "@angular/core";
import { Materia } from "../modelos/materia";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { LOGO_UDEA_BASE64 } from "../comun/constantes";
import { ProgramaCurso } from "../modelos/programaCurso";
import { StoreMateriasService } from "../store/storeMaterias.service";
import { ProgramasCursosService } from "./programas-cursos.service";
import { Actividad } from '../modelos/actividad';
import { Profesor } from '../modelos/profesor';
import Swal from 'sweetalert2';
import { AppConfig } from '../../config/app-config';
import * as firma from './firma-programa-curso/firma';

@Injectable()
export class GenerarPdfService {
  GRIS = '#BFBFBF';
  firma;
  fechaResolucionConsejo: string;
  fechaResolucionComite: string;
  docDefinition = {};

  constructor(
    private programaCursoService: ProgramasCursosService,
    private AppConfig: AppConfig,
    private store: StoreMateriasService
  ) {
    this.firma = firma[`FIRMA_${this.AppConfig.codigoFacultad}`];
  }

  descargarProgramaCurso(materia: Materia, firmado?: boolean) {
    this.store.cargandoOperacion = true;
    this.programaCursoService.getByMateria(materia.codigoMateria).subscribe(
      (prog) => {
        if (prog.fechaResolucionConsejo) {
          const fecha = new Date(prog.fechaResolucionConsejo);
          this.fechaResolucionConsejo =
            fecha.getDate() +
            " de " +
            this.obtenerMes(fecha.getMonth() + 1) +
            " de " +
            fecha.getFullYear();
        }
        if (prog.fechaResolucionComite) {
          const fecha = new Date(prog.fechaResolucionComite);
          this.fechaResolucionComite =
            fecha.getDate() +
            " de " +
            this.obtenerMes(fecha.getMonth() + 1) +
            " de " +
            fecha.getFullYear();
        }
        this.generarPDFProgramaCurso(prog, firmado || false);
        this.store.cargandoOperacion = false;
      },
      (error) => {
        this.store.error = "No se pudo obtener el programa de curso.";
        this.store.cargandoOperacion = false;
      }
    );
  }

  async generarPDFProgramaCurso(programaCurso: ProgramaCurso, firmado?: boolean) {
    if (programaCurso.estado != "A") {
      this.docDefinition["watermark"] = {
        text: "borrador",
        color: "darkgray",
        opacity: 0.3,
        bold: true,
        italics: false,
      };
    }

    this.docDefinition["styles"] = {
      negrita: {
        bold: true,
      },
    };

    this.docDefinition["pageMargins"] = [60, 60, 50, 50];

    this.docDefinition["footer"] = function (currentPage, pageCount) {
      return [
        {
          text: "Página " + currentPage.toString() + " de " + pageCount,
          alignment: "right",
          margin: [0, 0, 20, 0],
        },
      ];
    };

    this.docDefinition["content"] = this.construirContenidoReporteNuevo(
      programaCurso, firmado || false
    );
    pdfMake.createPdf(this.docDefinition).download(programaCurso.materia.codigoMateria);
  }

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  obtenerMes(numeroMes: number): string {
    let mes = "";
    switch (numeroMes) {
      case 1:
        mes = "Enero";
        break;
      case 2:
        mes = "Febrero";
        break;
      case 3:
        mes = "Marzo";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Mayo";
        break;
      case 6:
        mes = "Junio";
        break;
      case 7:
        mes = "Julio";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Septiembre";
        break;
      case 10:
        mes = "Octubre";
        break;
      case 11:
        mes = "Noviembre";
        break;
      case 12:
        mes = "Diciembre";
    }
    return mes;
  }

  getDocDefinition(): any {
    const docDefinition = {};
    docDefinition['styles'] = {
      negrita: {
        bold: true,
      },
    };

    docDefinition["pageMargins"] = [60, 60, 50, 50];

    docDefinition["footer"] = (currentPage, pageCount) => {
      return [
        {
          text: "Página " + currentPage.toString() + " de " + pageCount,
          alignment: "right",
          margin: [0, 0, 20, 0],
        },
      ];
    };
    return docDefinition;
  }

  getDocDefinitionNoAprobado(): any {
    const docDefinition = this.getDocDefinition();
    docDefinition["watermark"] = {
      text: "borrador",
      color: "darkgray",
      opacity: 0.3,
      bold: true,
      italics: false,
    };
    return docDefinition;
  }

  // Generar PDF 2
  generarGuardarProgramaCursoPDF(codigoMateria: any) {
    this.programaCursoService.getByMateria(codigoMateria).subscribe(
      async (prog) => {
        const anio = prog.semestre.codigo.slice(0, 4);
        const { firmado, sinFirmar } = await this.generarPDFProgramasCurso(prog);
        firmado.getBuffer((buffer) => {
          sinFirmar.getBuffer((buffer2) => {
            const pdfFirmado = new Blob([buffer]);
            const pdfSinFirmar = new Blob([buffer2]);
            const formData = new FormData();
            formData.append('pdfAConvertir', pdfFirmado);
            this.programaCursoService.convertirPDFToPDFA(formData).subscribe(resp => {
              const pdfaFirmado = new Blob([resp]);
              const formdatita = new FormData();
              formdatita.append('pdfFirmado', pdfaFirmado);
              formdatita.append('pdfSinFirmar', pdfSinFirmar);
              this.programaCursoService.guardarPDFs(formdatita, this.store.materiaSeleccionada.id, anio).subscribe(resp => {

              })
            }, error => {
              this.store.descargando = false;
              Swal.fire({
                icon: 'error',
                title: 'Error al convertir el pdf, intentelo más tarde.',
                confirmButtonColor: '#348f41'
              });
            });
          });
        });

      });
  }

  generarGuardarPDF(codigoMateria: any, idMateria: any) {
    return new Promise<void>((resolve, reject) => {
      this.programaCursoService.getByMateria(codigoMateria).subscribe(
        async (prog) => {
          const anio = prog.semestre.codigo.slice(0, 4);
          const { firmado, sinFirmar } = await this.generarPDFProgramasCurso(prog);
          firmado.getBuffer((buffer) => {
            sinFirmar.getBuffer((buffer2) => {
              const pdfFirmado = new Blob([buffer]);
              const pdfSinFirmar = new Blob([buffer2]);
              const formData = new FormData();
              formData.append('pdfAConvertir', pdfFirmado);
              this.programaCursoService.convertirPDFToPDFA(formData).subscribe(resp => {
                const pdfaFirmado = new Blob([resp]);
                const formdatita = new FormData();
                formdatita.append('pdfFirmado', pdfaFirmado);
                formdatita.append('pdfSinFirmar', pdfSinFirmar);
                this.programaCursoService.guardarPDFs(formdatita, idMateria, anio).subscribe(() => {
                  resolve();
                },
                  (error) => {
                    reject();
                  })
              },
                (error) => {
                  this.store.descargando = false;
                  Swal.fire({
                    icon: 'error',
                    title: 'Error al convertir el pdf, intentelo más tarde.',
                    confirmButtonColor: '#348f41'
                  });
                  reject();
                });
            });
          });

        },
        (error) => {
          reject();
        });
    });
  }


  generarPDFProgramaCurso2(programaCurso: ProgramaCurso, firmado: boolean) {
    let docDefinition;
    if (programaCurso.estado != 'A') {
      docDefinition = this.getDocDefinitionNoAprobado();
    } else {
      docDefinition = this.getDocDefinition();
    }

    docDefinition["content"] = this.construirContenidoReporteNuevo(
      programaCurso, firmado
    );
    return pdfMake.createPdf(docDefinition);
  }

  generarPDFProgramasCurso(programaCurso: ProgramaCurso) {
    let docDefinitionFirmado;
    let docDefinitionSinFirmar;
    docDefinitionFirmado = this.getDocDefinition();
    docDefinitionSinFirmar = this.getDocDefinition();

    docDefinitionFirmado["content"] = this.construirContenidoReporteNuevo(
      programaCurso, true
    );
    docDefinitionSinFirmar["content"] = this.construirContenidoReporteNuevo(
      programaCurso, false
    );
    return { firmado: pdfMake.createPdf(docDefinitionFirmado), sinFirmar: pdfMake.createPdf(docDefinitionSinFirmar) };
  }

  // Contenido reporte NUEVO FORMATO
  construirContenidoReporteNuevo(programaCurso: ProgramaCurso, firmado: boolean): any {
    if (programaCurso.fechaResolucionConsejo) {
      const fecha = new Date(programaCurso.fechaResolucionConsejo);
      this.fechaResolucionConsejo =
        fecha.getDate() +
        ' de ' +
        this.obtenerMes(fecha.getMonth() + 1) +
        ' de ' +
        fecha.getFullYear();
    }
    if (programaCurso.fechaResolucionComite) {
      const fecha = new Date(programaCurso.fechaResolucionComite);
      this.fechaResolucionComite =
        fecha.getDate() +
        ' de ' +
        this.obtenerMes(fecha.getMonth() + 1) +
        ' de ' +
        fecha.getFullYear();
    }

    const contenidoReporte = [];
    contenidoReporte.push({
      table: {
        widths: [100, "*"],
        body: [
          [
            { image: LOGO_UDEA_BASE64, fit: [100, 100], rowSpan: 2 },
            {
              text:
                "PROGRAMA OFICIAL DE CURSO\n(Pregrado y Posgrado)",
              style: "negrita",
              alignment: "center",
            },
          ],
          [
            "",
            {
              text: "UNIVERSIDAD DE ANTIOQUIA",
              style: "negrita",
              alignment: "center",
            },
          ],
        ],
      },
    });

    let itemsInformacionGeneral = [];
    itemsInformacionGeneral.push([
      {
        text: "1. INFORMACIÓN GENERAL",
        style: "negrita",
        alignment: "justify",
        colSpan: 4,
        fillColor: this.GRIS,
      },
      "",
      "",
      "",
    ]);

    itemsInformacionGeneral.push([
      { text: "Unidad Académica: ", style: "negrita", alignment: "justify" },
      {
        text: programaCurso.materia.facultad.nombre,
        alignment: "justify",
        colSpan: 3,
      },
      "",
      "",
    ]);

    itemsInformacionGeneral.push([
      { text: "Programa académico al que pertenece: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.programaPertenece,
        alignment: "justify",
        colSpan: 3,
      },
      "",
      "",
    ]);

    const itemsProgramas = [];

    itemsProgramas.push([
      {
        text: "PROGRAMAS ACADÉMICOS A LOS CUALES SE OFRECE EL CURSO",
        style: "negrita",
        alignment: "center",
        colSpan: 4,
      },
      "",
      "",
      "",
    ]);

    if (programaCurso.programasVersiones) {
      for (const pxn of programaCurso.programasVersiones) {
        let prerrequisitos = "";
        itemsProgramas.push([
          {
            text:
              pxn.programa +
              " - " +
              pxn.nombrePrograma +
              " Versión: " +
              pxn.versionActual,
            style: "negrita",
            alignment: "justify",
            colSpan: 4,
          },
          "",
          "",
          "",
        ]);

        if (!!programaCurso.prerrequisitos) {
          const listaPre = programaCurso.prerrequisitos.filter(
            (r) => r.programa == pxn.programa && r.version == pxn.versionActual
          );
          listaPre.forEach((row) => {
            prerrequisitos += row.materia + " - " + row.nombreMateria + "\n";
          });
        }

        if (prerrequisitos !== "") {
          itemsProgramas.push([
            { text: "Pre-requisitos: ", style: "negrita", alignment: "justify" },
            { text: prerrequisitos, alignment: "justify", colSpan: 3 },
            "",
            "",
          ]);
        } else {
          itemsProgramas.push([
            { text: "Pre-requisitos: ", style: "negrita", alignment: "justify" },
            { text: "Ninguno", alignment: "justify", colSpan: 3 },
            "",
            "",
          ]);
        }

        let correquisitos = "";

        if (!!programaCurso.correquisitos) {
          const listaCo = programaCurso.correquisitos.filter(
            (r) => r.programa == pxn.programa && r.version == pxn.versionActual
          );
          listaCo.forEach((row) => {
            correquisitos += row.materia + " - " + row.nombreMateria + "\n";
          });
        }

        if (correquisitos !== "") {
          itemsProgramas.push([
            { text: "Co-requisitos: ", style: "negrita", alignment: "justify" },
            { text: correquisitos, alignment: "justify", colSpan: 3 },
            "",
            "",
          ]);
        } else {
          itemsProgramas.push([
            { text: "Co-requisitos: ", style: "negrita", alignment: "justify" },
            { text: "Ninguno", alignment: "justify", colSpan: 3 },
            "",
            "",
          ]);
        }
      }
    }
    if (programaCurso.requisitoAdministrativo) {
      itemsProgramas.push([
        {
          text: "Requisito administrativo: ",
          style: "negrita",
          alignment: "justify",
        },
        {
          text: programaCurso.requisitoAdministrativo,
          alignment: "justify",
          colSpan: 3,
        },
        "",
        "",
      ]);
    }

    const itemsInformacionGeneral2 = [];

    itemsInformacionGeneral2.push([
      {
        text: 'Semestre 1: ',
        style: "negrita",
        alignment: "left",
      },
      {
        text: programaCurso.semestre ? programaCurso.semestre.codigo : "",
        alignment: "justify",
      },
      {
        text: 'Semestre 2:',
        style: "negrita",
        alignment: "left",
      },
      {
        text: programaCurso.semestre2 ? programaCurso.semestre2.codigo : "",
        alignment: "justify",
      },
    ]);
    itemsInformacionGeneral2.push([
      {
        text: 'Código curso:',
        style: "negrita",
        alignment: "left",
      },
      {
        text: programaCurso.materia.codigoMateria,
        alignment: "justify",
        colSpan: 3
      }, "", ""
    ]);


    itemsInformacionGeneral2.push([
      { text: "Nombre del Curso: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.materia.nombre,
        alignment: "justify",
        colSpan: 3,
      },
      "",
      "",
    ]);
    ///// 7
    itemsInformacionGeneral2.push([
      {
        text: "Área o componente de formación del currículo: ",
        style: "negrita",
        alignment: "left",
      },
      { text: programaCurso.area, alignment: "justify", colSpan: 3 },
      "",
      "",
    ]);

    itemsInformacionGeneral2.push([
      { text: "Tipo de curso: ", style: "negrita", alignment: "left" },
      { text: programaCurso.tipoCurso, alignment: "justify" },
      { text: "Créditos académicos: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.materia.creditos
          ? programaCurso.materia.creditos
          : "0",
      },
    ]);

    itemsInformacionGeneral2.push([
      {
        text: "CARACTERÍSTICAS DEL CURSO",
        style: "negrita",
        alignment: "center",
        colSpan: 4,
      },
      "",
      "",
      "",
    ]);

    itemsInformacionGeneral2.push([
      { text: "Habilitable (H): ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.materia.habilitable === "S" ? "SI" : "NO",
        alignment: "justify"
      },
      { text: "Validable (V): ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.materia.validable === "S" ? "SI" : "NO",
        alignment: "justify"
      }
    ]);

    itemsInformacionGeneral2.push([
      { text: "Clasificable (C): ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.materia.clasificable === "S" ? "SI" : "NO",
        alignment: "justify",
      },
      { text: "Evaluación de suficiencia: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.evaluacionSuficiencia ? (programaCurso.evaluacionSuficiencia === true ? "SI" : "NO") : "NO",
        alignment: "justify",
      }
    ]);

    itemsInformacionGeneral2.push([
      {
        text: "Modalidad del curso: ",
        style: "negrita",
        alignment: "left",
      },
      { text: programaCurso.modalidad, alignment: "justify", colSpan: 3 },
      "",
      "",
    ]);

    itemsInformacionGeneral2.push([
      {
        text: "Horas docencia directa: ",
        style: "negrita",
        alignment: "left",
      },
      { text: programaCurso.horasAcompanamientoDocente, alignment: "justify" },
      { text: "Horas de trabajo independiente: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.horasTrabajoIndependiente
          ? programaCurso.horasTrabajoIndependiente
          : "0",
      },
    ]);

    itemsInformacionGeneral2.push([
      { text: "Horas totales del curso: ", style: "negrita", alignment: "left" },
      {
        text:
          programaCurso.horasAcompanamientoDocente +
          programaCurso.horasTrabajoIndependiente,
      },
      "",
      ""
    ]);

    ////////
    itemsInformacionGeneral2.push([
      { text: "Profesor(a) que elaboró: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.profesorElaboro,
        colSpan: 3
      },
      "",
      ""
    ]);

    itemsInformacionGeneral2.push([
      { text: "Correo electrónico: ", style: "negrita", alignment: "left" },
      {
        text: programaCurso.correoProfesorElaboro,
        colSpan: 3
      },
      "",
      ""
    ]);


    contenidoReporte.push({
      margin: [0, 15, 0, 0],
      table: {
        widths: [150, "*", 150, "*"],
        body: itemsInformacionGeneral,
      },
      layout: {
        vLineWidth(i, node) {
          return i === 0 || i === node.table.widths.length ? 1 : 0;
        },
      },
    });

    contenidoReporte.push({
      margin: [0, 15],
      table: {
        widths: [150, "*", 150, "*"],
        body: itemsInformacionGeneral2,
      },
      layout: {
        vLineWidth(i, node) {
          return i === 0 || i === node.table.widths.length ? 1 : 0;
        },
      },
    });

    contenidoReporte.push({
      margin: [0, 0],
      table: {
        widths: [150, "*", 150, "*"],
        body: itemsProgramas,
      },
      layout: {
        vLineWidth(i, node) {
          return i === 0 || i === node.table.widths.length ? 1 : 0;
        },
      },
    });


    const itemsInformacionEspecifica = [];

    itemsInformacionEspecifica.push([
      {
        text: "2. INFORMACIÓN ESPECÍFICA",
        style: "negrita",
        alignment: "justify",
        fillColor: this.GRIS,
      },
    ]);

    itemsInformacionEspecifica.push([
      {
        text: [
          {
            text: "DESCRIPCIÓN GENERAL Y JUSTIFICACIÓN DEL CURSO:\n\n",
            style: "negrita",
            alignment: "justify",
          },
          { text: programaCurso.descripcion + "\n\n", alignment: "justify" },
        ],
      },
    ]);

    const objetivosEspecificosElement = [];

    if (programaCurso.objetivosEspecificos) {
      if (programaCurso.objetivosEspecificos.trim()) {
        const objetivosEspecificos = programaCurso.objetivosEspecificos.split(
          "\n"
        );

        objetivosEspecificos.forEach((row) => {
          objetivosEspecificosElement.push({ text: row, alignment: "justify" });
        });
      }
    }

    itemsInformacionEspecifica.push([
      {
        stack: [
          {
            text: "OBJETIVO GENERAL:\n\n",
            style: "negrita",
            alignment: "justify",
          },
          {
            text: programaCurso.objetivoGeneral,
            alignment: "justify",
          },
          { text: " " },
        ],
      },
    ]);

    itemsInformacionEspecifica.push([
      {
        stack: [
          {
            text: "OBJETIVOS ESPECÍFICOS:\n\n",
            style: "negrita",
            alignment: "justify",
          },
          {
            ul: objetivosEspecificosElement,
          },
          { text: " " },
        ],
      },
    ]);

    contenidoReporte.push({
      margin: [0, 15, 0, 0],
      table: {
        widths: ["*"],
        body: itemsInformacionEspecifica,
      },
    });

    const itemsContenidoUnidades = [];
    itemsContenidoUnidades.push([
      {
        text: "Contenido",
        style: "negrita",
        alignment: "center",
        colSpan: 3,
      },
      "",
      ""
    ]);

    itemsContenidoUnidades.push([
      {
        text:
          "Unidades",
        style: "negrita",
        alignment: "center",
      },
      {
        text:
          "Temas",
        style: "negrita",
        alignment: "center",
      },
      {
        text:
          "Subtemas",
        style: "negrita",
        alignment: "center",
      },
    ]);

    programaCurso.unidades.sort((a, b) => a.orden - b.orden);
    programaCurso.unidades.forEach((unidad) => {
      const subtemasElement = [];
      // SUBTEMAS
      if (unidad.subtemas) {
        if (unidad.subtemas.trim()) {
          const subtemas = unidad.subtemas.split("\n");
          let subCount = 1;
          subtemas.forEach((row) => {
            if (row.trim().length > 0) {
              subtemasElement.push({
                text: row,
                alignment: "justify",
              });
              subCount++;
            }
          });
        }
      }

      itemsContenidoUnidades.push([
        {
          text: "Unidad " + unidad.orden,
          alignment: "justify",
        },
        {
          text: unidad.tema,
          alignment: "justify",
        },
        {
          ul: subtemasElement,
        },
      ]);
    });



    contenidoReporte.push({
      margin: [0, 15],
      table: {
        widths: [70, 153, 235],
        body: itemsContenidoUnidades
      }
    });

    let metodologia = [];
    metodologia.push([
      {
        text: "3. METODOLOGÍA (PROPUESTA)",
        style: "negrita",
        alignment: "justify",
        fillColor: this.GRIS,
      }
    ]);

    metodologia.push([
      {
        text: programaCurso.metodologia,
        alignment: "justify",
      },
    ]);

    contenidoReporte.push({
      margin: [0, 15, 0, 0],
      table: {
        widths: ["*"],
        body: metodologia,
      },
    });

    let actividadesCollection: Actividad[] = [];
    try {
      actividadesCollection = programaCurso.actividadesEvaluacion? JSON.parse(programaCurso.actividadesEvaluacion): actividadesCollection;
    } catch { }

    let actividadesEvaluacion = [];

    actividadesEvaluacion.push([
      {
        text: "Actividades de evaluación (Propuestas)",
        style: "negrita",
        alignment: "center",
        colSpan: 3,
      },
      "",
      ""
    ]);



    if (actividadesCollection.length === 0) {
      actividadesCollection.sort((a, b) => a.orden - b.orden);
      actividadesEvaluacion.push([
        {
          text: 'No se han ingresado actividades',
          alignment: "center",
          colSpan: 3
        },
        "",
        "",
      ]);
    } else {
      actividadesEvaluacion.push([
        {
          text: "Actividad de evaluación",
          style: "negrita",
          alignment: "center",
          fillColor: this.GRIS,
        }, {
          text: "Porcentaje",
          style: "negrita",
          alignment: "center",
          fillColor: this.GRIS,
        }, {
          text: "Semana",
          style: "negrita",
          alignment: "center",
          fillColor: this.GRIS,
        }
      ]);
    }
    actividadesCollection.forEach((actividad) => {

      actividadesEvaluacion.push([
        {
          text: actividad.actividad,
          alignment: "justify",
        },
        {
          text: `${actividad.porcentaje} %`,
          alignment: "center",
        },
        {
          text: actividad.semana,
          alignment: "center",
        },
      ]);
    });

    contenidoReporte.push({
      margin: [0, 15, 0, 0],
      table: {
        widths: [328, 65, 65],
        body: actividadesEvaluacion,
      },
    });

    contenidoReporte.push({
      margin: [0, 15],
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "Actividades de asistencia obligatoria:",
              style: "negrita",
              alignment: "justify"
            }
          ],
          [
            {
              text: programaCurso.actividadesObligatorias,
              alignment: "justify",
            }
          ],
        ],
      }
    });

    let bibliografia = [];
    bibliografia.push([
      {
        text: "Bibliografía",
        style: "negrita",
        alignment: "justify",
        fillColor: this.GRIS,
      }
    ]);

    const bibliografiaBasicaElement = [];
    const bibliografiaBasica = programaCurso.bibliografiaBasica.split("\n");

    bibliografiaBasica.forEach((row) => {
      bibliografiaBasicaElement.push({ text: row, alignment: "justify" });
    });
    bibliografia.push([
      {
        stack: [
          { text: "" },
          {
            ul: bibliografiaBasicaElement,
          },
          { text: " " },
        ],
      },
    ]);

    contenidoReporte.push({
      margin: [0, 15],
      table: {
        widths: ["*"],
        body: bibliografia,
      },
    });

    let profesores = [];

    let profesoresCollection: Profesor[] = [];
    try {
      profesoresCollection = programaCurso.profesores? JSON.parse(programaCurso.profesores): profesoresCollection;
    } catch { }
    profesores.push([
      {
        text: "4. Profesores",
        style: "negrita",
        alignment: "justify",
        fillColor: "#BFBFBF",
        colSpan: 6,
      },
      "",
      "",
      "",
      "",
      ""
    ]);


    if (profesoresCollection.length === 0) {
      profesoresCollection.sort((a, b) => a.orden - b.orden);
      profesores.push([
        {
          text: 'No se han ingresado profesores',
          alignment: "center",
          colSpan: 6
        },
        '',
        '',
        '',
        '',
        '',
      ]);
    } else {
      profesores.push([
        {
          text:
            "Nombres y Apellidos",
          style: "negrita",
          alignment: "center",
        },
        {
          text:
            "Dependencia",
          style: "negrita",
          alignment: "center",
        },
        {
          text:
            "Formación en pregrado y posgrado",
          style: "negrita",
          alignment: "center",
        },
        {
          text:
            "Unidad N°",
          style: "negrita",
          alignment: "center",
        },
        {
          text:
            "N° Horas",
          style: "negrita",
          alignment: "center",
        },
        {
          text:
            "Fechas (Semanas)",
          style: "negrita",
          alignment: "center",
        },
      ]);
    }
    profesoresCollection.forEach((profesor) => {
      profesores.push([
        {
          text: profesor.nombresApellidos,
          alignment: "justify",
        },
        {
          text: profesor.dependencia,
          alignment: "justify",
        },
        {
          text: profesor.formacionPregradoPosgrado,
          alignment: "justify",
        },
        {
          text: profesor.nroUnidad,
          alignment: "center",
        },
        {
          text: profesor.nroHoras,
          alignment: "center",
        },
        {
          text: profesor.fechaSemanas,
          alignment: "center",
        },
      ]);
    });

    contenidoReporte.push({
      margin: [0, 15],
      table: {
        widths: [100, 90, 73, 55, 50, 60],
        body: profesores
      }
    });


    if (programaCurso.estado == "A" && firmado) {
      contenidoReporte.push({
        margin: [0, 15],
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: "5. Aprobación del Consejo de la Unidad Académica",
                style: "negrita",
                alignment: "justify",
                fillColor: this.GRIS,
              },
            ],
            [
              {
                columns: [
                  [
                    { text: "\n" },
                    {
                      text:
                        programaCurso.materia.facultad.vicedecano
                          .nombreCompleto,
                      alignment: "center",
                    },
                    { text: "________________________", alignment: "center" },
                    {
                      text: "Nombre Completo",
                      style: "negrita",
                      alignment: "center",
                    },
                  ],
                  [
                    { text: "\n" },
                    { image: this.firma, fit: [70, 70], rowSpan: 2, alignment: "center", decoration: "underline" },
                    { text: "________________________", alignment: "center" },
                    { text: "Firma", style: "negrita", alignment: "center" },
                  ],
                  [
                    { text: "\n" },
                    {
                      text: "Secretario Consejo Facultad",
                      alignment: "center",
                    },
                    {
                      text: "________________________",
                      alignment: "center",
                    },
                    { text: "Cargo", style: "negrita", alignment: "center" },
                  ],
                ],
              },
            ],
          ],
        },
      });
    }
    if (programaCurso.resolucionComite) {
      let sePuedeAgregarResulucionComite = true;
      // Si tienen igual resolución indica que no necesita la aprobación de comité
      if (programaCurso.resolucionConsejo) {
        if (
          programaCurso.resolucionComite == programaCurso.resolucionConsejo
        ) {
          sePuedeAgregarResulucionComite = false;
        }
      }
      if (sePuedeAgregarResulucionComite) {
        contenidoReporte.push([
          {
            text: [
              {
                text:
                  "Aprobado por " +
                  programaCurso.comiteAvala +
                  " con acta " +
                  programaCurso.resolucionComite +
                  " del " +
                  this.fechaResolucionComite,
                alignment: "justify",
              },
            ],
          },
        ]);
      }
    }
    if (programaCurso.resolucionConsejo) {
      contenidoReporte.push([
        {
          text: [
            {
              text:
                "Aprobado en acta de Consejo de Facultad " +
                programaCurso.resolucionConsejo +
                " del " +
                this.fechaResolucionConsejo,
              alignment: "justify",
            },
          ],
        },
      ]);
    }

    contenidoReporte.push([
      {
        text: 'This is a header, using header style',
        pageBreak: 'before'
      },
    ])

    return contenidoReporte;
  }
}

import GeneralInformation from "./GeneralInformation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpecificInformation from "./SpecificInformation";
import ContentSubjects from "./ContentSubjects";
import TeachersInformation from "./TeachersInformation";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import General from "./General";
import { RingLoader } from "react-spinners";

import { useState, useEffect } from "react";
import { esquemaValidacion, valoresIniciales } from "./utils";
import Especific from "./Especific";
import Content from "./Content";
import Teacher from "./Teacher";
import { get } from "react-hook-form";

const SubjectInformation = ({ idSubjectSelected, readOnly }) => {
  const [respuesta, setRespuesta] = useState(valoresIniciales);

  const [valoresFinales, setValoresFinales] = useState();

  const [spinner, setSpinner] = useState(false);

  const data = idSubjectSelected.split("-");

  const transformarRespuesta = (respuesta) => {
    let arrayCaracteristicas = [];
    let caracteristicas = respuesta.caracteristicaCurso;
    const flag = caracteristicas.includes("-");

    if (flag) {
      arrayCaracteristicas = respuesta.caracteristicaCurso.split("-");
    } else {
      arrayCaracteristicas = respuesta.caracteristicaCurso;
    }

    let arrayContenido = [];
    let contenidos = respuesta.ccontenido;
    const flag2 = contenidos.includes("-");

    if (flag2) {
      arrayContenido = respuesta.ccontenido.split("-");
    } else {
      arrayContenido = respuesta.ccontenido;
    }

    const values = {
      unidadAcademica: respuesta.unidadAcademica,
      programaAcademico: respuesta.programaAcademico,
      programAcademicoOfertado: respuesta.programaOferta,
      areaUdeA: respuesta.areaUdea,
      nucleo: respuesta.nucleoPrograma,
      areaPrograma: respuesta.areaPrograma,
      vigencia: respuesta.vigencia,
      codigo: respuesta.codigoCurso,
      nombre: respuesta.nombreCurso,
      creditos: respuesta.creditos,
      hrsDocenciaDirecta: respuesta.horasDocenciaDirecta,
      tipo: respuesta.tipoContenido,
      regimenCurso: respuesta.regimen,
      caracteristica: arrayCaracteristicas,
      hrsTrabajoIndependiente: respuesta.horasTrabajoIndependiente,
      profesor: respuesta.elaboro,
      correo: respuesta.correo,
      descripcion: respuesta.cjustificacion,
      objetivoGeneral: respuesta.cobjetivoGeneral,
      objetivoEspecifico: respuesta.objetivoEspecifico,
      metodologia: respuesta.cmetodologia,
      resultadosAprendizaje: respuesta.resultadoaprendizaje,
      contenido: arrayContenido,
      nombreProfesor: respuesta.profesor,
      dependencia: respuesta.dependencia,
      formacionAcademica: respuesta.formacionAcademica,
      modalidadParticipacion: respuesta.modalidad,
      unidad: respuesta.unidad,
      nrHoras: respuesta.numeroHoras,
      fechaModificacion: respuesta.fecha,
    };
    setValoresFinales(values);
  };

  const consultar = async () => {
    let r = await validarExistencia(data[0]);
    if (r.idMateria !== null) transformarRespuesta(r);
  };

  useEffect(() => {
    setSpinner(true);
    consultar();
    setSpinner(false);
  }, [idSubjectSelected]);

  const validarExistencia = async (idMateria) => {
    let response;
    await fetch(
      "http://192.168.30.80:8080/microcurriculo/listarporid/" + idMateria,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        response = data;
      });
    return response;
  };

  const guardarDatos = async (info, setSubmitting) => {
    //setSubmitting(false);
    let dataToSave = Object.values(info);
    dataToSave[13] = dataToSave[13].join("-");
    dataToSave[22] = dataToSave[22].join("-");
    for (let index = 0; index < dataToSave.length; index++) {
      if (typeof dataToSave[index] === "number" && index !== 15) {
        dataToSave[index] = dataToSave[index].toString();
      }
    }

    dataToSave[7] = parseInt(dataToSave[7]);

    await fetch("http://192.168.30.80:8080/microcurriculo/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        codMicrocurriculo: dataToSave[7],
        idMateria: dataToSave[7],
        resultadoaprendizaje: dataToSave[21],
        tipoContenido: dataToSave[11],
        cproposito: dataToSave[17],
        cjustificacion: dataToSave[17],
        cobjetivoGeneral: dataToSave[18],
        elaboro: dataToSave[15],
        unidadAcademica: dataToSave[0],
        programaAcademico: dataToSave[2],
        vigencia: dataToSave[6],
        codigoCurso: dataToSave[7],
        nombreCurso: dataToSave[8],
        areaUdea: dataToSave[3],
        nucleoPrograma: dataToSave[4],
        areaPrograma: dataToSave[5],
        regimen: dataToSave[12],
        creditos: dataToSave[9],
        horasDocenciaDirecta: dataToSave[10],
        horasTrabajoIndependiente: dataToSave[14],
        caracteristicaCurso: dataToSave[13],
        correo: dataToSave[16],
        objetivoEspecifico: dataToSave[19],
        dependencia: dataToSave[24],
        formacionAcademica: dataToSave[25],
        modalidad: dataToSave[26],
        unidad: dataToSave[27],
        numeroHoras: dataToSave[28],
        fecha: dataToSave[29],
        programaOferta: dataToSave[2],
        profesor: dataToSave[23],
        ccontenido: dataToSave[22],
        cmetodologia: dataToSave[20],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Guardado exitoso");
      });
  };

  const actualizarDatos = async (info, setSubmitting) => {
    let dataToSave = Object.values(info);
    dataToSave[13] = dataToSave[13].join("-");
    dataToSave[22] = dataToSave[22].join("-");
    for (let index = 0; index < dataToSave.length; index++) {
      if (typeof dataToSave[index] === "number" && index !== 15) {
        dataToSave[index] = dataToSave[index].toString();
      }
    }
    dataToSave[7] = parseInt(dataToSave[7]);

    await fetch("http://192.168.30.80:8080/microcurriculo/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        codMicrocurriculo: dataToSave[7],
        idMateria: dataToSave[7],
        resultadoaprendizaje: dataToSave[21],
        tipoContenido: dataToSave[11],
        cproposito: dataToSave[17],
        cjustificacion: dataToSave[17],
        cobjetivoGeneral: dataToSave[18],
        elaboro: dataToSave[15],
        unidadAcademica: dataToSave[0],
        programaAcademico: dataToSave[2],
        vigencia: dataToSave[6],
        codigoCurso: dataToSave[7],
        nombreCurso: dataToSave[8],
        areaUdea: dataToSave[3],
        nucleoPrograma: dataToSave[4],
        areaPrograma: dataToSave[5],
        regimen: dataToSave[12],
        creditos: dataToSave[9],
        horasDocenciaDirecta: dataToSave[10],
        horasTrabajoIndependiente: dataToSave[14],
        caracteristicaCurso: dataToSave[13],
        correo: dataToSave[16],
        objetivoEspecifico: dataToSave[19],
        dependencia: dataToSave[24],
        formacionAcademica: dataToSave[25],
        modalidad: dataToSave[26],
        unidad: dataToSave[27],
        numeroHoras: dataToSave[28],
        fecha: dataToSave[29],
        programaOferta: dataToSave[2],
        profesor: dataToSave[23],
        ccontenido: dataToSave[22],
        cmetodologia: dataToSave[20],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = window.location.href;
      })
      .catch((error) => {
        console.error("Error:", error);
       });
  };

  const onSubmit = async (values, setSubmitting) => {
    let data = values;
    if (valoresFinales !== undefined) {
      actualizarDatos(data, setSubmitting);
    } else {
      guardarDatos(data, setSubmitting);
    }
  };

  return (
    <>
      <div className="h-full">
        {spinner ? (
          <div className="flex items-center justify-center h-full">
            <RingLoader color={"#09612d"} loading={spinner} size={250} />
          </div>
        ) : (
          <Formik
            initialValues={valoresFinales || respuesta}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              onSubmit(values, setSubmitting);
            }}
            enableReinitialize
            validationSchema={esquemaValidacion}
          >
            {({ values, isSubmitting, handleSubmit, handleReset }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Accordion expanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Información General</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <General
                        dataSubject={data}
                        values={values}
                        readOnly={readOnly}
                      />
                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Información Especifica</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Especific values={values} readOnly={readOnly} />
                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Contenido</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Content valuesB={values} readOnly={readOnly} />
                    </AccordionDetails>
                  </Accordion>

                  <Accordion expanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        Coordinador de núcleo - Area academica
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Teacher values={values} readOnly={readOnly} />
                    </AccordionDetails>
                  </Accordion>

                  <div className="text-center">
                    <Button type="submit" disabled={isSubmitting}>
                      Guardar
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        )}
      </div>
    </>
  );
};

export default SubjectInformation;

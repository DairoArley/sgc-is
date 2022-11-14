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

import { useState, useEffect } from "react";
import { esquemaValidacion, valoresIniciales } from "./utils";
import Especific from "./Especific";
import Content from "./Content";
import Teacher from "./Teacher";
import { get } from "react-hook-form";

const SubjectInformation = ({ idSubjectSelected, readOnly }) => {
  const [respuesta, setRespuesta] = useState(valoresIniciales);

  const [dataBack, setDataBack] = useState([]);
  // {respuesta === "true" && <button>Guardar</button>}
  // {respuesta !== "" && <ErrorData msg={respuesta} />}

  const mostrar = async (event) => {
    /*let temp = respuesta
    event.preventDefault();
    let v = document.getElementsById("unidad").value
    if (v.length == 0) {
      let nuevo = temp.concat(' ', "Unidad académica");
      setRespuesta(nuevo);
      console.log(respuesta);
    }
    if (document.getElementById("programa").value == "") {
      let nuevo2 = temp.concat(' ', "Programa académico");
      setRespuesta(nuevo2);	
      console.log(nuevo2)
    }*/
  };

  const data = idSubjectSelected.split("-");

  useEffect(() => {
    //fetch
    const respuestaApi = [];
    if (respuestaApi.length === 0) {
      setRespuesta(valoresIniciales);
    } else {
      setRespuesta(respuestaApi);
    }
  }, [idSubjectSelected]);

  let contenidoResumido;
  let caracteristicas;

  const guardarDatos = async (info, setSubmitting) => {
    //setSubmitting(false);
    let dataToSave = Object.values(info);
    dataToSave[13] = dataToSave[13].join("-");
    dataToSave[22] = dataToSave[22].join("-");
    console.log(dataToSave);
    //et()
    await fetch("http://192.168.30.80:8080/microcurriculo/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        codMicrocurriculo: dataToSave[7] + data[3],
        idMateria: dataToSave[7],
        resultadoaprendizaje: dataToSave[21],
        tipoContenido: dataToSave[11],
        cproposito: dataToSave[17],
        cjustificacion: dataToSave[17],
        cobjetivoGeneral: dataToSave[18],
        elaboro: 0,
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
        console.log(data);
      });
  };

  const onSubmit = async (values, setSubmitting) => {
    //setSubmitting(false);
    let data = values;
    guardarDatos(data, setSubmitting);
  };

  return (
    <>
      <div className="h-full">
        <Formik
          initialValues={respuesta}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            onSubmit(values, setSubmitting);
          }}
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

        {/* 
  
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Coordinador de núcleo - Area academica</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TeachersInformation idSubjectSelected={idSubjectSelected} />
            </AccordionDetails>
          </Accordion> */}
      </div>
    </>
  );
};

export default SubjectInformation;

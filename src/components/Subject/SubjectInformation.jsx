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

const SubjectInformation = ({ idSubjectSelected, readOnly }) => {
  const [respuesta, setRespuesta] = useState(valoresIniciales);

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
    const respuestaApi = [];
    if (respuestaApi.length === 0) {
      setRespuesta(valoresIniciales);
    } else {
      setRespuesta(respuestaApi);
    }
  }, [idSubjectSelected]);

  const onSubmit = async (values, setSubmitting) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <div className="h-full">
        <Formik
          initialValues={respuesta}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
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

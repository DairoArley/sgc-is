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


  useEffect(() => {
    const respuestaApi = [];
    if(respuestaApi.length === 0){
      setRespuesta(valoresIniciales);
    }else{
      setRespuesta(respuestaApi);
    }
  }, [])
  

  const onSubmit = async (values, setSubmitting) => {
    setSubmitting(false);
    console.log(values);
  };

  return (
    <>
      <div>
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
                    <General id={idSubjectSelected} values={values} readOnly={readOnly} />
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
                    <Especific values={values} />
                  </AccordionDetails>
                </Accordion>
                <Button type="submit" disabled={isSubmitting}>
                  Guardar
                </Button>
              </form>
            );
          }}
        </Formik>

        {/* <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Información Específica</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SpecificInformation />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Contenido Resumido</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ContentSubjects idSubjectSelected={idSubjectSelected} />
            </AccordionDetails>
          </Accordion>

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

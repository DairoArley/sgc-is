import GeneralInformation from "./GeneralInformation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpecificInformation from "./SpecificInformation";
import ContentSubjects from "./ContentSubjects";
import TeachersInformation from "./TeachersInformation";

import { useState } from "react";
import ErrorData from "../Modal/ErrorData";

const SubjectInformation = ({ idSubjectSelected, readOnly }) => {
  const [respuesta, setRespuesta] = useState("");

  // {respuesta === "true" && <button>Guardar</button>}
  // {respuesta !== "" && <ErrorData msg={respuesta} />}

  const mostrar = async (event) => {
    event.preventDefault();
    if (document.getElementById("unidad").value === "") {
      setRespuesta({ ...respuesta, respuesta: respuesta+"Unidad" });
    }
    if (document.getElementById("programa").value === "") {
      setRespuesta({ ...respuesta, respuesta: respuesta+"Programa Academico" });
    }
    console.log(respuesta);
  };

  return (
    <>
      <div>
        <form onSubmit={mostrar}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Información General</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <GeneralInformation id={idSubjectSelected} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
          <Accordion>
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

          <Accordion>
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
          </Accordion>

          <button type="submit">Guardar</button>
        </form>
      </div>
 
    </>
  );
};

export default SubjectInformation;

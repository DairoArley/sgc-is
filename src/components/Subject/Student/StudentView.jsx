import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import GeneralInfo from "./GeneralInfo";
import { SpecificInfo } from "./SpecificInfo";
import ContentInfo from "./ContentInfo";
import { TeacherInfo } from "./TeacherInfo";

export const StudentView = ({ idSubjectSelected, readOnly }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Información General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralInfo readOnly={readOnly} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Información Especifica</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SpecificInfo readOnly={readOnly} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Contenido Resumido</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ContentInfo readOnly={readOnly} />
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
          <TeacherInfo />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

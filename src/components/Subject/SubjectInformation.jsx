import GeneralInformation from "./GeneralInformation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpecificInformation from "./SpecificInformation";
import ContentSubjects from "./ContentSubjects";
import ActivitiesInformation from "./ActivitiesInformation";
import TeachersInformation from "./TeachersInformation";

const SubjectInformation = ({idSubjectSelected, readOnly }) => {
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
          <GeneralInformation readOnly={readOnly} />
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
          <SpecificInformation/>
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
          <ContentSubjects idSubjectSelected= {idSubjectSelected}/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Actividades Evaluativas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ActivitiesInformation idSubjectSelected= {idSubjectSelected}/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Profesores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TeachersInformation idSubjectSelected= {idSubjectSelected}/>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default SubjectInformation;

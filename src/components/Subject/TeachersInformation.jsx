import React from "react";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

const TeachersInformation = ({ idSubjectSelected }) => {
  const [teachers, setTeachers] = React.useState([
    {
      fullName: "",
      dependency: "",
      studyLevel: "",
      modality: "",
      unit: "",
      hours: "",
      dates: "",
    },
  ]);

  const [temporalTeachers, setTemporalTeachers] = React.useState([
    {
      fullName: "",
      dependency: "",
      studyLevel: "",
      modality: "",
      unit: "",
      hours: "",
      dates: "",
    },
  ]);



  const validar = () => {

    setTemporalTeachers(teachers);
    setTeachers(
        {
          fullName: "",
          dependency: "",
          studyLevel: "",
          modality: "",
          unit: "",
          hours: "",
          dates: "",
        }
      )
  };

  return (
    <div>
      <form>
        <div className="flex flex-wrap lg:flex-row w-full">
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", fontSize: "0.9rem" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              value={teachers.fullName}
              label="Nombre completo"
              type="text"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.fullName = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" , fontSize: "0.9rem"},
                input: { fontWeight: "bold" },
              }}
              autoFocus
              value={teachers.dependency}
              label="Dependencia"
              type="text"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.dependency = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", fontSize: "0.9rem" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              value={teachers.studyLevel}
              label="Formación académica"
              type="text"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.studyLevel = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", fontSize: "0.9rem" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              value={teachers.modality}
              label="Modalidad de participación"
              type="text"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.modality = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="w-1/6">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", width: "100%", fontSize: "0.9rem" },
                input: { fontWeight: "bold", width: "100%" },
                div: { width: "50%" },
              }}
              autoFocus
              value={teachers.unit}
              label="Unidad N°"
              type="number"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.unit = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="w-1/6">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", width: "50%", fontSize: "0.9rem" },
                input: { fontWeight: "bold", width: "100%" },
                div: { width: "50%" },
              }}
              autoFocus
              value={teachers.hours}
              label="N° Horas"
              type="number"
              variant="outlined"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.hours = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>
          <DialogContent className="w-1/6 sm:w-1/3 mt-4">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold", width: "100%", fontSize: "0.9rem" },
                input: { fontWeight: "bold", width: "100%" },
                div: { width: "50%" },
              }}
              autoFocus
              value={teachers.dates}
              type="date"
              variant="standard"
              className="w-full"
              onChange={(e) => {
                const teacherChange = teachers.map((teacher) => {
                  teacher.dates = e.target.value;
                  return teacher;
                });
                setTeachers(teacherChange);
              }}
            />
          </DialogContent>

          <button
            type="button"
            onClick={validar}
            className="ml-5 bg-textColor text-white border-2 rounded-lg w-40 h-12 mt-5"
          >
            Guardar
          </button>
        </div>
      </form>
      <br />
      <table className="border-2 rounded-sm mx-auto w-5/6">
        <tr>
          <th>Nombres y apellidos</th>
          <th>Dependencia</th>
          <th>Formación en pregrado y posgrado</th>
          <th>Modalidad de participación</th>
          <th>Unidad N°</th>
          <th>N° horas</th>
          <th>Fechas</th>
        </tr>

        {temporalTeachers.map((teacher) => (
          <tr className="text-center">
            <td>{teacher.fullName}</td>
            <td>{teacher.dependency}</td>
            <td>{teacher.studyLevel}</td>
            <td>{teacher.modality}</td>
            <td>{teacher.unit}</td>
            <td>{teacher.hours}</td>
            <td>{teacher.dates}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TeachersInformation;

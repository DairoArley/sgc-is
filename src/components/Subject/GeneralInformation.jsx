import { useState } from "react";
import { useForm } from "react-hook-form";
import * as React from "react";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { FormLabel, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const GeneralInformation = ({ readOnly }) => {
  const [formData, setFormData] = useState({
    unidadAcademica: "",
    programaAcademico: "",
    programAcademicoOfertado: "",
    vigencia: "",
    codigo: "",
    nombre: "",
    area: ["Básica", "Específica", "Investigación", "Complementaria"],
    tipo: ["Teórico", "Práctico", "Teórico-Práctico"],
    creditos: "",
    modalidad: ["Presencial", "Virtual", "A distancia"],
    prerequisitos: "",
    hrsDocenciaDirecta: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-lg font-bold">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap lg:flex-row w-full">
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Unidad Académica"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="w-full lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Programa académico al que pertenece"
              //placeholder="Escriba nombre del programa académico"
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Programas donde se oferta"
              //placeholder="Escriba nombres de los programas académicos"
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Vigencia"
              //placeholder="Escriba nombres de los programas académicos"
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Código curso"
              //placeholder="Escriba nombres de los programas académicos"
              type="number"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Nombre del curso"
              //placeholder="Escriba nombres de los programas académicos"
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
        </div>

        <div className="flex flex-wrap lg:flex--row">
          <span className="pl-5 pr-2 pb-2 pt-2">
            Área o componente de formación del currículo :
            <select
              name="select"
              className="border-lg rounded-lg ml-2 border-2"
            >
              <option value="value1">Elija un elemento</option>
              {formData.area.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </span>

          <span className="pl-5 pr-2 pb-2 pt-2">
            Tipo de curso :
            <select
              name="select"
              className="border-lg rounded-lg ml-2 border-2"
            >
              <option value="value1">Elija un elemento</option>
              {formData.tipo.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </span>

          <span className="pl-5 pr-2 pb-2 pt-2">
            Modalidad :
            <select
              name="select"
              className="border-lg rounded-lg ml-2 border-2"
            >
              <option value="value1">Elija un elemento</option>
              {formData.modalidad.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </span>
        </div>

        <div className="flex flex-wrap lg:flex-row w-full">
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Créditos académicos"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="number"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Horas docencia directa"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="number"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Horas trabajo independiente"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="number"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <FormLabel>Características del curso :</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Validable"
              className="pl-5"
            />
            <FormControlLabel value="option2" control={<Radio />} label="Habilitable" className="pl-5"/>
            <FormControlLabel value="option3" control={<Radio />} label="Clasificable" className="pl-5"/>
            <FormControlLabel value="option4" control={<Radio />} label="Evaluación de suficiencia" className="pl-5"/>
          </RadioGroup>
          <DialogContent className="sm:w-1/2 lg:w-2/5">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Profesor(a) que elaboró"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="text"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
          <DialogContent className="sm:w-1/2 lg:w-1/3">
            <TextField
              sx={{
                label: { color: "#09612d", fontWeight: "bold" },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Correo electrónico"
              //placeholder="Escriba nombre de la Unidad Académica."
              type="email"
              variant="standard"
              className="w-full"
            />
          </DialogContent>
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;

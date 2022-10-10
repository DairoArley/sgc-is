import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { FormLabel, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const GeneralInformation = ({ id }) => {
  const [formData, setFormData] = useState({
    unidadAcademica: "",
    programaAcademico: "",
    programAcademicoOfertado: "",
    vigencia: "",
    codigo: "",
    nombre: "",
    area: [
      "Básica / Ciencia",
      "Básica / Ing",
      "Específica / Prof",
      "Investigación",
      "Complementaria",
    ],
    nucleo: [
      "Ciencias exactas y naturales",
      "Básicas de ingenieria",
      "Ciencia de la computación e informática",
      "Ingenieria de computadores y redes",
      "Ingenieria de software y sistemas de información",
    ],
    areaPrograma: [
      "Matemáticas",
      "Física",
      "lengua materna",
      "socio humanidades",
      "obtencion y aplicacion de conocimiento",
      "Matematicas discretas",
      "Algoritmia y programación",
      "Ciencia e ingenieria computacionales",
      "Arquitectura de maquinas y sistemas operativos",
      "Comunicacion de datos",
      "Ingenieria de software",
      "Sistemas de información",
      "Administración de sistemas de información",
      "Elementos sociales y profesionales",
    ],
    areaEspecifica: ["Ciencias Exactas y Naturales", "computación"],
    tipo: ["Teórico", "Práctico", "Teórico-Práctico"],
    creditos: "",
    regimenCruso: [
      "O: obligatoria administrada x Sists.",
      "Of: obligatoria NO administrada x Sists.",
      "E: Electiva específica creada y administrada x Sists.",
      "Ef: Electiva específica creada y NO administrada x Sists.",
      "E_: Electiva Genérica",
      "E^: Electiva con incertidumbre de inclusión en el reporte",
    ],
    prerequisitos: "",
    hrsDocenciaDirecta: "",
  });

  /*const validate = () => {
    if(formData.unidadAcademica === ""){
      alert("El campo Unidad Académica no puede estar vacío");
      return false;
    }
    return true;
  }*/

  const save = async (event) => {
    event.preventDefault();
    /*const response = validate();
    if(!response){
      console.log("No se pudo guardar");
    }*/
    /* fetch("http://localhost:8089/microcurriculo/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idMateria: id,
        campoformacion: formData.unidadAcademica,
        hti: "string",
        nroimpartido: "string",
        porcdiligenciados: "string",
        resultadoaprendizaje: "string",
        tipoContenido: "string",
        cproposito: "string",
        cjustificacion: "string",
        cobjetivoGeneral: "string",
        csaber: "string",
        chacer: "string",
        cser: "string",
        elaboro: 0,
        ccontenido: "string",
        cmetodologia: "string",
        cevaluacion: "string",
        cunidadesDetallas: "string",
      }),
    }).then(() => {
      console.log("Microcurriculum done");
    });*/
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-lg font-bold">
      <label className="text-sm">Los campos marcados con * son obligatorios</label>
      <div className="flex flex-wrap lg:flex-row w-full">
        <DialogContent className="sm:w-1/2 lg:w-1/3">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            id="unidad"
            required
            label="Unidad Académica"
            placeholder="Escriba nombre de la Unidad Académica."
            type="text"
            name="unidadAcademica"
            variant="outlined"
            className="w-full"
          />
        </DialogContent>
        <DialogContent className="w-full lg:w-1/3">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            id="programa"
            required
            label="Programa académico al que pertenece"
            placeholder="Escriba nombre del programa académico"
            type="text"
            variant="outlined"
            name="programaAcademico"
            className="w-full"
          />
        </DialogContent>
        <DialogContent className="sm:w-1/2 lg:w-1/3">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            required
            label="Programas donde se oferta"
            placeholder="Escriba nombres de los programas académicos"
            type="text"
            variant="outlined"
            name="programAcademicoOfertado"
            className="w-full"
          />
        </DialogContent>
        <div className="mt-8 mx-auto flex flex-wrap lg:flex-row w-3/4">
          <DialogContent className="w-1/6">
            <TextField
              id="vigenciaInput"
              sx={{
                label: {
                  color: "#09612d",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Vigencia"
              type="text"
              variant="outlined"
              onChange={handleInputChange}
              name="vigencia"
              className="w-3/5"
            />
          </DialogContent>
          <DialogContent className="w-1/6">
            <TextField
              sx={{
                label: {
                  color: "#09612d",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Código curso"
              type="number"
              variant="outlined"
              onChange={handleInputChange}
              name="codigo"
              className="w-3/5"
            />
          </DialogContent>
          <DialogContent className="MuiDialogContent-root vigencia">
            <TextField
              sx={{
                label: {
                  color: "#09612d",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                },
                input: { fontWeight: "bold" },
              }}
              autoFocus
              label="Nombre del curso"
              //placeholder="Escriba nombres de los programas académicos"
              type="text"
              onChange={handleInputChange}
              name="nombre"
              variant="outlined"
            />
          </DialogContent>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-row items-center justify-center mx-auto">
        <span className="pl-5 pb-2 pt-2">
          Área UdeA:
          <select name="select" className="border-lg rounded-lg ml-2 border-2">
            <option value="value1">Elija un elemento</option>
            {formData.area.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </span>

        <span className="pl-5 pb-2 pt-2">
          Núcleo Programa:
          <select name="select" className="border-lg rounded-lg ml-2 border-2">
            <option value="value1">Elija un elemento</option>
            {formData.nucleo.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </span>

        <span className="pl-5 pb-2 pt-2">
          Área Programa:
          <select name="select" className="border-lg rounded-lg ml-2 border-2">
            <option value="value1">Elija un elemento</option>
            {formData.areaPrograma.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </span>

        <span className="pl-5 pr-2 pb-2 pt-2">
          Tipo de curso :
          <select name="select" className="border-lg rounded-lg ml-2 border-2">
            <option value="value1">Elija un elemento</option>
            {formData.tipo.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </span>

        <span className="pl-5 pr-2 pb-2 pt-2">
          Regimen :
          <select name="select" className="border-lg rounded-lg ml-2 border-2">
            <option value="value1">Elija un elemento</option>
            {formData.regimenCruso.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </span>
      </div>

      <div className="mt-8 mx-auto flex flex-wrap lg:flex-row w-3/4">
        <DialogContent className="w-1/6">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            autoFocus
            label="Créditos"
            type="number"
            onChange={handleInputChange}
            name="creditos"
            variant="outlined"
            className="w-3/5"
          />
        </DialogContent>
        <DialogContent className="w-1/5">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            autoFocus
            label="Horas docencia directa"
            type="number"
            onChange={handleInputChange}
            name="hrsDocenciaDirecta"
            variant="outlined"
            className="w-3/5"
          />
        </DialogContent>
        <DialogContent className="w-1/3">
          <TextField
            sx={{
              label: {
                color: "#09612d",
                fontWeight: "bold",
                fontSize: "0.9rem",
              },
              input: { fontWeight: "bold" },
            }}
            autoFocus
            label="Horas trabajo independiente"
            //placeholder="Escriba nombre de la Unidad Académica."
            type="number"
            variant="outlined"
            className="w-2/3"
          />
        </DialogContent>
      </div>
      <div className="flex flex-row mx-auto items-center justify-center">
        <FormLabel>Características del curso :</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Validable"
            className="pl-5"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Habilitable"
            className="pl-5"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Clasificable"
            className="pl-5"
          />
          <FormControlLabel
            value="option4"
            control={<Radio />}
            label="Evaluación de suficiencia"
            className="pl-5"
          />
        </RadioGroup>
      </div>
      <div className="flex flex-wrap w-1/2 mx-auto">
        <DialogContent className="sm:w-1/2 lg:w-1/3">
          <TextField
            sx={{
              label: { color: "#09612d", fontWeight: "bold" },
              input: { fontWeight: "bold" },
            }}
            autoFocus
            label="Profesor(a) que elaboró"
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
    </div>
  );
};

export default GeneralInformation;

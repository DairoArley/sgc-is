import React from "react";
import Input from "../inputs/Input";
import SelectInput from "../inputs/SelectInput";
import {
  opcionesTipoArea,
  opcionesTipoAreaPrograma,
  opcionesTipoCaracteristica,
  opcionesTipoNucleo,
  opcionesTipoRegimen,
  opcionesTipoTipo,
} from "./utils";

const General = ({ dataSubject, values, readOnly }) => {

  const codigo = dataSubject[0];
  const creditos = dataSubject[1];
  const nombre = dataSubject[2];
  const newValues = values;
  newValues.codigo = codigo;
  newValues.creditos = creditos;
  newValues.nombre = nombre;

  values = newValues;

 

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <Input
          name="unidadAcademica"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese la unidad academica"
          value={values}
          label="Unidad Academica"
        />
        <Input
          name="programaAcademico"
          type="text"
          placeholder="Ingrese la programa academico"
          value={values}
          disabled={readOnly}
          label="programa Academico"
        />
        <Input
          name="programAcademicoOfertado"
          type="text"
          placeholder="Ingrese los programas académicos"
          value={values}
          disabled={readOnly}
          label="Programas donde es ofertada la asignatura"
        />
      </div>

       <div className="flex flex-col lg:flex-row">
        <SelectInput
          name="areaUdeA"
          label="Área UdeA"
          opciones={opcionesTipoArea}
          value={values}
        />
        <SelectInput
          name="nucleo"
          label="Núcleo programa"
          opciones={opcionesTipoNucleo}
          value={values}
        />
        <SelectInput
          name="areaPrograma"
          label="Área del programa"
          opciones={opcionesTipoAreaPrograma}
          value={values}
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Input
          name="vigencia"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese la vigencia"
          value={values}
          label="Vigencia"
        />
        <Input
          name="codigo"
          type="number"
          disabled={true}
          placeholder="Ingrese el código del curso"
          value={values}
          label="Código del curso"
        />
        <Input
          name="nombre"
          type="text"
          disabled={true}
          placeholder="Ingrese el nombre del curso"
          value={values}
          label="Nombre del curso"
        />
        <Input
          name="creditos"
          type="number"
          disabled={true}
          placeholder="Ingrese el número de créditos del curso"
          value={values}
          label="Créditos del curso"
        />
        <Input
          name="hrsDocenciaDirecta"
          type="number"
          disabled={readOnly}
          placeholder="Ingrese las horas de docencia directa del curso"
          value={values}
          label="horas de docencia directa del curso"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <SelectInput
          name="tipo"
          label="Tipo de curso"
          opciones={opcionesTipoTipo}
          value={values}
        />
        <SelectInput
          name="regimenCurso"
          label="Régimen del curso"
          opciones={opcionesTipoRegimen}
          value={values}
        />
        <SelectInput
          name="caracteristica"
          multiple
          label="Caracteristica del curso"
          opciones={opcionesTipoCaracteristica}
          value={values}
        />
        
      </div>
      <div className="flex flex-col lg:flex-row">
      <Input
          name="hrsTrabajoIndependiente"
          type="number"
          disabled={readOnly}
          placeholder="Ingrese las horas de trabajo independiente del curso"
          value={values}
          label="horas de trabajo independiente del curso"
        />
        <Input
          name="profesor"
          type="number"
          disabled={readOnly}
          placeholder="Ingrese el nombre del profesor"
          value={values}
          label="Documento del Profesor que elaboró"
        />
        <Input
          name="correo"
          type="email"
          disabled={readOnly}
          placeholder="Ingrese el correo del profesor"
          value={values}
          label="Correo del profesor que elaboró"
        />
      </div> 
    </div>
  );
};

export default General;

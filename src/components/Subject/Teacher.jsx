import React from "react";
import Input from "../inputs/Input";

const Teacher = ({ values, readOnly }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <Input
          name="nombreProfesor"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese el nombre del profesor"
          value={values}
          label="Nombre del docente"
        />
        <Input
          name="dependencia"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese la dependencia"
          value={values}
          label="Dependencia"
        />
        <Input
          name="formacionAcademica"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese la formación académica"
          value={values}
          label="Formación académica"
        />
      </div>
      <div className="flex flex-col lg:flex-row mb-44">
        <Input
          name="modalidadParticipacion"
          type="text"
          disabled={readOnly}
          placeholder="Ingrese la modalidad de participación"
          value={values}
          label="Modalidad de participación"
        />
        <Input
          name="unidad"
          type="number"
          disabled={readOnly}
          placeholder="Ingrese la unidad"
          value={values}
          label="Unidad"
        />
        <Input
          name="nrHoras"
          type="number"
          disabled={readOnly}
          placeholder="Ingrese el numero de horas dedicadas"
          value={values}
          label="Número de horas"
        />
        <Input
          name="fechaModificacion"
          type="date"
          disabled={readOnly}
          value={values}
          label="Fecha de modificación"
        />
      </div>
    </div>
  );
};

export default Teacher;

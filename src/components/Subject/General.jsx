import React from "react";
import Input from "../inputs/Input";

const General = ({ id, values, readOnly }) => {
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
         placeholder="Ingrese los programas académicos ofertados"
         value={values}
         disabled={readOnly}
         label="Programa ofertado"
       />

       
       </div>
    </div>
  );
};

export default General;

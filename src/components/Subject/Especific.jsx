import React from "react";
import SelectInput from "../inputs/SelectInput";
import { opcionesTipoArea, opcionesTipoNucleo } from "./utils";

const Especific = ({ values }) => {
  return (
    <div>
      <SelectInput
        name="area"
        multiple
        label="Tipo de area"
        opciones={opcionesTipoArea}
        value={values}
      />
      <SelectInput
        name="nucleo"
        label="Tipo de nucleo"
        opciones={opcionesTipoNucleo}
        value={values}
      />
    </div>
  );
};

export default Especific;

import { FieldArray } from "formik";
import React from "react";
import Input from "../inputs/Input";
import DeleteIcon from "@mui/icons-material/Delete";

const Content = ({ valuesB, readOnly }) => {


  return (
    <div>
      <FieldArray name="contenido">
        {(fieldArrayProps) => {
          //console.log("fieldArrayProps", fieldArrayProps);
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { contenido } = values;
          return (
            <div>
              {contenido.map((contenido, index) => (
                <div key={index}>
                    <div className="lg:w-1/2 flex flex-col lg:flex-row mx-auto">
                    <Input
                    name={`contenido[${index}]`}
                    type="text"
                    disabled={readOnly}
                    placeholder="Ingrese el contenido"
                    value={values}
                    label={"Unidad número: "+ (index)}
                  />
                  <button
                    type="button"
                    onClick={() => push(index)}
                    className="bg-textColor text-white border-2 rounded-lg w-40 lg:mt-8 mt-2"
                  >
                    Agregar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                        if(index > 0) remove(index) } 
                    }
                    className="bg-textColor text-white border-2 rounded-lg w-40 lg:mt-8 mt-2"
                  >
                    Eliminar
                  </button>
                    </div>
                  
                  
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default Content;

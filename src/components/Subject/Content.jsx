import { Field, FieldArray } from "formik";
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
              {contenido.map((content, index) => (
                <div key={index}>
                  <div className="lg:w-1/2 flex flex-col lg:flex-row mx-auto h-24">
                    {/* <Input
                    id="contenido"
                    name={`contenido[${index}]`}
                    type="text"
                    disabled={readOnly}
                    placeholder="Ingrese el contenido"
                    value={contenido[index]}
                    label={"Unidad número: "+ (index)}
                  />  */}
                
                      <Field autoComplete="off"
                        readOnly={readOnly} 
                        className="border-2 rounded-lg m-auto h-14 hover:bg-preColor text-center lg:w-full sm:w-32"
                        name={`contenido[${index}]`}
                      />
  

                    <div className="flex flex-row items-center justify-center mx-5">
                      <button
                        type="button"
                        disabled={readOnly}
                        onClick={() => push(index)}
                        className="bg-textColor text-white border-2 rounded-lg w-32"
                      >
                        Agregar
                      </button>
                      <button
                        type="button"
                        disabled={readOnly}
                        onClick={() => {
                          if (index > 0) remove(index);
                        }}
                        className="bg-textColor text-white border-2 rounded-lg w-32"
                      >
                        Eliminar
                      </button>
                    </div>
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

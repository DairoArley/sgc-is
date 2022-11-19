import React from "react";
import SelectInput from "../inputs/SelectInput";
import TextArea from "../inputs/TextArea";
import { opcionesTipoArea, opcionesTipoNucleo } from "./utils";

const Especific = ({ values, readOnly }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <TextArea
          name="descripcion"
          label="Descripción general y justificación del curso:"
          placeholder="Realizar una descripción general que considere el propósito del curso en coherencia con los objetivos de formación del programa académico y una justificación que evidencia la pertinencia del curso."
          value={values}
          disabled={readOnly}
        />

        <TextArea
          name="objetivoGeneral"
          label="Objetivo general:"
          placeholder="Escribir el objetivo general o el propósito principal del curso. En caso de que el curso esté definido por competencias, se describirán las competencias generales."
          value={values}
          disabled={readOnly}
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <TextArea
          name="objetivoEspecifico"
          label="Objetivos especificos / Competencias:"
          placeholder="Escribir los objetivos específicos del curso. En caso de que el curso esté definido por competencias, se describirán las competencias específicas."
          value={values}
          disabled={readOnly}
        />
        <TextArea
          name="metodologia"
          label="Metodología:"
          placeholder="Describa las estrategias de enseñanza y aprendizaje que mediarán el desarrollo del curso, incluya las actividades de trabajo en presencia del profesor y de trabajo independiente, así como la evaluación de los aprendizajes."
          value={values}
          disabled={readOnly}
        />
      </div>
      <TextArea
          name="resultadosAprendizaje"
          label="Resultados de aprendizaje:"
          placeholder="Describa los resultados de aprendizaje que se espera que los estudiantes alcancen al finalizar el curso."
          value={values}
          disabled={readOnly}
        />

    </div>
  );
};

export default Especific;

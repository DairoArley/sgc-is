import TextareaAutosize from "@mui/material/TextareaAutosize";

const SpecificInformation = () => {
  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-md">
      <form className="flex flex-col gap-3">
        <span>Descripción general y justificación del curso:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Realizar una descripción general que considere el propósito del curso en coherencia con los objetivos de formación del programa académico y una justificación que evidencia la pertinencia del curso. "
          style={{ width: "100%" }}
        />
        <span>Objetivo general:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Escribir el objetivo general o el propósito principal del curso. En caso de que el curso esté definido por competencias, se describirán las competencias generales. "
          style={{ width: "100%" }}
        />
        <span>Objetivos especificos:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Escribir los objetivos específicos del curso. En caso de que el curso esté definido por competencias, se describirán las competencias específicas"
          style={{ width: "100%" }}
        />
      <span>Metodología</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Describa las estrategias de enseñanza y aprendizaje que mediarán el desarrollo del curso, incluya las actividades de trabajo en presencia del profesor y de trabajo independiente, así como la evaluación de los aprendizajes."
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
};

export default SpecificInformation;

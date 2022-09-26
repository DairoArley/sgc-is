import TextareaAutosize from "@mui/material/TextareaAutosize";

export const SpecificInfo = ({ idSubjectSelected, readOnly }) => {
  const data = [
    {
      descGeneral:
        "Para la fundamentación y desarrollo de las áreas de la computación y la informática varias estructuras matemáticas empleadas en la representación  de fenómenos discretos, son objetos que ofrecen soporte conceptual y formalismo matemático. El planteamiento de algoritmos y la elaboración de programas requieren de secuencias lógicas de pasos (procedimientos) y de operación sobre conjuntos de datos. Existen varios tipos de relaciones matemáticas, entre ellas las álgebras booleanas, que no sólo generalizan las nociones de lógica y de conjunto sino que, además, se aplican en el diseño de circuitos lógicos.",
      generalObjective:
        "Asistir al estudiante en el proceso de: Comprender y aplicar leyes, conceptos, principios y teorías básicos del campo de las Ciencias de la Computación, como sustento científico y tecnológico en el desarrollo de software y hardware.",
      specificObjective:
        "- Conocer los conceptos y propiedades de las estructuras matemáticas discretas." +
        "\n" +
        "- Construir modelos matemáticos discretos. - Conocer métodos para modelar fenómenos discretos.",
      methodology:
        "Unidades I, II y III" +
        "\n" +
        "Actividad sugerida previa a cada sesión:" +
        "\n" +
        "▪ Lectura previa de la bibliografía básica. Responsable(s): estudiantes." +
        "\n" +
        "Posibles actividades en cada sesión:" +
        "\n" +
        "▪ Presentación de caso(s) y/o problema(s). Responsable(s): profesor." +
        "\n" +
        "▪ Presentación de conceptos; explicitación de representación matemática. Responsable(s): profesor." +
        "\n" +
        "▪ Análisis y discusión. Responsable(s): profesor y estudiantes." +
        "\n" +
        "▪ Presentación de taller(es). Responsable(s): profesor; monitor(es) del curso." +
        "\n" +
        "▪ Solución de taller(es). Responsable(s): estudiantes." +
        "\n" +
        "▪ Talleres de capacitación en lenguaje bajo paradigma de Programación Lógica. Responsable(s):profesor y monitor(es)." +
        "\n" +
        "Actividad posterior a cada sesión:" +
        "\n" +
        "▪ Uso de una cuenta creada en Internet, grupo virtual, para discusión de conceptos, ejercicios y tareas.",
      results: "",
    },
  ];

  const organizeData = (completeString) => {
    let array = completeString.split("\n");
    let organizedArray = array.map((item) => {
      return item;
    });
    return organizedArray;
  };

  //console.log(organizeData(data[0].methodology));

  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-md">
      <form className="flex flex-col gap-3">
        <span>Descripción general y justificación del curso:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder={data[0].descGeneral}
          style={{ width: "100%" }}
          readOnly={readOnly}
        />
        <span>Objetivo general:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder={data[0].generalObjective}
          style={{ width: "100%" }}
          readOnly={readOnly}
        />
        <span>Objetivos especificos / Competencias:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder={data[0].specificObjective}
          style={{ width: "100%" }}
          readOnly={readOnly}
        />
        <span>Metodología</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder={data[0].methodology}
          style={{ width: "100%" }}
          readOnly={readOnly}
        />
        <span>Resultados de aprendizaje</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder={data[0].results}
          style={{ width: "100%" }}
          readOnly={readOnly}
        />
      </form>
    </div>
  );
};

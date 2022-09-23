import TextareaAutosize from "@mui/material/TextareaAutosize";

const GeneralInfo = ({ idSubjectSelected, pensumVersion, readOnly }) => {
  const data = [
    {
      unidadAcademica: "Facultad de Ingenieria",
      programaAcademico: "Ingenieria de sistemas",
      programAcademicoOfertado:
        "Programa Ingeniería de Sistemas presencial Medellín, Programa Ingeniería de Sistemas virtual",
      vigencia: "2017-2 2021-2",
      codigo: "2508207",
      nombre: "Matemáticas Discretas I",
      area: "Básica / Ciencia",
      tipo: ["Teórico-Práctico"],
      modalidad: ["Presencial"],
      creditos: "3",
      regimenCruso: ["Obligatorio", "Electivo"],
      caracteristicas: [
        "Validable ",
        "Habilitable ",
        "Clasificable ",
        "Evaluación de suficiencia",
      ],
      prerequisitos: "",
      hrsDocenciaDirecta: "4",
      hrsTrabajoIndependiente: "16",
      hrsTotalesCurso: "20",
      profesor: "Hernando Silva",
      correo: "hsilva@udea.edu.co",
    },
  ];

  /*
        "Básica / Ciencia",
        "Básica / Ing",
        "Específica / Prof",
        "Investigación",
        "Complementaria",
        */

  return (
    <div className="mx-auto font-sans rounded-lg  font-bold flex flex-wrap gap-8">
      <div className="text-textColor text-xl flex flex-row">
        Unidad Académica :
        <p className="text-lg ml-1 text-black">{data[0].unidadAcademica}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row">
        Programa Acádemico :
        <p className="text-lg ml-1 text-black">{data[0].programaAcademico}</p>
      </div>
      <div className="text-textColor text-xl flex flex-wrap w-80">
        Programas donde es ofertado :
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2 text-sm"
          placeholder={data[0].programAcademicoOfertado}
          style={{ width: "70%", height: "100px" }}
          readOnly={readOnly}
        />
      </div>
      <div className="text-textColor text-xl flex flex-row">
        Vigencia :<p className="text-lg ml-1 text-black">{data[0].vigencia}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Código :<p className="text-lg ml-1 text-black">{data[0].codigo}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row">
        Nombre :<p className="text-lg ml-1 text-black">{data[0].nombre}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row">
        Área :<p className="text-lg ml-1 text-black">{data[0].area}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Tipo :<p className="text-lg ml-1 text-black">{data[0].tipo}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Créditos :<p className="text-lg ml-1 text-black">{data[0].creditos}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Caracteristica del curso :
        <p className="text-lg ml-1 text-black">{data[0].caracteristicas}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Modalidad del curso :
        <p className="text-lg ml-1 text-black">{data[0].modalidad}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Horas de docencia directa :
        <p className="text-lg ml-1 text-black">{data[0].hrsDocenciaDirecta}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Horas de trabajo independiente :
        <p className="text-lg ml-1 text-black">
          {data[0].hrsTrabajoIndependiente}
        </p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Horas totales :
        <p className="text-lg ml-1 text-black">{data[0].hrsTotalesCurso}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Profesor que elaboró :
        <p className="text-lg ml-1 text-black">{data[0].profesor}</p>
      </div>
      <div className="text-textColor text-xl flex flex-row ">
        Correo electrónico :
        <p className="text-lg ml-1 text-black">{data[0].correo}</p>
      </div>
    </div>
  );
};

export default GeneralInfo;

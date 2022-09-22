import TextareaAutosize from "@mui/material/TextareaAutosize";

const GeneralInfo = ({ idSubjectSelected, readOnly }) => {

    const data = [
        {
          unidadAcademica: "",
          programaAcademico: "Ingenieria de sistemas",
          programAcademicoOfertado:
            "Programa Ingeniería de Sistemas presencial Medellín, Programa Ingeniería de Sistemas virtual",
          vigencia: "",
          codigo: "2508207",
          nombre: "Matemáticas Discretas I",
          area: "Básica / Ciencia",
          tipo: ["Teórico", "Práctico", "Teórico-Práctico"],
          creditos: "3",
          regimenCruso: [
            "O: obligatoria administrada x Sists.",
            "Of: obligatoria NO administrada x Sists.",
            "E: Electiva específica creada y administrada x Sists.",
            "Ef: Electiva específica creada y NO administrada x Sists.",
            "E_: Electiva Genérica",
            "E^: Electiva con incertidumbre de inclusión en el reporte",
          ],
          prerequisitos: "",
          hrsDocenciaDirecta: "64",
        },
      ];

        /* "Básica / Ing",
        "Específica / Prof",
        "Investigación",
        "Complementaria",
        */


  return (
    <div className="mx-auto font-sans rounded-lg  font-bold flex flex-wrap gap-8">
            <div className="text-textColor text-xl flex flex-row">
              Unidad Académica :
              <p className="text-lg ml-1 text-black">
                {data[0].unidadAcademica}
              </p>
            </div>
            <div className="text-textColor text-xl flex flex-row">
              Programa Acádemico :
              <p className="text-lg ml-1 text-black">
                {data[0].programaAcademico}
              </p>
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
              Vigencia :
              <p className="text-lg ml-1 text-black">
                {data[0].vigencia}
              </p>
            </div>
            <div className="text-textColor text-xl flex flex-row ">
              Código :
              <p className="text-lg ml-1 text-black">
                {data[0].codigo}
              </p>
            </div>
            <div className="text-textColor text-xl flex flex-row">
              Nombre :
              <p className="text-lg ml-1 text-black">
                {data[0].nombre}
              </p>
            </div>
            <div className="text-textColor text-xl flex flex-row">
              Área :
              <p className="text-lg ml-1 text-black">
                {data[0].area}
              </p>
            </div>
          </div>
  )
}

export default GeneralInfo
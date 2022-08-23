import { useState } from "react";
import { useForm } from "react-hook-form";
import InputFormat from "./InputFormat";

const GeneralInformation = ({ readOnly }) => {
  const [formData, setFormData] = useState({
    unidadAcademica: "",
    programaAcademico: "",
    programAcademicoOfertado: "",
    vigencia: "",
    codigo: "",
    nombre: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-lg font-bold">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormat
          titleInput={"Unidad Académica :"}
          nameInput={"unidadAcademica"}
          value={formData.unidadAcademica}
          placeholderMessage="Escriba nombre de la Unidad Académica."
          readOnly={readOnly}
          method={setFormData}
          dataForm={formData}
        />
        <InputFormat
          titleInput={"Programa académico al que pertenece :"}
          nameInput={"programaAcademico"}
          value={formData.programaAcademico}
          placeholderMessage="Escriba nombre del Programa Académico."
          readOnly={readOnly}
          method={setFormData}
          dataForm={formData}
        />
        <InputFormat
          titleInput={"Programas académicos a los cuales se ofrece el curso :"}
          nameInput={"programaAcademicoOfertados"}
          value={formData.programaAcademicoOfertado}
          placeholderMessage="Escriba nombre del Programa Académico."
          readOnly={readOnly}
          method={setFormData}
          dataForm={formData}
        />
        <div className="md:flex">
          <InputFormat
            titleInput={"Vigencia :"}
            nameInput={"vigencia"}
            value={formData.vigencia}
            placeholderMessage="Semestre o Cohorte"
            readOnly={readOnly}
            method={setFormData}
            dataForm={formData}
          />
          <InputFormat
            titleInput={"Código curso :"}
            nameInput={"codigoCurso"}
            value={formData.codigo}
            placeholderMessage="Código curso en MARES"
            readOnly={readOnly}
            method={setFormData}
            dataForm={formData}
          />
        </div>
        <InputFormat
          titleInput={"Nombre del curso :"}
          nameInput={"nombreCurso"}
          value={formData.nombre}
          placeholderMessage="Escriba nombre del curso."
          readOnly={readOnly}
          method={setFormData}
          dataForm={formData}
        />

        <InputFormat
          titleInput={"Área o componente de formación del currículo :"}
          nameInput={"nombreCurso"}
          value={formData.nombre}
          placeholderMessage="Escriba nombre del curso."
          readOnly={readOnly}
          method={setFormData}
          dataForm={formData}
        />
      </form>
    </div>
  );
};

export default GeneralInformation;

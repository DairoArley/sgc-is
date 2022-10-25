import * as Yup from "yup";

export const valoresIniciales = {
  unidadAcademica: "dddd",
  programaAcademico: "",
  programAcademicoOfertado: "",
  vigencia: "",
  codigo: "",
  nombre: "",
  area: [],
  nucleo: [],
  areaPrograma: [],
  areaEspecifica: [],
  tipo: [],
  creditos: "",
  regimenCruso: [],
  prerequisitos: "",
  hrsDocenciaDirecta: "",
};


 export const opcionesTipoArea = [
    { value: 'BASICO', label: 'Básico' },
    { value: 'OBLIGATORIO', label: 'Obligatorio' },
    { value: 'profundización', label: 'Profundización' },
  ]

  export const opcionesTipoNucleo = [
    { value: 'BASICO', label: 'Básico' },
    { value: 'OBLIGATORIO', label: 'Obligatorio' },
    { value: 'profundización', label: 'Profundización' },
  ]

export const esquemaValidacion = Yup.object().shape({
  unidadAcademica: Yup.string().required("Campo requerido"),
  programaAcademico: Yup.string().required("Campo requerido"),
  programAcademicoOfertado: Yup.string().required("Campo requerido"),
  // vigencia: Yup.string().required('Campo requerido'),
  // codigo: Yup.string().required('Campo requerido'),
  // nombre: Yup.string().required('Campo requerido'),
  area: Yup.array().required("Campo requerido"),
  // nucleo: Yup.array().required('Campo requerido'),
  // areaPrograma: Yup.array().required('Campo requerido'),
  // areaEspecifica: Yup.array().required('Campo requerido'),
  // tipo: Yup.array().required('Campo requerido'),
  // creditos: Yup.string().required('Campo requerido'),
  // regimenCruso: Yup.array().required('Campo requerido'),
  // prerequisitos: Yup.string().required('Campo requerido'),
  // hrsDocenciaDirecta: Yup.string().required('Campo requerido'),
});

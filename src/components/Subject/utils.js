import * as Yup from "yup";

export const valoresIniciales = {
  unidadAcademica: "",
  programaAcademico: "",
  programAcademicoOfertado: "",
  areaUdeA: "",
  nucleo: "",
  areaPrograma: "",
  vigencia: "",
  codigo: "",
  nombre: "",
  creditos: "",
  hrsDocenciaDirecta: "",
  tipo: "",
  regimenCurso: "",
  caracteristica: [],
  hrsTrabajoIndependiente: "",
  profesor: "",
  correo: "",
  descripcion: "",
  objetivoGeneral: "",
  objetivoEspecifico: "",
  metodologia: "",
  resultadosAprendizaje: "",
  contenido: ['discretas 1', 'discretas 2'],
  nombreProfesor: "",
  dependencia: "",
  formacionAcademica: "",
  modalidadParticipacion: "",
  unidad: "",
  nrHoras: "",
  fechaModificacion: "",
};



export const valoresIniciales2={
  versionMalla:""
}


 export const opcionesTipoArea = [
    { value: "Básica / Ciencia", label: "Básica / Ciencia" },
    { value: "Básica / Ing", label: "Básica / Ing"},
    { value: "Específica / Prof", label: "Específica / Prof" },
    { value: "Investigación", label: "Investigación" },
    { value: "Complementaria", label: "Complementaria" },
  ]

  export const opcionesTipoTipo = [
    { value: "Teórico", label: "Teórico" },
    { value: "Práctico", label: "Práctico"},
    { value: "Teórico-Práctico", label: "Teórico-Práctico" },
  ]

  export const opcionesTipoCaracteristica = [
    { value: "Validable", label: "Validable" },
    { value: "Habilitable", label: "Habilitable"},
    { value: "Clasificable", label: "Clasificable" },
    { value: "Evaluación de suficiencia", label: "Evaluación de suficiencia" },
  ]

  export const opcionesTipoRegimen = [
    { value: "O: obligatoria administrada x Sists.", label: "O: obligatoria administrada x Sists." },
    { value: "Of: obligatoria NO administrada x Sists.", label: "Of: obligatoria NO administrada x Sists."},
    { value: "E: Electiva específica creada y administrada x Sists.", label: "E: Electiva específica creada y administrada x Sists." },
    { value: "Ef: Electiva específica NO creada y NO administrada x Sists.", label: "Ef: Electiva específica NO creada y NO administrada x Sists." },
    { value: "E_: Electiva Genérica", label: "E_: Electiva Genérica" },
    { value: "E^: Electiva con incertidumbre de inclusión en el reporte", label: "E^: Electiva con incertidumbre de inclusión en el reporte" },
  ]

  export const opcionesTipoAreaPrograma = [
    { value: "Matemáticas", label: "Matemáticas" },
    { value: "Física", label: "Física"},
    { value: "lengua materna", label: "lengua materna" },
    { value: "socio humanidades", label: "socio humanidades" },
    { value: "obtencion y aplicacion de conocimiento", label: "obtencion y aplicacion de conocimiento" },
    { value: "Matematicas discretas", label: "Matematicas discretas"},
    { value: "Algoritmia y programación", label: "Algoritmia y programación"},
    { value: "Ciencia e ingenieria computacionales", label: "Ciencia e ingenieria computacionales"},
    { value: "Arquitectura de maquinas y sistemas operativos", label: "Arquitectura de maquinas y sistemas operativos"},
    { value: "Comunicacion de datos", label: "Comunicacion de datos"},
    { value: "Ingenieria de software", label: "Ingenieria de software"},
    { value: "Sistemas de información", label: "Sistemas de información"},
    { value: "Administración de sistemas de información", label: "Administración de sistemas de información"},
    { value: "Elementos sociales y profesionales", label: "Elementos sociales y profesionales"},
  ]

  export const opcionesTipoNucleo = [
    { value: "Ciencias exactas y naturales", label: "Ciencias exactas y naturales" },
    { value: "Básicas de ingenieria", label: "Básicas de ingenieria" },
    { value: "Ciencia de la computación e informática", label: "Ciencia de la computación e informática" },
    { value: "Ingenieria de computadores y redes", label: "Ingenieria de computadores y redes" },
    { value: "Ingenieria de software y sistemas de información", label: "Ingenieria de software y sistemas de información" },
  ]


  export const opcionesVersionMalla = [
    {value: "1", label: "Versión 1"},
    {value: "2", label: "Versión 2"},
    {value: "3", label: "Versión 3"},
    {value: "4", label: "Versión 4"},
    {value: "5", label: "Versión 5"},
  ]

export const esquemaValidacion = Yup.object().shape({
  //General
  unidadAcademica: Yup.string().required("Campo requerido"),
  programaAcademico: Yup.string().required("Campo requerido"),
  programAcademicoOfertado: Yup.string().required("Campo requerido"),
  areaUdeA: Yup.string().required("Campo requerido"),
  nucleo: Yup.string().required('Campo requerido'),
  areaPrograma: Yup.string().required("Campo requerido"),
  vigencia: Yup.string().required('Campo requerido'),
  codigo: Yup.string().required('Campo requerido'),
  nombre: Yup.string().required('Campo requerido'),
  caracteristica: Yup.array().required("Campo requerido").test('caracteristica', 'Debe seleccionar al menos una opción', val => val.length > 0),
  tipo: Yup.string().required('Campo requerido'),
  creditos: Yup.string().required('Campo requerido').test('creditos', 'Debe ser un número entero', val => Number.isInteger(Number(val))).test('creditos', 'Debe ser un número entre 0 y 5', val => Number(val) >= 0 & Number(val) <= 5),
  regimenCurso: Yup.string().required('Campo requerido'),
  hrsDocenciaDirecta: Yup.string().required('Campo requerido').test('hrsDocenciaDirecta', 'El valor debe ser mayor a 0', value => value > 0),
  hrsTrabajoIndependiente: Yup.string().required('Campo requerido').test('hrsTrabajoIndependiente', 'El valor debe ser mayor a 0', value => value > 0),
  correo: Yup.string().email('Correo inválido').required('Campo requerido'),
  profesor: Yup.string().required('Campo requerido'),
  //Especifica
  descripcion: Yup.string().required('Campo requerido'),
  objetivoGeneral: Yup.string().required('Campo requerido'),
  objetivoEspecifico: Yup.string().required('Campo requerido'),
  metodologia: Yup.string().required('Campo requerido'),
  resultadosAprendizaje: Yup.string().required('Campo requerido'),
  //contenido
  contenido: Yup.array().required('Campo requerido'),
  //Profesor
  nombreProfesor: Yup.string().required('Campo requerido'),
  dependencia: Yup.string().required('Campo requerido'),
  formacionAcademica: Yup.string().required('Campo requerido'),
  modalidadParticipacion: Yup.string().required('Campo requerido'),
  unidad: Yup.string().required('Campo requerido'),
  nrHoras: Yup.string().required('Campo requerido'),
  fechaModificacion: Yup.string().required('Campo requerido'),

});


export const esquemaValidacion2 = Yup.object().shape({
  versionMalla: Yup.string().required('Campo requerido'),
})

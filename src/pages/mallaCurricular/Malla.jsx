import React, { useEffect, useState } from "react";
import SelectInput from "../../components/inputs/SelectInput";
import { Subject } from "../../components/Subject/Subject";
import { opcionesVersionMalla } from "../../components/Subject/utils";
import { subject2 } from "../../utils/dataPensum";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import {
  esquemaValidacion,
  valoresIniciales,
} from "../../components/Subject/utils";

const Malla = () => {
  
  const [subjectSelected, setSubjectSelected] = useState();
  const [versionSelected, setVersionSelected] = useState(false);


  const selectSubject = (subject) => {
    console.log(subject);
    setSubjectSelected(subject);
  };

  // const [spinner, setSpinner] = useState(false);
  // const [subject2, setSubject2] = useState([]);

  // const facultad = "25";
  // const version = "3";
  // const programa = "504";

  let subject3 = [];

  // const traerData = () => {
  //   fetch("http://localhost:8089/microcurriculo/listar/requisitosmateria", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       facultad: facultad,
  //       version: version,
  //       programa: programa,
  //     }),
  //   }).then((response) => response.json())
  //     .then((data) => {
  //       subject3 = data.map((item) => {
  //         return {
  //           materia: item.materia,
  //           nombreMateria: item.nombreMateria,
  //           creditos: 5,
  //           nivel: item.nivel,
  //           requisitos: item.requisitos,
  //         };
  //       });
  //       setSubject2(subject3);
  //       setSpinner(true);
  //     });
  //     console.log(subject2[1]);
  // };

  // useEffect(() => {
  //   traerData();
  // }, []);

  let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [respuesta, setRespuesta] = useState(valoresIniciales);

  const onSubmit = async (values, setSubmitting) => {
    console.log("hola hola");
    console.log(values);
    setSubmitting(false);
  };

  useEffect(() => {
    console.log(respuesta);
    setRespuesta(valoresIniciales);
  }, []);

  return (
    <>
    
    <div className="w-screen border-2 font-sans">
      <div className="h-11 bg-topbarColor">
        <h1 className="text-center text-textColor font-bold">
          Malla Curricular
        </h1>
      </div>
      <div>
        <h1 className="text-textColor font-bold text-center text-xl">
          504 - INGENIERIA DE SISTEMAS
        </h1>
        <br />
        <div className="mx-auto text-center w-max bg-textColor text-white">
          Créditos totales para grado:168
          <p>
            Version actual:{" "}
            {
              //subject2[0].version
              5
            }
          </p>
        </div>
        <div className="w-full">
          <Formik
            initialValues={respuesta}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              onSubmit(values, setSubmitting);
            }}
            validationSchema={esquemaValidacion}
          >
            {({ values, isSubmitting, handleSubmit, handleReset }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <SelectInput
                    name="versionMalla"
                    label="Versión de la malla curricular"
                    opciones={opcionesVersionMalla}
                    value={values}
                  />

                  <div className="text-center">
                    <Button type="submit" disabled={isSubmitting}>
                      Consultar
                    </Button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
        
      </div>
      <br />
      
      {/* {spinner === true && ( */}
      { versionSelected === true && (
      <div className="p-2 flex flex-row sm:flex-wrap gap-4 ml-4">
        {levels.map((level) => (
          <div key={level} className="flex flex-col md:flex-wrap items-center">
            <h1 className="text-textColor font-bold">Nivel {level}</h1>
            {subject2.map((subject) => {
              if (subject.nivel === level) {
                return (
                  <Subject
                    key={subject.materia}
                    name={subject.nombreMateria}
                    cod={subject.materia}
                    credits={subject.creditos}
                    onClick={() => selectSubject(subject)}
                    selectedSubject={subjectSelected}
                  />
                );
              }
            })}
          </div>
        ))}
      </div>
      )}
      </div>
    
    </>
  );
  
};

export default Malla;

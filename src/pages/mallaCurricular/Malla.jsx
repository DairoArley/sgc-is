import React, { useEffect, useState } from "react";
import SelectInput from "../../components/inputs/SelectInput";
import { Subject } from "../../components/Subject/Subject";
import { opcionesVersionMalla } from "../../components/Subject/utils";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import {
  esquemaValidacion2,
  valoresIniciales2,
} from "../../components/Subject/utils";
import { data } from "autoprefixer";
import ClipLoader from "react-spinners/ClipLoader";
import { RingLoader } from "react-spinners";

import { subject2 } from "../../utils/dataPensum";

const Malla = () => {
  const [subjectSelected, setSubjectSelected] = useState();
  const [versionSelected, setVersionSelected] = useState(false);
  const [version, setVersion] = useState();

  const selectSubject = (subject) => {
    setSubjectSelected(subject);
  };

  const [spinner, setSpinner] = useState(false);
 // const [subject2, setSubject2] = useState([]);

  const facultad = "25";
  const programa = "504";

  let subject3 = [];

  const traerData = async (version) => {
    console.log(version)
    fetch("http://192.168.30.80:8080/microcurriculo/listar/requisitosmateria", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        facultad: facultad,
        version: version,
        programa: programa,
      }),
    }).then((response) => response.json())
      .then((data) => {
        subject3 = data.map((item) => {
          return {
            materia: item.materia,
            nombreMateria: item.nombreMateria,
            creditos: item.creditos,
            nivel: item.nivel,
            requisitos: item.requisitos,
          };
        });
        //setSubject2(subject3);
        setSpinner(false);
        setVersionSelected(true);
      });
      
  };

  let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [respuesta, setRespuesta] = useState(valoresIniciales2);

  const onSubmit = async (values, setSubmitting) => {
    setSubmitting(false);
    setSpinner(true);
    setSubjectSelected();
    //traerData(values.versionMalla);
    setVersion(values.versionMalla)
    setTimeout(() => {
      setSpinner(false);
      setVersionSelected(true);
    }, 5000);
  };

  useEffect(() => {
    
    setRespuesta(valoresIniciales2);
  }, []);

  return (
    <div className="w-screen border-2 font-sans">
      {spinner ? (
        <div className="flex items-center justify-center h-full">
          <RingLoader color={"#09612d"} loading={spinner} size={250} />
        </div>
      ) : (
        <div >
          <div className="h-11 bg-preColor">
            <h1 className="text-center text-textColor font-bold">
              Malla Curricular
            </h1>
          </div>
          <div>
            <h1 className="text-textColor font-bold text-center text-xl mt-2">
              504 - INGENIERIA DE SISTEMAS
            </h1>
            <br />
            <div className="mx-auto text-center w-1/3 bg-textColor text-white border  rounded-xl mb-2">
              Créditos totales para grado:168
              <p>
                Version actual:{" "}
                {
                  version
                }
              </p>
            </div>
            <div className="w-1/2 mx-auto mt-10">
              <Formik
                initialValues={respuesta}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  onSubmit(values, setSubmitting);
                }}
                validationSchema={esquemaValidacion2}
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

          <div>
            {versionSelected === true && (
              <div className="p-2 flex flex-row sm:flex-wrap gap-4 ml-4">
                {levels.map((level) => (
                  <div
                    key={level}
                    className="flex flex-col md:flex-wrap items-center"
                  >
                    <h1 className="text-textColor font-bold">Nivel {level}</h1>
                    {subject2.map((subject) => {
                      if (subject.nivel === level) {
                        return (
                          <Subject
                            key={subject.materia}
                            name={subject.nombreMateria}
                            cod={subject.materia}
                            credits={subject.creditos}
                            version={version}
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
        </div>
      )}
    </div>
  );
};

export default Malla;

import React, { useState } from "react";
import { Subject } from "../../components/Subject/Subject";
import { subject2 } from "../../utils/dataPensum";

const Malla = () => {
  const [subjectSelected, setSubjectSelected] = useState();

  const selectSubject = (subject) => {
    setSubjectSelected(subject);
  };

  let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="mx-auto w-100 border-r-amber-200 border-2 font-sans">
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
          <p>Version actual: {subject2[0].version}</p>
        </div>
      </div>
      <br />

      <div className='p-2 flex flex-row gap-4'>
        {levels.map((level) => (
          <div key={level} className="flex flex-col items-center">
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
            }
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Malla;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Person = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8089/persona/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  /*fetch("http://localhost:8089/persona/create",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "numeroId": 10,
        "nombre": "Juan",
        "apellido": "Sanchez"
      })

  }).then(()=>{
    console.log("New Student added")
  })*/

  const crear = async (event) => {};

  return (
    <div className="border-2 w-full flex flex-col items-center">
      <table className="table-fixed mx-auto mt-8 border-2 w-2/5 text-center ">
        <tr className="font-sans rounded-lg text-textColor text-5xl font-bold">
          <th className="w-2/5 p-5">Nombres</th>
          <th className="w-2/5">Apellidos</th>
        </tr>
        {students.map((student) => (
          <tr className="text-xl font-semibold hover:bg-cardSubjectColor">
            <td className="p-1.5">{student.nombre}</td>
            <td>{student.apellido}</td>
          </tr>
        ))}
      </table>
      <NavLink to={"/personCreate"}>
        <button
          onClick={crear}
          className="w-48 mt-10 border-2 p-5 text-3xl font-bold text-textColor bg-preColor rounded-2xl"
        >
          Agregar
        </button>
      </NavLink>
    </div>
  );
};

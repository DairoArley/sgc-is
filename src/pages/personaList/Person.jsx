import React, { useEffect, useState } from "react";

export const Person = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8089/persona/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);



    fetch("http://localhost:8089/persona/create",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        "numeroId": 10,
        "nombre": "Juan",
        "apellido": "Sanchez"
      })

  }).then(()=>{
    console.log("New Student added")
  })


  return (
    <div className="border-2 rounded-lg">
      {students.map((student) => (
        <div key={student.id}>
            <h1>{student.nombre}</h1>
            <h1>{student.apellido}</h1>
        </div> 
      ))}
    </div>
  );
};

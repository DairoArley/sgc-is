import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import PersonList from "./PersonaList";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Person = () => {
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [edit, setEdit] = useState(false);
  const [idPerson, setIdPerson] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8089/persona/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, [students]);

  const reload = () => {
    window.location.replace("");
  };

  const deletePerson = (id) => {
    console.log(id)
    fetch("http://localhost:8089/persona/delete/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      reload();
    });
  };

  let idP = 0;

  const updatePerson = (id) => {
    idP = id;
    setShow(true, setEdit(true), setIdPerson(idP));
  };

  return (
    <div className="border-2 w-full flex flex-col items-center">
      <table className="table-fixed mx-auto mt-8 border-2 w-3/5 text-center">
        <tr className="font-sans rounded-lg text-textColor text-5xl font-bold border-2">
          <th className="w-2/5 p-5 mx-auto">Id</th>
          <th className="w-2/5 p-5 mx-6">Nombres</th>
          <th className="w-2/5 p-5 mx-6">Apellidos</th>
          <th className="w-2/5 p-5 mx-6">Editar</th>
        </tr>
        {students.map((student) => (
          <tr className="text-xl font-semibold hover:bg-cardSubjectColor">
            <td className="p-1.5">{student.numeroId}</td>
            <td className="p-1.5">{student.nombre}</td>
            <td>{student.apellido}</td>
            <td className="text-textColor">
              <DeleteIcon
                className="mx-4"
                onClick={deletePerson.bind(student.numeroId)}
              />
              <EditIcon
                className="mx-4"
                onClick={updatePerson.bind(this,student.numeroId)}
              />
            </td>
          </tr>
        ))}
      </table>
      <Modal show={show} edit={edit} id={idPerson} className="ml-10">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <PersonList edit={edit} id={idPerson} />
          </>
        </Modal.Body>
      </Modal>
      <button
        onClick={handleShow}
        className="w-48 mt-10 border-2 p-5 text-3xl font-bold text-textColor bg-preColor rounded-2xl"
      >
        Agregar
      </button>
    </div>
  );
};

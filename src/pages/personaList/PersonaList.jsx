import "./personaList.css";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

export default function PersonList({ edit, id }) {
  const [data, setData] = useState({
    id: "",
    nombre: "",
    apellido: "",
  });

  const data2 = {
    id: "",
    nombre: "",
    apellido: "",
  };

  const reload = () => {
    window.location.replace("");
  };

  const crearUsuario = async (event) => {
    event.preventDefault();
    fetch("http://localhost:8089/persona/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numeroId: data.id,
        nombre: data.nombre,
        apellido: data.apellido,
      }),
    }).then(() => {
      setShow(false);
      reload();
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const updatePerson = async (event) => {
    event.preventDefault();
    fetch("http://localhost:8089/persona/update/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        numeroId: id,
        nombre: data.nombre,
        apellido: data.apellido,
      }),
    }).then(() => {
      setShow(false);
      reload();
    });
  };

  const [show, setShow] = useState(true);

  const handleShow = () => setShow(true);

  return (
    <div className="w-full">
      <Modal show={show} className="ml-10">
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <form
              onSubmit={crearUsuario}
              className="flex flex-wrap w-full border-2 h-64"
            >
              <DialogContent className="w-1/5">
                <TextField
                  sx={{
                    label: {
                      color: "#09612d",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    },
                    input: { fontWeight: "bold" },
                  }}
                  required
                  label="Nombres"
                  name="nombre"
                  placeholder="Escriba sus nombres"
                  type="text"
                  value={data.nombre}
                  onChange={handleInputChange}
                  variant="outlined"
                  className="w-1/2"
                />
              </DialogContent>
              <DialogContent className="w-1/5">
                <TextField
                  sx={{
                    label: {
                      color: "#09612d",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    },
                    input: { fontWeight: "bold" },
                  }}
                  required
                  label="Apellidos"
                  placeholder="Escriba sus apellidos"
                  type="text"
                  variant="outlined"
                  name="apellido"
                  onChange={handleInputChange}
                  className="w-1/2"
                />
              </DialogContent>
              <DialogContent className="w-1/4">
                <TextField
                  sx={{
                    label: {
                      color: "#09612d",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    },
                    input: { fontWeight: "bold" },
                  }}
                  label="Correo"
                  placeholder="Escriba su correo"
                  type="email"
                  variant="outlined"
                  className="w-1/2"
                />
              </DialogContent>
              {edit === false && (
                <DialogContent className="w-1/5">
                  <TextField
                    sx={{
                      label: {
                        color: "#09612d",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      },
                      input: { fontWeight: "bold" },
                    }}
                    label="Cedula"
                    required
                    placeholder="Escriba su cedula"
                    onChange={handleInputChange}
                    type="number"
                    name="id"
                    variant="outlined"
                    className="w-1/2"
                  />
                </DialogContent>
              )}

              {edit === false && (
                <button onClick={handleShow} className="border-2">
                  Guardar
                </button>
              )}

              {edit === true && (
                <button onClick={updatePerson} className="border-2">
                  Editar
                </button>
              )}
            </form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

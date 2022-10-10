import "./personaList.css";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import Router from "next/router";


export default function PersonList() {
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
      Router.push("/person");
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
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
        <button type="submit" className="border-2">
          Guardar
        </button>
      </form>
    </div>
  );
}

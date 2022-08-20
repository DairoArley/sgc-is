import "./personaList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios"

function PersonaList() {
  const [data, setData] = useState([])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const url = "http://localhost:3306/persona/getAll"
  useEffect( () => {
    axios.get(url)
    .then( (resp) => {
      setData(resp.data.message)
    } )
    .catch(function (error) {
      console.log(error);
    })
  }, [])
  console.log(data)



  return (
    <div className="userList">
      <DataGrid
        rows={[{
          id: 1,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 2,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        }]}
        disableSelectionOnClick
        columns={columns}
        //pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default PersonaList

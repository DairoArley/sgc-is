import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TeachersInformation = ({ idSubjectSelected }) => {
  const [activities, setActivities] = React.useState([
    { nameActivity: "", percentage: "" },
  ]);

  const data = [
    {
      id: 1,
      nameActivity: "Tareas",
      percentage: "20",
    },
    { id: 2, nameActivity: "Exámenes", percentage: "30" },
    { id: 3, nameActivity: "Proyectos", percentage: "50" },
  ];

  useEffect(() => {
    setActivities(data);
  }, []);

  const deleteOneActivity = (idActivity) => {
    let newActivities = activities.filter(
      (activity) => activity.id !== idActivity
    );
    let c = 1;
    newActivities = newActivities.map((activity) => {
      activity.id = c;
      c++;
      return activity;
    });
    setActivities(newActivities);
  };

  const addActivity = () => {
    setActivities([...activities, { nameActivity: "", percentage: "" }]);
  };

  return (
    <div className="mx-auto w-full font-sans text-textColor text-lg font-bold text-center">
      <div className="flex flex-col">
        <div>
          <table className="border-2 rounded-sm mx-auto">
            <tr className="border-2 rounded-sm">
              <th>Actividad</th>
              <th className="pl-4">Porcentaje</th>
            </tr>
            {activities.map((activity) => (
              <tr>
                <td>
                  <input
                    className="border-2 text-textColor border-preColor h-10 mb-2 mt-2 rounded-lg text-sm focus:outline-none ml-2"
                    type="text"
                    value={activity.nameActivity}
                  />
                </td>
                <td>{activity.percentage}%</td>

                <td>
                  <DeleteIcon onClick={() => deleteOneActivity(activity.id)} />
                </td>
              </tr>
            ))}
          </table>

          <button
            type="button"
            onClick={() => addActivity()}
            className="bg-textColor text-white border-2 rounded-lg w-44 mt-4"
          >
            Agregar Actividad
          </button>
        </div>
        <br />
        <span>Actividades de asistencia obligatoria :</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Incluya el número de faltas de asistencia máxima permitida. Para el caso de las prácticas académicas defina si la totalidad del curso es de asistencia obligatoria."
          style={{ width: "100%" }}
        />

        <span>Bibliografía:</span>
        <TextareaAutosize
          className="border border-gray-400 rounded-lg p-2"
          placeholder="Incluir la bibliografía por Unidades o temas que se requiere para el desarrollo del curso"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default TeachersInformation;

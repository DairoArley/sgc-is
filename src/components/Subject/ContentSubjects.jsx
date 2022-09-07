import React from "react";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContentSubjects = ({ idSubjectSelected }) => {
  const [listUnits, setListUnits] = React.useState([]);

  const [topics, setTopics] = React.useState([]);

  const units = [
    {
      id: 2508207,
      topics: [
        { id: 1, unidad: "1", name: "Automatas" },
        { id: 2, unidad: "2", name: "Lenguajes" },
        { id: 3, unidad: "3", name: "Estructuras de Datos" },
        { id: 4, unidad: "4", name: "Estructuras de Control" },
        { id: 5, unidad: "5", name: "Programación" },
      ],
    },
    /*{
      id: 2,
      topics: [
        { id: 1, unidad: "1", name: "Aut" },
        { id: 2, unidad: "2", name: "Le" },
        { id: 3, unidad: "3", name: "Est" },
        { id: 4, unidad: "4", name: "Est" },
        { id: 5, unidad: "5", name: "Pro" },
      ],
    },*/
  ];

  const Listtopics = [
    { id: 1, unidad: "1", name: "Automatas" },
    { id: 2, unidad: "2", name: "Lenguajes" },
    { id: 3, unidad: "3", name: "Estructuras de Datos" },
    { id: 4, unidad: "4", name: "Estructuras de Control" },
    { id: 5, unidad: "5", name: "Programación" },
  ];

  useEffect(() => {
    //setListUnits(units);
    setTopics(Listtopics);
  }, []);

  const deleteOneUnit = (idUnit, idSubject) => {
    /*let c = 1;
    let newUnits = listUnits[0].topics.filter((topic) => topic.id !== idUnit);

    newUnits = newUnits.map((topic) => {
      topic.id = c;
      c++;
      return topic;
    });

    console.log(newUnits);

    setListUnits([
      {
        id: listUnits.id,
        topics: newUnits,
      },
    ]);*/

    let newTopics = topics.filter((topic) => topic.id !== idUnit);
    let c = 1;
    newTopics = newTopics.map((topic) => {
      topic.id = c;
      topic.unidad = c;
      c++;
      return topic;
    });

    setTopics(newTopics);
  };

  const addElement = () => {
    /*let newTopic = [
      {
        id: listUnits[0].id,
        topics: listUnits[0].topics,
      },
    ];

    console.log(newTopic[0]);

    newTopic[0].topics.push({
      id: listUnits[0].topics.length + 1,
      unidad: String(listUnits[0].topics.length + 1),
      name: "",
    });

    setListUnits(newTopic);
  };

  const imprimir = () => {
    console.log("first");*/

    let newTopic = [
      { id: topics.length + 1, unidad: String(topics.length + 1), name: "" },
    ];
    setTopics([...topics, newTopic[0]]);
  };

  const handleChange = (e, idUnit) => {
    const value = e.target.value;
    const topicChange = topics.map((topic) => {
      if (topic.id === idUnit) {
        topic.name = value.replace(/[^a-z]/gi, "");
      }
      return topic;
    });

    setTopics(topicChange);
  };


  const validate = () => {
    let valid = true;
    topics.map((topic) => {
      if (topic.name === "") {
        valid = false;
      }
    });
    console.log(valid)
    return valid;
  };

  return (
    <div className="ml-2 mx-auto w-full font-sans rounded-lg text-textColor text-lg font-bold text-center">
      <form onSubmit={validate}>
      {topics.map((topic) => {
        return (
          <div key={topic.id}>
            <div className="w-full flex flex-row items-center justify-center">
              <li>
                <input
                  className="w-3/4 border-2 text-textColor border-preColor h-10 px-5 pr-16 mb-2 rounded-lg text-sm focus:outline-none mr-2"
                  type="text"
                  name="topic"
                  value={topic.name}
                  onChange={(e) => handleChange(e, topic.id)}
                />
                <DeleteIcon onClick={() => deleteOneUnit(topic.id)} />
              </li>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => addElement()}
        className="bg-textColor text-white border-2 rounded-lg w-40 ml-6"
      >
        Agregar unidad
      </button>

      <button
        type="submit"
        className="bg-textColor text-white border-2 rounded-lg w-44 mt-4"
      >
        Guardar
      </button>
      </form>
    </div>
  );
};

export default ContentSubjects;

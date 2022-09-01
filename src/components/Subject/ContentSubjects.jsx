import React from "react";
import { useEffect } from "react";

const ContentSubjects = ({idSubjectSelected}) => {
  const [listUnits, setListUnits] = React.useState([]);

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

  useEffect(() => {
    setListUnits(units);
  }, []);

  /*
  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-md">
      {units.map((element) => {
        return (
          <div key={element.id}>
            {element.topics.map((topic) => {
              return (
                <div key={topic.id}>
                  <li className="text-textColor font-bold">
                    {topic.unidad}
                    <input type="text"  className="ml-2" value={topic.name}/>
                  </li>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );*/
  const deleteOneUnit = (idUnit, idSubject) => {
    let c = 1;
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
    ]);
  };

  const addElement = () => {
    //setListUnits([...listUnits, {id: listUnits.length + 1, topics: []}]);

    let newTopic = [
        {
          id: listUnits[0].id,
          topics: listUnits[0].topics,
        },
    ];
    
    console.log(newTopic[0]);

    newTopic[0].topics.push({ 
        id: listUnits[0].topics.length + 1,
        unidad: String(listUnits[0].topics.length + 1),
        name: "",});

    setListUnits(newTopic);
  };

  return (
    <div className="ml-2 mx-auto md:w-full font-sans rounded-lg text-textColor text-lg font-bold">
      {listUnits.map((element) => {
        return (
          <div key={element.id}>
            {element.topics.map((topic) => {
              return (
                <div key={topic.id}>
                  <li className="text-textColor font-bold">
                    {topic.id}
                    <input type="text" className="ml-2" value={topic.name} />
                    <button
                      type="button"
                      onClick={() => deleteOneUnit(topic.id, element.id)}
                    >
                      Delete
                    </button>
                  </li>
                </div>
              );
            })}
          </div>
        );
      })}
      <button type="button" onClick={() => addElement()}>Add</button>
    </div>
  );
};

export default ContentSubjects;

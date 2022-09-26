import React from "react";

const ContentInfo = () => {
  const Listtopics = [
    { id: 1, unidad: "1", name: "Automatas" },
    { id: 2, unidad: "2", name: "Lenguajes" },
    { id: 3, unidad: "3", name: "Estructuras de Datos" },
    { id: 4, unidad: "4", name: "Estructuras de Control" },
    { id: 5, unidad: "5", name: "Programación" },
  ];

  return (
    <div className="ml-2 mx-auto w-full font-sans rounded-lg text-textColor text-lg font-bold text-center">
      {Listtopics.map((topic) => {
        return (
          <div key={topic.id}>
            <div className="w-full flex flex-wrap items-center justify-center">
              <ol className="list-decimal">
                <li value={topic.id}>
              <input
                  className="w-min border-2 text-textColor border-preColor h-10 px-5 pr-16 mb-2 rounded-lg text-sm focus:outline-none mr-2"
                  value={topic.name}
                  readOnly
                />
                </li>
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentInfo;

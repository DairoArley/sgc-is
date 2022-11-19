import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Subject({ name, cod, credits, onClick, selectedSubject}) {
  const stylePre =
    "w-44 mx-auto border-2 font-sans rounded-lg text-black text-center m-2 bg-preColor";
  const styleCo =
    "w-44 mx-auto border-2 font-sans rounded-lg text-white text-center m-2 bg-corColor";
  const styleNormal =
    "w-44 mx-auto bg-cardSubjectColor border-b border font-sans rounded-lg text-textColor text-center m-2 drop-shadow-xl";
  const styleSelectSubject =
    "w-44 mx-auto border-2 border-preColor font-sans rounded-lg text-textColor text-center m-2";


  const [style, setStyle] = useState(styleNormal);

  useEffect(() => {
      if (selectedSubject && selectedSubject.materia === cod) {
        setStyle(styleSelectSubject);
      } else if (selectedSubject && selectedSubject.requisitos) {
          setStyle(styleNormal);
          if(selectedSubject.version===5){
            for (let i = 0; i < selectedSubject.requisitos.length; i++) {  
              if (selectedSubject.requisitos[i] && selectedSubject.requisitos[i].materiaRequisito === cod
              ) {
                if (selectedSubject.requisitos[i].tipoRequisito === "CORREQ") {
                  setStyle(styleCo);
                } else {
                  setStyle(stylePre);
                }
              }
            }
          }else{
        for (let i = 0; i < selectedSubject.requisitos.length; i++) {  
          if (selectedSubject.requisitos[i] && selectedSubject.requisitos[i].materia === cod
          ) {
            if (selectedSubject.requisitos[i].tipoRequisito === "CORREQ") {
              setStyle(styleCo);
            } else {
              setStyle(stylePre);
            }
          }
        }}
      } else {
        setStyle(styleNormal);
      }
   
  }, [selectedSubject, cod]);

  return (
    <div id={cod} className={style} onClick={onClick}>
      <div className="flex h-16 flex-row items-center">
        <p className="text-xs font-bold mx-auto">{name}</p>
        <NavLink to={"/Curriculum/" + cod + "-" + credits + "-" + name}>
          <IconButton aria-label="Example">
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconButton>
        </NavLink>
      </div>
      <p className="pt-2 items-center">{cod}</p>
      <p className="text-textColor items-center">creditos: {credits}</p>
    </div>
  );
}

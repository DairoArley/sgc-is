import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import {
  NavLink
} from "react-router-dom";
import { useEffect, useState } from "react";




export function Subject({ name, cod, credits, onClick, selectedSubject }) {


  const stylePre ='w-44 mx-auto border-2 font-sans rounded-lg text-black text-center m-2 bg-textColor';
  const styleCo = 'w-44 mx-auto border-2 font-sans rounded-lg text-white text-center m-2 bg-textColor';
  const styleNormal = 'w-44 mx-auto border-2 font-sans rounded-lg text-textColor text-center m-2';
  const styleSelectSubject = 'w-44 mx-auto border-4 font-sans rounded-lg text-textColor text-center m-2'

  const [style, setStyle] = useState(styleNormal);
  
  useEffect(() => {
    
    if(selectedSubject && selectedSubject.materia === cod ){
      setStyle(styleSelectSubject);
    }else if(selectedSubject && selectedSubject.requisitos){
      selectedSubject.requisitos.forEach(function(requisito) {
        if(requisito.materiaRequisito === cod){    
          console.log(requisito);
          if(requisito.tipoRequisito === 'CORREQ'){
              setStyle(styleCo);
            }else if(requisito.tipoRequisito === 'PRERREQ'){
              setStyle(stylePre);
              }
        }else{
          setStyle(styleNormal);
        }
      }
      );
    }
    else{
      setStyle(styleNormal);
    }
   
  }, [selectedSubject]);
  

    return (
      <div id={cod} className={style} onClick={onClick}>
        <div className='flex flex-row items-center'>
            <p className='text-lg font-bold mx-auto'>{name}</p> 
            <NavLink to={'/Curriculum'}>
            <IconButton aria-label="Example">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </IconButton>
            </NavLink>  
        </div>
            <p className='pt-2'>{cod}</p>
            <p className="text-textColor">creditos: {credits}</p>
      </div>
    );
  }
  
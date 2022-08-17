import React, { useState } from 'react'
import {Subject} from '../../components/Subject/Subject';
import {subject2} from '../../utils/dataPensum';


const Malla = () => {

  const [subjectSelected, setSubjectSelected] = useState();


    const selectSubject = (subject) => {
            setSubjectSelected(subject);
    }

  /*const imprimir = ({name, cod}) => {
     //let cantidadRequisitos = requisitos.filter(element => element.cod === cod);

        for(let i = 0; i < requisitos.length; i++){
            if(subject.find(element => element.cod === requisitos[i].requisito)){
                subject.find(element => element.cod === requisitos[i].requisito).color = true;
            }
        }
        console.log(subject)
        setfirst(subject);*/
/*
        subject.forEach(function(materia) {
            if(materia.cod === cantidadRequisitos.requisito){
     
                materia.color = true;
            }
        });*/
    

  const numero=4; 
  return (
    <div className='mx-auto w-full border-r-amber-200 border-2 font-sans'>
        <div className='h-11 bg-topbarColor'>
        <h1 className='text-center text-textColor font-bold'>Malla Curricular</h1>
        </div>
        <div>
            <h1 className='text-textColor font-bold text-center text-xl'>
                504 - INGENIERIA DE SISTEMAS
            </h1>
            <br />
            <div className='mx-auto text-center w-max bg-textColor text-white'>
                Créditos totales para grado:168 
                <p>Version actual: 3</p>         
            </div>
        </div>
        <br />
        <div className={`grid grid-rows-${numero} grid-flow-col`}>
        {subject2.map((subject) => (
                <Subject 
                    key={subject.materia}
                    name={subject.nombreMateria}
                    cod={subject.materia}
                    credits={subject.creditos}
                    onClick={() => selectSubject(subject)}
                    selectedSubject={subjectSelected}
                />   
                    
        ))}
        </div>

    </div>
  )
}

export default Malla;
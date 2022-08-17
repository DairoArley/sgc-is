import React, { useState } from 'react'
import {Subject} from '../../components/Subject/Subject';


    let subject = [
        {
        "name": 'Programación y algoritmos 1',
        "cod":'INF-1',
        "credits":'3',
        "color":false
        },
        {
            "name": 'Programación y algoritmos 2',
            "cod":'INF-2',
            "credits":'3',
            "color":false
            },
            {
                "name": 'Programación y algoritmos 3',
                "cod":'INF-3',
                "credits":'4',
                "color":false
                },
                {
                    "name": 'Discretas 1',
                    "cod":'INF-11',
                    "credits":'4',
                    "color":false
                    },
                    {
                        "name": 'Discretas 2',
                        "cod":'INF-12',
                        "credits":'4',
                        "color":false
                        },
    ]
    
    let requisitos = [
        {
        "requisito":'INF-1',
        "cod":'INF-2',
        "tipo":'1'
        },
        {
        "requisito":'INF-3',
        "cod":'INF-2',
        "tipo":'1'
        },
    ]

  

const Malla = () => {

  const [first, setfirst] = useState(subject);

  const imprimir = ({name, cod}) => {
     let cantidadRequisitos = requisitos.filter(element => element.cod === cod);

        for(let i = 0; i < requisitos.length; i++){
            if(subject.find(element => element.cod === requisitos[i].requisito)){
                subject.find(element => element.cod === requisitos[i].requisito).color = true;
            }
        }
        setfirst(subject);
/*
        subject.forEach(function(materia) {
            if(materia.cod === cantidadRequisitos.requisito){
     
                materia.color = true;
            }
        });*/
    }

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
        {first.map((subject) => (
                <Subject 
                    name={subject.name}
                    cod={subject.cod}
                    credits={subject.credits}
                    color={subject.color}
                    onClick={() => imprimir(subject)}
                />     
        ))}
        </div>

    </div>
  )
}

export default Malla;
import React from 'react'
import {Subject} from '../../components/Subject/Subject';


    let subject = [
        {
        "name": 'Programación y algoritmos 1',
        "cod":'INF-1',
        "credits":'3'
        },
        {
            "name": 'Programación y algoritmos 2',
            "cod":'INF-2',
            "credits":'3'
            },
            {
                "name": 'Programación y algoritmos 3',
                "cod":'INF-3',
                "credits":'4'
                },
                {
                    "name": 'Discretas 1',
                    "cod":'INF-11',
                    "credits":'4'
                    },
                    {
                        "name": 'Discretas 2',
                        "cod":'INF-12',
                        "credits":'4'
                        },
    ]
    

const Malla = () => {

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
        {subject.map((subject) => (
                <Subject 
                    name={subject.name}
                    cod={subject.cod}
                    credits={subject.credits}
                />     
        ))}
        </div>

    </div>
  )
}

export default Malla;
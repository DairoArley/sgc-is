import React from 'react'
import {Subject} from '../../components/Subject/Subject';

const Malla = () => {
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
            <div className='grid grid-rows-4 grid-flow-col'>
            <Subject 
                name='Programación y algoritmos 2'
                cod='INF-1'
                credits='3'
            />
        </div>


    </div>
  )
}

export default Malla;
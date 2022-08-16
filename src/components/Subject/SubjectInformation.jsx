import { useState } from 'react'

const SubjectInformation = ({readOnly}) => {

const [campoFormacion, setfirst] = useState(['C,B,P,CF'])
const [resultadoAprendizaje, setResultadosAprendizaje] = useState('Manejo de la lógica esencial para el desarrollo de algoritmos y programas')

  return (
    <div className='mx-auto md:w-full font-sans rounded-lg text-textColor text-lg font-bold' >
        <h2 className='mx-auto mb-4 text-center'>Campo de formación</h2>


        <div class="flex items-center mb-4">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">C</label>
        </div>
        <div class="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio"  className="w-4 h-4 text:ring-blue-60s:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">B</label>
        </div>

        <textarea className='border-2 flex rounded-lg mx-auto md:w-4/5' readOnly={readOnly} type="text" id='campoFormacion' onChange={(e)=> setfirst(e.target.value)} value={campoFormacion}/>
        <br />
        <h2 className='mx-auto mb-4 text-center'>Resultados de aprendizaje</h2>
        <textarea className='border-2 flex rounded-lg h-44 mx-auto md:w-4/5' readOnly={readOnly} type="text" id='resultadoAprendizaje' onChange={(e)=> setResultadosAprendizaje(e.target.value)} value={resultadoAprendizaje}/>
    </div>
  )
}

export default SubjectInformation
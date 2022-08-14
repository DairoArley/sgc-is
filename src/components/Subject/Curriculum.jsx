import React, { useState } from 'react'

const Curriculum = ({role}) => {
    
    const [first, setfirst] = useState('')

    return (
    <div className='mx-auto w-full border-r-amber-200 border-2 font-sans'>
        Curriculum
        <br />
        {
        role==='Admin' && <input className='bg-white' onChange={(e)=> setfirst(e.target.value)} value={first} type="text"/>
        
        }
        {
        role==='student' && <input className='bg-textColor' value={'Hola mundo'} type="text" readOnly/>
        
        }
        
    </div>
  )
}

export default Curriculum
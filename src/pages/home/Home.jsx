import React from 'react'
import './home.css'
import escudo from './escudo.png'

export default function Home() {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <img src={escudo} alt="img" className='lg:w-2/5 lg:h-2/5 md:w-1/2 my-auto'/>
            </div>
            
        </div>
    )
}

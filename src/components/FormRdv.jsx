import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


export const FormRdv = () => {
  return (
    <div>
        <div className='grid grid-cols-2'>
            <h2>Rendez-vous</h2>
            <CiCirclePlus className='ml-96 text-sky-700 bg-sky-200' />
            <hr className='border-black w-full'/>
        </div>

        <div className='grid grid-cols-2'>
            <h2>Aujourd'hui <br /><span className='text-sky-600'>Ibrahima</span></h2>
            <h2 className='ml-96'>10h-AM</h2>
            <hr className='border-black w-full'/>
        </div>

        <div className='grid grid-cols-2'>
            <h2>13/08/2024 <br /><span className='text-sky-600'>Kalidou</span></h2>
            <h2 className='ml-96'>90h-AM</h2>
            <hr className='border-black w-full'/>
        </div>

        <div className='grid grid-cols-2'>
            <h2>23/08/2024 <br /><span className='text-sky-600'>Fifi</span></h2>
            <h2 className='ml-96'>12h-AM</h2>
            <hr className='border-black w-full'/>
        </div>

        <div className='grid grid-cols-2'>
            <h2>03/09/2024 <br /><span className='text-sky-600'>Samba</span></h2>
            <h2 className='ml-96'>12h-AM</h2>
            <hr className='border-black w-full'/>
        </div>

        <div className='grid grid-cols-2'>
            <h2>23/09/2024 <br /><span className='text-sky-600'>Alice</span></h2>
            <h2 className='ml-96'>12h-AM</h2>
            <hr className='border-black w-full'/>
        </div>
    </div>
  );
}
export default FormRdv

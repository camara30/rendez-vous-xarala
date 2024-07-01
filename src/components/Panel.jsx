import React from 'react'
import { BiSolidUserDetail } from "react-icons/bi";

export const Panel = () => {
  return (
    <div>
        <h2 className='font-bold text-center text-2xl mr-20'>Rendez-vous</h2>
    <div className='flex flex-wrap gap-5 ml-12 mt-5'>
        <div className='bg-sky-700 p-10 w-80 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <p className='bg-white w-12 text-center rounded-2xl'>98</p>
                <BiSolidUserDetail />
            </div>
            <h3 className='text-white font-bold text-2xl text-center'>Liste de Patients</h3>
        </div>

        <div className='bg-green-700 p-10 w-80 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <p className='bg-white w-12 text-center rounded-2xl'>98</p>
                <BiSolidUserDetail />
            </div>
            <h3 className='text-white font-bold text-2xl text-center'>Liste de Patients</h3>
        </div>

        <div className='bg-black p-10 w-80 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <p className='bg-white w-12 text-center rounded-2xl'>98</p>
                <BiSolidUserDetail className='text-sky-700'/>
            </div>
            <h3 className='text-white font-bold text-2xl text-center'>Liste de Patients</h3>
        </div>

        <div className='bg-sky-500 p-10 w-80 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <p className='bg-white w-12 text-center rounded-2xl'>98</p>
                <BiSolidUserDetail />
            </div>
            <h3 className='text-white font-bold text-2xl text-center'>Liste de Patients</h3>
        </div>

    </div>
    </div>
  )
}
export default Panel

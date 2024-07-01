import React from 'react'
import Dashboard from '../components/Dashboard'
import Photo2 from '../img/RVS 1.png';
import photo3 from '../img/Ellipse 12.png';
import { IoMdNotifications } from "react-icons/io";
import { TbUserPentagon } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { FcDataSheet } from "react-icons/fc";
import { IoPeopleOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import Panel from '../components/Panel';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import FormRdv from '../components/FormRdv';


export const PriseDeRendezVous = () => {
  return (
    <div>
        <div className='overflow-hidden flex flex-col items-center'>
      <div className='flex items-center w-full p-4'>
        <div className='w-1/4 h-22 bg-sky-200 rounded-2xl'>
          <img src={Photo2} alt="photo" />    
        </div>

        <div className='w-96 h-12 bg-gray-700 rounded-2xl text-center flex ml-36'>
        <BiSearchAlt2 className='mt-4'/>
          <input className='bg-gray-700' placeholder='Recherche'/>
        </div>
        <div className='flex ml-auto items-center'>
          <IoMdNotifications className='mt-6 w-12 h-8'/>
          <img className='w-14 h-14 mt-4 ml-4' src={photo3} alt="" />
        </div>
    </div>
    </div>
    <div className='flex items-center w-full mt-4'>
        <RxDashboard className='mt-8 m-4 text-sky-700'/>
        <h2 className='mt-6 text-2xl text-sky-700'>Tableau de Bord</h2>
      </div>

      <div className='flex w-full mt-8'>
        <div className='w-1/4 bg-sky-200 rounded-2xl p-4'>
          <img className='w-20 h-20 ml-5 mt-5' src={photo3} alt="photo" />
          <div className='flex items-center mt-3'>
            <IoHome className='m-1'/>
            <Link to='/Accueil'><h2>Accueil</h2></Link>
          </div>

          <div className='flex items-center mt-3'>
            <FcDataSheet className='m-1'/>
           <Link to='/PriseDeRendezVous'><h2>Mes Rendez vous</h2></Link> 
          </div>

          <div className='flex items-center mt-3'>
            <IoPeopleOutline className='m-1'/>
            <Link to='/Patients'><h2>Mes patients</h2></Link>
          </div>

          <div className='flex items-center mt-3'>
            <TbUserPentagon className='m-1' />
            <Link to='/MonCompte'><h2>Mon compte</h2></Link>
          </div>

          <div className='flex items-center mt-36'>
            <IoMdLogIn className='m-1'/>
            <button>Deconnexion</button>
          </div>
        </div>

        <div className='w-3/4 flex justify-center items-center'>
          <FormRdv className='w-full'/>
        </div>
      </div>
    </div>
  )
}
export default PriseDeRendezVous

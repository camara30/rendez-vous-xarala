import React from "react";
import logo from "../img/RVS 1.png"
import { Link, Outlet } from "react-router-dom";
import MonCompte from "../components/MonCompte"
import Dashboard from "./Dashboard";

export const Navbar = () => {
    return(
        <>
        <div className="flex justify-between items-center w-1512 h-117">
            <img src={logo} alt="logo" />
        <nav>
            <ul className="flex">
                <li>
                    <Link to="/Accueil">Accueil</Link>
                </li>
                <li className="mx-20">
                    <Link to="/MesRendezVous">Mes Rendez-vous</Link>
                </li>
                <li>
                    <Link to="/MonCompte">Mon compte</Link>
                </li>
            </ul>
         </nav>
         <div className="mr-10" >
         <button className="bg-sky-600 p-5 text-white mr-10 rounded-xl"><Link to='/Dashboard'>Se connecter</Link></button>
            <button className="bg-black p-5 text-white rounded-xl">Deconnexion</button>

         </div>
        </div>
        <Outlet />
        </>
    )
}
export default Navbar
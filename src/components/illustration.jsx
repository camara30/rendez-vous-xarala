import React from "react";
import photo from "../img/Confirmed attendance-amico 1.png"
import { Link, Outlet } from "react-router-dom";
export const Illustration = () => {
    return(
    <div className="flex items-center overflow-hidden">
        <div className="p-10 mb-12">
            <h1 className="text-6xl"> Rendez-vous</h1>
            <p className="w-80" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, nihil totam quae, quod facere minima molestias ullam natus nemo et id veritatis optio culpa reiciendis ipsa numquam assumenda delectus nulla?
            </p>
            <Link to="/connexion">
            <button className="text-white font-bold bg-sky-600 p-4 w-full rounded-lg mt-2">
                Commencer
            </button>
            </Link>
        </div>
        
        <div>
            <img className="w-400 h-96  ml-56" src={photo} alt="photo" />
            <div className="relative bottom-1 float-end">
            <div className="bg-sky-300 absolute rotate-45 right-8 h-48 w-48 rounded-xl"></div>
            <div className="bg-sky-600 absolute rotate-45 right-4 h-48 w-48 rounded-xl"></div>
            </div>
        </div>
        <Outlet />
    </div>
    
    )
}
export default Illustration;
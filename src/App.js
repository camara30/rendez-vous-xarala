import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Illustration from "./components/illustration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compte from "./linkpage/linkconnection/Compte";
import MesRendezVous from "./linkpage/linkconnection/MesRendezVous";
import Connexion from "./linkpage/linkconnection/Connexion";
import Dashboard from "./components/Dashboard";
import Inscription from "./components/Inscription";
import { Link } from "react-router-dom";
import { Accueil } from "./components/Accueil";
import PriseDeRendezVous from "./components/PriseDeRendezVous";
import Patients from "./components/Patients";
import MonCompte from "./components/MonCompte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Illustration />} />
          <Route path="/MesRendezVous" element={<MesRendezVous />} />
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />

        </Route>
        <Route path="Dashboard" element={<Dashboard />}>

        </Route>
        <Route path="Accueil" element={<Accueil />}></Route>
        <Route path="PriseDeRendezVous" element={<PriseDeRendezVous />}></Route>
        <Route path="Patients" element={<Patients />}></Route>
        <Route path="MonCompte" element={<MonCompte />}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;

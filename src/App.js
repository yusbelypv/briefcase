import "./App.css";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LandingPage from "./Componentes/presentacionales/LandingPage";
import Home from "./Componentes/funcionales/Home";
import Contact from "./Componentes/funcionales/contacts";
import Header from "./Componentes/funcionales/Header";
import Navbar from "./Componentes/presentacionales/NavBar";
import Resume from "./Componentes/funcionales/resumen";
import Portfolio from "./Componentes/funcionales/portfolio";
import Pdf from "./Componentes/funcionales/Pdf";




function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/header" element={<Header/>} />
        <Route exact path="/NavBar" element={<Navbar/>} />
        <Route exact path="/resumen" element={<Resume/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/pdf" element={<Pdf/>} />
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
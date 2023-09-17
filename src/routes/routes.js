import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../Contexts/ThemeContext";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
import Login from "../Pages/Login";
import Escolha from "../Pages/Escolher_denuncia";
import Denuncia from "../Pages/Fazer_denuncia";
import Cadastro from "../Pages/Cadastro";
import Console from "../Pages/Console";
import Private from "./Private";


export default function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<ThemeProvider><Home/></ThemeProvider>}/>
            <Route path="/sobre" element={<ThemeProvider><Sobre/></ThemeProvider>}/>
            <Route path="/login" element={<ThemeProvider><Login/></ThemeProvider>}/>
            <Route path="/cadastro" element={<ThemeProvider><Cadastro/></ThemeProvider>}/>
            <Route path="/escolha" element={<ThemeProvider><Escolha/></ThemeProvider>}/>
            <Route path="/denuncia" element={<ThemeProvider><Denuncia/></ThemeProvider>}/>
            <Route path="/console" element={<ThemeProvider><Private><Console/></Private></ThemeProvider>}/>
        </Routes>

    )
}
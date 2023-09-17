import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import './../../style.css';
import './style.css';
import Logo from './../../Assets/LOGO.png';
import Logo_dark from './../../Assets/LOGO_DARK.png';
import ThemeButtonPage from "./ThemeButton";
import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";



export default function HeaderConsole(){

    const { logout } = useContext(AuthContext);

    return(
        <Navbar className="header" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <img className="logo_light" src={Logo} width={270}/>
                    <img className="logo_dark" src={Logo_dark} width={270}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav  
                    className=" my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <ThemeButtonPage/>
                        <Link to={'/login'} onClick={ () => logout() }>Sair</Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
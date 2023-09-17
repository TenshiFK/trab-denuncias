import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Header from "../../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import './../../style.css';
import './style.css';
import Celulares from './../../Assets/Logotipo Nome Monograma Minimalista Preto e Branco.svg'
import Celulares_dark from './../../Assets/Logotipo_Nome_Monograma_Minimalista_Preto_e_Branco__1_-removebg-preview.png'

import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../Contexts/ThemeContext";

function Home() {
  const {theme} = useThemeContext();

  return (
    <Container fluid id={theme}>
      <Container fluid className="context-cor">
        <Header/>
        <Row className="conteudo-principal">
            <Col md={7} className="centralizado-flex">
                <img height={600} src={Celulares} className="celulares cel-light"/>
                <img height={600} src={Celulares_dark} className="celulares cel-dark"/>
                <div>
                  <p className="p">
                    É importante saber que atráves desse site podem ser feitas denúncias anônimas com total segurança.
                  </p>
                  <p className="p">
                    Nós prezamos por sua segurança, por isso nenhuma informação pessoal sua será exigida no momento da denúncia.
                  </p>
                </div>
            </Col>
            <Col md={5} className="centralizado">
                <div className="centralizado div-btn">
                  <Link to={'/login'}><button className="btn-funcoes"><ReportGmailerrorredIcon color="black" fontSize="large" className="icon"/>Acompanhar minha denúncia</button></Link>
                  <hr className="line"/>
                  <Link to={'/escolha'}><button className="btn-funcoes"><CampaignIcon color="black" fontSize="large" className="icon"/>Quero fazer uma denúncia</button></Link>
                  <hr className="line"/>
                  <Link to={'/sobre'}><button className="btn-funcoes"><PeopleAltIcon color="black" fontSize="large" className="icon"/>Sobre nós</button></Link>
                </div>
            </Col>
        </Row>
        <Footer/>
      </Container>
    </Container>
  );
}

export default Home;

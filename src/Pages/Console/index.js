import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import './../../style.css';
import './style.css';
import api from '../../Services/api';

import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../Contexts/ThemeContext";
import HeaderConsole from "../../Components/Header/index_console";
import ModalDenuncias from "../../Components/Modal/ModalDenuncias";
import { useEffect, useState } from "react";



function Console() {
  const {theme} = useThemeContext();

  const[denuncias, setDenuncias] = useState([]);
  const[carregando, setCarregando] = useState(true);

  useEffect(() =>{
      async function loadDenuncias(){
          await api.get('Denuncia')
          .then((resposta) => {
              console.log(resposta.data);
              setDenuncias(resposta.data);
              setCarregando(false);
          })
  
      }
      loadDenuncias();
  }, [])

  if(carregando){
      return(
        <div className="loading">
          <h2>Carregando Denuncias...</h2>
        </div>
      )
    }

  return (
    <Container fluid id={theme}>
      <Container fluid className="context-cor">
        <HeaderConsole/>
        <Row className="conteudo-principal">
          <Col className="centralizado-items">
              <div className="container-console centralizado-items">
                <h1 className="titulo-minhasD">Minhas Denúncias</h1>
                  <Row fluid className="items-console">
                      <Col className="borda centralizado-center">
                          <h2 className="subtitulo-minhasD">Id da Denúncia</h2>
                      </Col>
                      <Col className="borda centralizado-center">
                          <h2 className="subtitulo-minhasD">Situação</h2>
                      </Col>
                      <Col className="borda centralizado-center">
                          <h2 className="subtitulo-minhasD">Mais Informações</h2>
                      </Col>
                  </Row> 
                  {denuncias.map((Denunc) => {
                      return(
                          <ul key={Denunc.id} className="container-minhasD">
                              <Row fluid className="items-console">
                                  <Col className="borda centralizado-center">
                                      <h3 className="minhasD">{Denunc.id}</h3>
                                  </Col>
                                  <Col className="borda centralizado-center">
                                      <p className="minhasD">Em aberto</p>
                                  </Col>
                                  <Col className="borda botao">
                                    <ModalDenuncias id={Denunc.id}/>
                                  </Col>
                              </Row>
                          </ul>
                      )
                  })} 
              </div>

            </Col>
        </Row>
        <Footer/>
      </Container>
    </Container>
  );
}

export default Console;

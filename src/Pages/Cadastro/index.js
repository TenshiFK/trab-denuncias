import { Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import './../../style.css';
import './style.css';

import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../Contexts/ThemeContext";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";



function Cadastro() {
    const {theme} = useThemeContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const { signUp, loadingAuth } = useContext(AuthContext);
  
    async function handleSubmit(e){
      e.preventDefault();
  
      if(email !== '' && password !== ''){
       await signUp(email, password)
      }
  
    }

  return (
    <Container fluid className="conteudo" id={theme}>
      <Container fluid className="context-cor">
          <Header/>
          <Row className="conteudo-principal">
              <Col className="centralizado-center">
                  <svg className="icone-login icone-login-light" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 198 205" fill="none">
                          <ellipse cx="99" cy="102.5" rx="99" ry="102.5" fill="white"/>
                          <path d="M164.821 156.555L167.837 152.626L163.861 149.673C147.033 137.173 124.128 128.375 99 128.375C73.8722 128.375 50.9666 137.173 34.1388 149.673L30.1626 152.626L33.1791 156.555C41.0333 166.784 51.0292 175.058 62.4291 180.746C73.8283 186.434 86.3304 189.387 99 189.375C111.67 189.387 124.172 186.434 135.571 180.746C146.971 175.058 156.967 166.784 164.821 156.555ZM4.875 102.5C4.875 48.4206 47.1729 4.875 99 4.875C150.827 4.875 193.125 48.4206 193.125 102.5C193.125 156.579 150.827 200.125 99 200.125C47.1729 200.125 4.875 156.579 4.875 102.5ZM62.4614 61.3354C60.4885 66.2668 59.475 71.5467 59.475 76.875C59.475 87.629 63.5995 97.9751 70.9923 105.629C78.3905 113.289 88.4616 117.625 99 117.625C109.538 117.625 119.609 113.289 127.008 105.629C134.4 97.9751 138.525 87.629 138.525 76.875C138.525 71.5467 137.512 66.2668 135.539 61.3354C133.566 56.4038 130.67 51.912 127.008 48.1208C123.346 44.3292 118.989 41.3121 114.181 39.2505C109.374 37.1886 104.214 36.125 99 36.125C93.7855 36.125 88.6263 37.1886 83.8186 39.2505C79.0112 41.3121 74.6544 44.3292 70.9923 48.1208C67.3305 51.912 64.4343 56.4038 62.4614 61.3354Z" fill="#FFB84C" stroke="#FFB84C" stroke-width="9.75"/>
                  </svg>
                  <svg className="icone-login icone-login-dark" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 198 205" fill="none">
                  <ellipse cx="99" cy="102.5" rx="99" ry="102.5" fill="#000036"/>
                  <path d="M164.821 156.555L167.837 152.626L163.861 149.673C147.033 137.173 124.128 128.375 99 128.375C73.8722 128.375 50.9666 137.173 34.1388 149.673L30.1626 152.626L33.1791 156.555C41.0333 166.784 51.0292 175.058 62.4291 180.746C73.8283 186.434 86.3304 189.387 99 189.375C111.67 189.387 124.172 186.434 135.571 180.746C146.971 175.058 156.967 166.784 164.821 156.555ZM4.875 102.5C4.875 48.4206 47.1729 4.875 99 4.875C150.827 4.875 193.125 48.4206 193.125 102.5C193.125 156.579 150.827 200.125 99 200.125C47.1729 200.125 4.875 156.579 4.875 102.5ZM62.4614 61.3354C60.4885 66.2668 59.475 71.5467 59.475 76.875C59.475 87.629 63.5995 97.9751 70.9923 105.629C78.3905 113.289 88.4616 117.625 99 117.625C109.538 117.625 119.609 113.289 127.008 105.629C134.4 97.9751 138.525 87.629 138.525 76.875C138.525 71.5467 137.512 66.2668 135.539 61.3354C133.566 56.4038 130.67 51.912 127.008 48.1208C123.346 44.3292 118.989 41.3121 114.181 39.2505C109.374 37.1886 104.214 36.125 99 36.125C93.7855 36.125 88.6263 37.1886 83.8186 39.2505C79.0112 41.3121 74.6544 44.3292 70.9923 48.1208C67.3305 51.912 64.4343 56.4038 62.4614 61.3354Z" fill="#AEE2FF" stroke="#AEE2FF" stroke-width="9.75"/>
                </svg>
                  <div className="container-cadastro centralizado-center">
                      <p className="paragrafo-cadastro">Para poder verificar a situação de sua denúncia futuramente, necessitamos que faça um cadastro inicialmente. O email utilizado <span className="span-cadastro">pode ser ficticio e nenhuma informação sua será coletada dele sem seu consentimento!</span></p>
                      <Form className="centralizado">
                        <Form.Group>
                          <Form.Control size="lg" className="input" 
                          type="email" 
                          placeholder="Email" 
                          required
                          value={email} onChange={ (e) => setEmail(e.target.value) }/>
                        </Form.Group>
                        <Form.Group>
                          <Form.Control size="lg" className="input" 
                          type="password" 
                          placeholder="Senha" 
                          required
                          value={password} onChange={ (e) => setPassword(e.target.value) }/>
                        </Form.Group>
                        <div className="centralizado-items-flex container-btn">
                          <Link to={'/login'}><button className="btn-cadastro margem">Já possuo Cadastro</button></Link>
                          <button className="btn-cadastro" onClick={handleSubmit}>{loadingAuth ? 'Carregando...' : 'Fazer Cadastro'}</button>
                        </div>
                        
                      </Form>
                  </div>
                  <Link to={'/'}><button className="btn-voltar">Voltar</button></Link>
              </Col>
          </Row>
          <Footer/>
        </Container>
    </Container>
  );
}

export default Cadastro;

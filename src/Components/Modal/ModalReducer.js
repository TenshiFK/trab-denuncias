import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { connect, useDispatch, useSelector } from 'react-redux'
import api from '../../Services/api';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './style.css';
import { IMaskInput } from 'react-imask';
import { useThemeContext } from '../../Contexts/ThemeContext';
import { selectItem } from './action';

function Item({ item }) {
    const dispatch = useDispatch();
  
    const handleSelect = () => {
      dispatch(selectItem(item));
    };
  
    return (
      <div onClick={handleSelect}>
        {item.name}
      </div>
    );
  }


const YesNoModal = ({ closeModal, showModal}) => {

  const {theme} = useThemeContext();

  const handleYesPressed = () => {
    closeModal()
  }


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
    <Modal id={theme}
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
  >
    <div>
      <button  onClick={handleYesPressed} className='btn-fechar'>
        <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="20"
        width="20"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
      </button>
      <Container fluid>
        {denuncias.map((Denunc) => {
          return(
              <ul key={Denunc.id}>
                  <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Data de ocorrência</Form.Label>
                                    <Form.Control className='label-modal' type="date" value={Denunc.dataocorrencia} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Ocorre com frequência?</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.frequencia} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>  
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Bairro</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.bairro} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Cidade</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.cidade} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Endereço</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.endereco} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>CEP</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.cep} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Complemento</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.complemento} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Número</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.numcasa} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group>
                                    <Form.Check className='label-check label-modal' label={'Não sei o endereço do denunciado'} 
                                    checked={Denunc.naoseiencereco} readOnly
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <h1 className='titulo-denunciar label-modal'>Informações Gerais</h1>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Nome do denunciado</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.nome} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Número do denunciado</Form.Label>
                                    <Form.Control className='label-modal' as={IMaskInput} mask="(00) 00000-0000" placeholder='(00) 00000-0000'  type="text" 
                                    value={Denunc.numdenunciado} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal' >Sexo:</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`sexo-${type}`} className="mb-3 centralizado-items-flex">
                                            <Form.Check className='label-check label-modal'
                                                inline
                                                label="Feminino"
                                                value="Feminino"
                                                name="sexo"
                                                type={type}
                                                id={`sexo-${type}-1`}
                                                checked={Denunc.sexo === "Feminino"} readOnly
                                            />
                                            <Form.Check className='label-check label-modal'
                                                inline
                                                label="Masculino"
                                                value="Masculino"
                                                name="sexo"
                                                type={type}
                                                id={`sexo-${type}-2`}
                                                checked={Denunc.sexo === "Masculino"} readOnly
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Idade (exata ou aproximada)</Form.Label>
                                    <Form.Control className='label-modal' type="text" value={Denunc.idade} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Cor da pele</Form.Label>
                                    <Form.Select aria-label="Default select example" value={Denunc.corpele} readOnly>
                                        <option>Selecione</option>
                                        <option value="Branca">Branca</option>
                                        <option value="Morena">Morena</option>
                                        <option value="Negra">Negra</option>
                                        <option value="Não sei">Não sei</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Cor dos olhos</Form.Label>
                                    <Form.Select aria-label="Default select example" value={Denunc.corolhos} readOnly>
                                        <option>Selecione</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Verde">Verde</option>
                                        <option value="Castanho">Castanho</option>
                                        <option value="Não sei">Não sei</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Cor do cabelo</Form.Label>
                                    <Form.Select aria-label="Default select example" value={Denunc.corcabelo} readOnly>
                                        <option>Selecione</option>
                                        <option value="Loiro">Loiro</option>
                                        <option value="Marrom">Marrom</option>
                                        <option value="Preto">Preto</option>
                                        <option value="Grisalho">Grisalho</option>
                                        <option value="Não sei">Não sei</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label label-modal'>Tipo de cabelo</Form.Label>
                                    <Form.Select aria-label="Default select example" value={Denunc.tipocabelo} readOnly>
                                        <option>Selecione</option>
                                        <option value="Liso">Liso</option>
                                        <option value="Ondulado">Ondulado</option>
                                        <option value="Cacheado">Cacheado</option>
                                        <option value="Crespo">Crespo</option>
                                        <option value="Não sei">Não sei</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col md={3}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {['checkbox'].map((type) => (
                                        <div key={`block-${type}`} className="mb-3">
                                        <Form.Check className='label-check label-modal'
                                            label="Tatuagem"
                                            type={type}
                                            id={`block-${type}-1`}
                                            checked={Denunc.tatuagem} readOnly
                                        />
                                        <Form.Check className='label-check label-modal'
                                            label="Cicatriz"
                                            type={type}
                                            id={`block-${type}-2`}
                                            checked={Denunc.cicatriz} readOnly
                                        />
                                        <Form.Check className='label-check label-modal'
                                            label="Deficiência"
                                            type={type}
                                            id={`block-${type}-3`}
                                            checked={Denunc.deficiencia} readOnly
                                        />
                                        <Form.Check className='label-check label-modal'
                                            label="Óculos"
                                            type={type}
                                            id={`reverse-${type}-3`}
                                            checked={Denunc.oculos} readOnly
                                        />
                                        </div>
                                    ))}
                                    </Form.Group>
                            </Col>
                            <Col md={9}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3 container-select">
                                                    <Form.Label className='label label-modal'>Estatura:</Form.Label>
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Não sei"
                                                        value="Não sei"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        checked={Denunc.estatura === "Não sei"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Alta"
                                                        value="Alta"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={Denunc.estatura === "Alta"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Média"
                                                        value="Média"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-3`}
                                                        checked={Denunc.estatura === "Média"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Baixa"
                                                        value="Baixa"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-4`}
                                                        checked={Denunc.estatura === "Baixa"} readOnly
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3 container-select">
                                                    <Form.Label className='label label-modal'>Tipo físico:</Form.Label>
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Não sei"
                                                        value="Não sei"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        checked={Denunc.fisico === "Não sei"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Magro"
                                                        value="Magro"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={Denunc.fisico === "Magro"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Médio"
                                                        value="Médio"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-3`}
                                                        checked={Denunc.fisico === "Médio"} readOnly
                                                    />
                                                    <Form.Check className='label-check label-modal'
                                                        inline
                                                        label="Gordo"
                                                        value="Gordo"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-4`}
                                                        checked={Denunc.fisico === "Gordo"} readOnly
                                                    />                                                    
                                                </div>
                                            ))}
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {['radio'].map((type) => (
                                        <div key={`block-${type}`} className="mb-3">
                                            <Form.Label className='label label-modal'>O denunciado utiliza tornozeleira eletrônica?</Form.Label>
                                            <Form.Check className='label-check label-modal'
                                                label="Sim"
                                                value="Sim"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-1`}
                                                checked={Denunc.tornozeleira === "Sim"} readOnly
                                            />
                                            <Form.Check className='label-check label-modal'
                                                label="Não"
                                                value="Não"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-2`}
                                                checked={Denunc.tornozeleira === "Não"} readOnly
                                            />
                                            <Form.Check className='label-check label-modal'
                                                label="Não sei"
                                                value="Não sei"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-3`}
                                                checked={Denunc.tornozeleira === "Não sei"} readOnly
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {['radio'].map((type) => (
                                        <div key={`block-${type}`} className="mb-3">
                                            <Form.Label className='label label-modal'>O denunciado porta arma de fogo?</Form.Label>
                                            <Form.Check className='label-check label-modal'
                                                label="Sim"
                                                name="arma"
                                                value='Sim'
                                                type={type}
                                                id={`block-${type}-1`}
                                                checked={Denunc.arma === "Sim"} readOnly
                                            />
                                            <Form.Check className='label-check label-modal'
                                                label="Não"
                                                name="arma"
                                                value='Não'
                                                type={type}
                                                id={`block-${type}-2`}
                                                checked={Denunc.arma === "Não"}  readOnly
                                            />
                                            <Form.Check className='label-check label-modal'
                                                label="Não sei"
                                                name="arma"
                                                value='Não sei'
                                                type={type}
                                                id={`block-${type}-3`}
                                                checked={Denunc.arma === "Não sei"} readOnly
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='label label-modal'>Descreva no campo tudo que julgar necessário:</Form.Label>
                                    <Form.Control className='label-modal textarea' as="textarea" rows={5} value={Denunc.textarea} readOnly/>
                                </Form.Group>
                            </Col>
                        </Row>
              </ul>
            )
        })}  
      </Container>
      
    </div>
  </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modalsStore.showYesNoModal 
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: "HideYesNoModal" })
})

export default connect(mapStateToProps, mapDispatchToProps)(YesNoModal);
  
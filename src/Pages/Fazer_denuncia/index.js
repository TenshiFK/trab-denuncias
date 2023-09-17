import './../../style.css';
import './style.css';

import { Col, Container, Form, Row } from "react-bootstrap";
import { IMaskInput } from 'react-imask';

import Footer from "../../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { useState } from 'react';
import { useThemeContext } from "../../Contexts/ThemeContext";
import api from '../../Services/api';
import { toast } from 'react-toastify';


function Denuncia() {
    const {theme} = useThemeContext();
    const navigate = useNavigate();

    const [dataocorrencia, setDataocorrencia] = useState('');
    const [frequencia, setFrequencia] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numcasa, setNumcasa] = useState('');
    const [naoseiencereco, setNaoseiendereco] = useState(false);
    const [nome, setNome] = useState('');
    const [numdenunciado, setNumdenunciado] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [corpele, setCorpele] = useState('');
    const [corolhos, setCorolhos] = useState('');
    const [corcabelo, setCorcabelo] = useState('');
    const [tipocabelo, setTipocabelo] = useState('');
    const [tatuagem, setTatuagem] = useState(false);
    const [cicatriz, setCicatriz] = useState(false);
    const [deficiencia, setDeficiencia] = useState(false);
    const [oculos, setOculos] = useState(false);
    const [estatura, setEstatura] = useState('');
    const [fisico, setFisico] = useState('');
    const [tornozeleira, setTornozeleira] = useState('');
    const [arma, setArma] = useState('');
    const [textarea, setTextarea] = useState('');
    // const [files, setFiles] = useState([]);

    // const addFile = (event) => {
    //     const newFiles = Array.from(event.target.files);

    //     setFiles(prevFiles => [...prevFiles, ...newFiles]);
    // };

    // const removeFile = (removeIndex) => {
    //     setFiles(files.filter((file, index) => index !== removeIndex));
    // };

    const handleCheckboxNaoseiendereco = (event) => {
        setNaoseiendereco(event.target.checked);
    };

    const handleOptionSexo = (event) => {
        setSexo(event.target.value);
    };

    const handleSelectCorPele = (event) => {
        setCorpele(event.target.value);
    };

    const handleSelectCorOlhos = (event) => {
        setCorolhos(event.target.value);
    };

    const handleSelectCorCabelo = (event) => {
        setCorcabelo(event.target.value);
    };

    const handleSelectTipoCabelo = (event) => {
        setTipocabelo(event.target.value);
    };

    const handleCheckboxTatuagem = (event) => {
        setTatuagem(event.target.checked);
    };
    
    const handleCheckboxCicatriz = (event) => {
        setCicatriz(event.target.checked);
    };

    const handleCheckboxDeficiencia = (event) => {
        setDeficiencia(event.target.checked);
    };
    
    const handleCheckboxOculos = (event) => {
        setOculos(event.target.checked);
    };

    const handleOptionEstatura = (event) => {
        setEstatura(event.target.value);
    };

    const handleOptionFisico = (event) => {
        setFisico(event.target.value);
    };

    const handleOptionTornozeleira = (event) => {
        setTornozeleira(event.target.value);
    };

    const handleOptionArma = (event) => {
        setArma(event.target.value);
    };

    function postDenuncia(e){
        e.preventDefault();

        api.post('Denuncia',{
            dataocorrencia,
            frequencia,
            bairro,
            cidade,
            endereco,
            cep,
            complemento,
            numcasa,
            naoseiencereco,
            nome,
            numdenunciado,
            sexo,
            idade,
            corpele,
            corolhos,
            corcabelo,
            tipocabelo,
            tatuagem,
            cicatriz,
            deficiencia,
            oculos,
            estatura,
            fisico,
            tornozeleira,
            arma,
            textarea,
            // files
        })
        setDataocorrencia('');
        setFrequencia('');
        setBairro('');
        setCidade('');
        setEndereco('');
        setCep('');
        setComplemento('');
        setNumcasa('');
        setNaoseiendereco(false);
        setNome('');
        setNumdenunciado('');
        setSexo('');
        setIdade('');
        setCorpele('');
        setCorolhos('');
        setCorcabelo('');
        setTipocabelo('');
        setTatuagem(false);
        setCicatriz(false);
        setDeficiencia(false);
        setOculos(false);
        setEstatura('');
        setFisico('');
        setTornozeleira('');
        setArma('');
        setTextarea('');
        // setFiles([]);
        toast.success("Denuncia Feita com sucesso!");
        navigate('/cadastro');
    }

    return (
      <Container fluid className="conteudo" id={theme}>
        <Container fluid className="context-cor">
          <Header/>
          <Row className="conteudo-principal">
              <Col className="centralizado-items">
                  <div className='container-denuncia'>
                    <Form onSubmit={postDenuncia}>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Data de ocorrência</Form.Label>
                                    <Form.Control type="date" value={dataocorrencia} onChange={(e) => setDataocorrencia(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Ocorre com frequência?</Form.Label>
                                    <Form.Control type="text" value={frequencia} onChange={(e) => setFrequencia(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>  
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Bairro</Form.Label>
                                    <Form.Control type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Cidade</Form.Label>
                                    <Form.Control type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Endereço</Form.Label>
                                    <Form.Control type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>CEP</Form.Label>
                                    <Form.Control type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Complemento</Form.Label>
                                    <Form.Control type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Número</Form.Label>
                                    <Form.Control type="text" value={numcasa} onChange={(e) => setNumcasa(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group>
                                    <Form.Check className='label-check' label={'Não sei o endereço do denunciado'} 
                                    checked={naoseiencereco}
                                    onChange={handleCheckboxNaoseiendereco}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <h1 className='titulo-denunciar'>Informações Gerais</h1>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Nome do denunciado</Form.Label>
                                    <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Número do denunciado</Form.Label>
                                    <Form.Control as={IMaskInput} mask="(00) 00000-0000" placeholder='(00) 00000-0000'  type="text" 
                                    value={numdenunciado} onChange={(e) => setNumdenunciado(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label' >Sexo:</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`sexo-${type}`} className="mb-3 centralizado-items-flex">
                                            <Form.Check className='label-check'
                                                inline
                                                label="Feminino"
                                                value="Feminino"
                                                name="sexo"
                                                type={type}
                                                id={`sexo-${type}-1`}
                                                checked={sexo === "Feminino"} onChange={handleOptionSexo} 
                                            />
                                            <Form.Check className='label-check'
                                                inline
                                                label="Masculino"
                                                value="Masculino"
                                                name="sexo"
                                                type={type}
                                                id={`sexo-${type}-2`}
                                                checked={sexo === "Masculino"} onChange={handleOptionSexo}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Idade (exata ou aproximada)</Form.Label>
                                    <Form.Control type="text" value={idade} onChange={(e) => setIdade(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label'>Cor da pele</Form.Label>
                                    <Form.Select aria-label="Default select example" value={corpele} onChange={handleSelectCorPele}>
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
                                    <Form.Label className='label'>Cor dos olhos</Form.Label>
                                    <Form.Select aria-label="Default select example" value={corolhos} onChange={handleSelectCorOlhos}>
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
                                    <Form.Label className='label'>Cor do cabelo</Form.Label>
                                    <Form.Select aria-label="Default select example" value={corcabelo} onChange={handleSelectCorCabelo}>
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
                                    <Form.Label className='label'>Tipo de cabelo</Form.Label>
                                    <Form.Select aria-label="Default select example" value={tipocabelo} onChange={handleSelectTipoCabelo}>
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
                                        <Form.Check className='label-check'
                                            label="Tatuagem"
                                            type={type}
                                            id={`block-${type}-1`}
                                            checked={tatuagem}
                                            onChange={handleCheckboxTatuagem}
                                        />
                                        <Form.Check className='label-check'
                                            label="Cicatriz"
                                            type={type}
                                            id={`block-${type}-2`}
                                            checked={cicatriz}
                                            onChange={handleCheckboxCicatriz}
                                        />
                                        <Form.Check className='label-check'
                                            label="Deficiência"
                                            type={type}
                                            id={`block-${type}-3`}
                                            checked={deficiencia}
                                            onChange={handleCheckboxDeficiencia}
                                        />
                                        <Form.Check className='label-check'
                                            label="Óculos"
                                            type={type}
                                            id={`reverse-${type}-3`}
                                            checked={oculos}
                                            onChange={handleCheckboxOculos}
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
                                                    <Form.Label className='label'>Estatura:</Form.Label>
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Não sei"
                                                        value="Não sei"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        checked={estatura === "Não sei"} onChange={handleOptionEstatura}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Alta"
                                                        value="Alta"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={estatura === "Alta"} onChange={handleOptionEstatura}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Média"
                                                        value="Média"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-3`}
                                                        checked={estatura === "Média"} onChange={handleOptionEstatura}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Baixa"
                                                        value="Baixa"
                                                        name="Estatura"
                                                        type={type}
                                                        id={`inline-${type}-4`}
                                                        checked={estatura === "Baixa"} onChange={handleOptionEstatura}
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
                                                    <Form.Label className='label'>Tipo físico:</Form.Label>
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Não sei"
                                                        value="Não sei"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                        checked={fisico === "Não sei"} onChange={handleOptionFisico}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Magro"
                                                        value="Magro"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        checked={fisico === "Magro"} onChange={handleOptionFisico}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Médio"
                                                        value="Médio"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-3`}
                                                        checked={fisico === "Médio"} onChange={handleOptionFisico}
                                                    />
                                                    <Form.Check className='label-check'
                                                        inline
                                                        label="Gordo"
                                                        value="Gordo"
                                                        name="fisico"
                                                        type={type}
                                                        id={`inline-${type}-4`}
                                                        checked={fisico === "Gordo"} onChange={handleOptionFisico}
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
                                            <Form.Label className='label'>O denunciado utiliza tornozeleira eletrônica?</Form.Label>
                                            <Form.Check className='label-check'
                                                label="Sim"
                                                value="Sim"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-1`}
                                                checked={tornozeleira === "Sim"} onChange={handleOptionTornozeleira}
                                            />
                                            <Form.Check className='label-check'
                                                label="Não"
                                                value="Não"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-2`}
                                                checked={tornozeleira === "Não"} onChange={handleOptionTornozeleira}
                                            />
                                            <Form.Check className='label-check'
                                                label="Não sei"
                                                value="Não sei"
                                                name="tornozeleira"
                                                type={type}
                                                id={`block-${type}-3`}
                                                checked={tornozeleira === "Não sei"} onChange={handleOptionTornozeleira}
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
                                            <Form.Label className='label'>O denunciado porta arma de fogo?</Form.Label>
                                            <Form.Check className='label-check'
                                                label="Sim"
                                                name="arma"
                                                value='Sim'
                                                type={type}
                                                id={`block-${type}-1`}
                                                checked={arma === "Sim"} onChange={handleOptionArma}
                                            />
                                            <Form.Check className='label-check'
                                                label="Não"
                                                name="arma"
                                                value='Não'
                                                type={type}
                                                id={`block-${type}-2`}
                                                checked={arma === "Não"} onChange={handleOptionArma}
                                            />
                                            <Form.Check className='label-check'
                                                label="Não sei"
                                                name="arma"
                                                value='Não sei'
                                                type={type}
                                                id={`block-${type}-3`}
                                                checked={arma === "Não sei"} onChange={handleOptionArma}
                                            />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='linha-inputs'>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='label'>Descreva no campo tudo que julgar necessário:</Form.Label>
                                    <Form.Control className='textarea' as="textarea" rows={5} value={textarea} onChange={(e) => setTextarea(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* <Row className='linha-inputs'>
                            <Col>
                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label className='label'>Inclua fotos, vídeos, documentos e capturas de tela que possam auxiliar nas investigações da denúncia:</Form.Label>
                                    <Form.Control type="file" multiple onChange={addFile}/>
                                    <ul className='lista-files'>
                                        {files.map((file, index) => (
                                            <li key={index} className='itens-lista'>
                                                {file.name}
                                                <button className='btn-excluir' onClick={() => removeFile(index)}>Excluir</button>
                                            </li>
                                        ))}
                                    </ul>
                                </Form.Group>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col className='centralizado-items'>
                            <Link to={'/'}><button className="btn-voltar">Voltar</button></Link>
                            </Col>
                            <Col className='centralizado-items'>
                            <button className='btn-finalizar'>Finalizar Denúncia</button>
                            </Col>
                        </Row>
                    </Form>
                  </div>
              </Col>
          </Row>
          <Footer/>
        </Container>
      </Container>
    );
  }
  
  export default Denuncia;
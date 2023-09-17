import { Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './../../style.css';

import Logo_Google_Play from './../../Assets/Google_Play_2022_icon.svg.png';
import { Link } from "react-router-dom";




export default function Footer(){

    return(
        <Container fluid>
            <footer className="rodape">
                <h2 className="titulo-rodape back-amarelo"><span className="back-amarelo">Em breve</span> disponível nas lojas:</h2>
                <div className="centralizado-flex back-amarelo">
                    <Link className="back-amarelo">
                        <div className="centralizado-flex retangulo-lojas back-amarelo">
                            <svg className="apple-light" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                                <path d="M14.9872 10.2597C14.9656 7.85353 17.2757 6.67844 17.3837 6.62248C16.0667 4.98108 14.0589 4.75725 13.3464 4.7386C11.6408 4.57073 9.97843 5.61526 9.11485 5.61526C8.22968 5.61526 6.89112 4.75725 5.46621 4.77591C3.6095 4.79456 1.88234 5.72717 0.932395 7.1634C-1.03226 10.0918 0.435834 14.4005 2.31413 16.7693C3.24248 17.9257 4.34355 19.2314 5.79005 19.1755C7.19338 19.1195 7.71153 18.3921 9.4171 18.3921C11.1011 18.3921 11.5977 19.1754 13.0657 19.1381C14.577 19.1195 15.527 17.9817 16.4337 16.8066C17.5132 15.4823 17.945 14.158 17.9666 14.102C17.9018 14.0834 15.0088 13.1321 14.9872 10.2597Z" fill="white"/>
                                <path d="M12.2233 3.17194C12.9789 2.35119 13.4971 1.25065 13.3459 0.112793C12.2449 0.1501 10.8847 0.765661 10.0859 1.56775C9.39502 2.27658 8.76892 3.43309 8.92005 4.51498C10.1723 4.5896 11.4245 3.97404 12.2233 3.17194Z" fill="white"/>
                            </svg>
                            <svg className="apple-dark" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                                <path d="M14.9872 10.2598C14.9656 7.85365 17.2757 6.67856 17.3837 6.6226C16.0667 4.9812 14.0589 4.75738 13.3464 4.73872C11.6408 4.57085 9.97843 5.61538 9.11485 5.61538C8.22968 5.61538 6.89112 4.75738 5.46621 4.77603C3.6095 4.79468 1.88234 5.72729 0.932395 7.16352C-1.03226 10.0919 0.435834 14.4006 2.31413 16.7694C3.24248 17.9259 4.34355 19.2315 5.79005 19.1756C7.19338 19.1196 7.71153 18.3922 9.4171 18.3922C11.1011 18.3922 11.5977 19.1756 13.0657 19.1383C14.577 19.1196 15.527 17.9818 16.4337 16.8067C17.5132 15.4824 17.945 14.1581 17.9666 14.1022C17.9018 14.0835 15.0088 13.1322 14.9872 10.2598Z" fill="black"/>
                                <path d="M12.2233 3.17194C12.9789 2.35119 13.4971 1.25065 13.3459 0.112793C12.2449 0.1501 10.8847 0.765661 10.0859 1.56775C9.39502 2.27658 8.76892 3.43309 8.92005 4.51498C10.1723 4.5896 11.4245 3.97404 12.2233 3.17194Z" fill="black"/>
                            </svg>
                            <div className="texto back-amarelo">
                                <h4 className="baixar back-amarelo">Baixar na</h4>
                                <p className="loja back-amarelo">APP STORE</p>
                            </div>
                        </div>                    
                    </Link>
                    <Link className="back-amarelo">
                        <div className="centralizado-flex retangulo-lojas margin-retangulo-lojas back-amarelo">
                            <img className="back-amarelo" src={Logo_Google_Play} width="25" height="25"/>
                            <div className="texto back-amarelo">
                                <h4 className="baixar back-amarelo">Baixar na</h4>
                                <p className="loja back-amarelo">APP STORE</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </footer>
            <div className="centralizado-flex-rodape">
                <p className="p-rodape">© 2023, SilentGuardians</p>
                <div className="line-rodape"/>
                <p className="p-rodape">Políticas de Privacidade</p>
            </div>
        </Container>
    )
}
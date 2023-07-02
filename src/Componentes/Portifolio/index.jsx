import React from "react";
import './styles.css';

import gelateria from '../../assets/projetos/gelateria.png';
import agencia from '../../assets/projetos/agencia.png';
import cafeteria from '../../assets/projetos/cafeteria.png';
import alfatech from '../../assets/projetos/alfatech.png';
import tabuada from '../../assets/projetos/tabuada.png';
import magic from '../../assets/projetos/magic.png';
import conversor from '../../assets/projetos/conversor.png';
import ayrton from '../../assets/projetos/ayrton.png';
import iconeolho from '../../assets/olho.png';

export default function Portifolio(props) {
    return (
        <section id='portifolio' className='portifolio'>
            <div className={props.TemaEscuro ? 'box-portifolio-escuro' : 'box-portifolio-claro'}>
                <div className="card">
                    <img src={gelateria} alt="gelateria" title="Gelateria" />
                    <div className="descricao">
                        <h3>Gelateria</h3>
                        <p>SPA para sorveteria feito em react onde o desafio foi construir uma aplicação 
                            responsiva react que possue mais de uma página e que seja capaz de navegar entre elas.</p>
                        <a href="https://gelateria-ebon.vercel.app/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>     
                </div>
                <div className="card card2">
                    <div className="descricao box2">
                        <h3>Agência de Branding</h3>
                        <p>Projeto agência de branding desenvolvido com a tecnologia React aplicando meus conhecimentos em html, css, javascrip e React.</p>
                        <a href="https://agencia-tan.vercel.app/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>
                    <img src={agencia} alt="agencia branding" title="agencia branding" />     
                </div>
                <div className="card">
                    <img src={cafeteria} alt="cafeteria" title="cafeteria" />
                    <div className="descricao">
                        <h3>Manhattan Coffe House</h3>
                        <p>Desenvolvido em html e css, site estático com efeito parallax nas imagens de fundo.</p>
                        <a href="https://cafeteria-tan.vercel.app/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>     
                </div>
                <div className="card card2">
                    <div className="descricao box2">
                        <h3>Alfa Tech</h3>
                        <p>Desenvolvido com html, css o site é estático de apresentação, preços e contato AlfaTech Soluções em hospedagem.</p>
                        <a href="https://alfa-tech-psi.vercel.app/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>
                    <img src={alfatech} alt="alfatech" title="AlfaTech" />     
                </div>
                <div className="card card-react">
                    <img src={tabuada} alt="tabuada" title="Tabuada" />
                    <div className="descricao">
                        <h3>App Tabuada</h3>
                        <p>Tabuada do 1 ao 10 para exercitar os conhecimentos em matemática, app é 
                            voltado para crianças do ensino fundamental. Desenvolvido em React Native</p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7054132908650807296/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>     
                </div>
                <div className="card card-react box2">
                    <div className="descricao">
                        <h3>Contador de Pontos</h3>
                        <p>Projeto de um app contador de pontos do jogo Magic The Gathering.
                           Desenvolvido em React Native.
                        </p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7049463866480541696/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>   
                    <img src={magic} alt="Magic The Gathering" title="Magic The Gathering" />  
                </div>
                <div className="card card-react">
                    <img src={conversor} alt="conversor" title="conversor" />
                    <div className="descricao">
                        <h3>App Conversor</h3>
                        <p>Converte quilômetros em milhas e também de milhas para quilômetros. Desenvolvido em React Native</p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7052689687248855041/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>     
                </div>
                <div className="card card-react box2">
                    <div className="descricao">
                        <h3>Ayrton Senna</h3>
                        <p>App é uma apresentação de quem foi Ayrton Senna
                           Desenvolvido em React Native.
                        </p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7047676283220037632/" target="_blank">
                            <img src={iconeolho} alt="olho" title="visitar" />
                        </a>
                    </div>   
                    <img src={ayrton} alt="Ayrton Senna" title="Ayrton Senna" />  
                </div>
            </div>
        </section>
    );
}

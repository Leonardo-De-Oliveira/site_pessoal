import React from 'react';
import './styles.css';

import whats from '../../assets/whatsapp.png';
import logo from '../../assets/logo.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import devmedia from '../../assets/devmedia.png';

export default function Contato(props) {
    return(
        <footer className={props.TemaEscuro ? 'rodape-escuro' : 'rodape-claro'}>
            <div className='box-rodape'>
                <div id='contato' className='contato'>
                    <p>Tem algum projeto em mente?</p>
                    <a href='https://wa.me/5519983568762' target='_blank'>
                       <img src={whats} alt='logo-whatsapp' title='whatsapp' />
                       Entrar em contato
                    </a>
                </div>
            </div>
            <div className='box-contato'>
                <nav className='navegacao-rodape'>
                    <a href='#home'>Home</a>
                </nav>
                <img className='logo' src={logo} alt='logo' title='logo' />
                <div className='navegacao-contatos'>
                    <a href='https://www.linkedin.com/in/leonardo-de-oliveira-57a261236/' target='_blank'>
                        <img src={linkedin} alt='linkedin' title='linkedin' />
                    </a>
                    <a href='https://github.com/Leonardo-De-Oliveira' target='_blank'>
                        <img src={github} alt='github' title='github' />
                    </a>
                    <a href='https://www.devmedia.com.br/perfil/leonardo-de-oliveira-3' target='_blank'>
                        <img src={devmedia} alt='devmedia' title='devmedia' />
                    </a>
                </div>
            </div>
            <p className='copyr'>E-mail: leonardodeoliveira@outlook.com</p>
            <p className='copyr'>© Desenvolvido por <span>Leonardo De Oliveira</span></p>
        </footer>
    );
}
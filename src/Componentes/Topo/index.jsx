import React from 'react';

import logo from '../../assets/logo.png';
import Sol from '../../assets/sol.png';
import Lua from '../../assets/lua.png';
import './styles.css';

export default function Topo(props) {
    return(
        <header className={props.TemaEscuro ? 'topo-escuro' : 'topo-claro'}>
            <div id="home" className='box-topo'>
                <img className='logo' src={logo} alt='logo' title='logo' />
                <button className='botao' onClick={props.alterarTema}>
                    <img src={props.TemaEscuro ? Sol : Lua} alt='icone botao' title='icone' />
                </button>
                <nav className='navegacao'>
                    <a href='#sobre'>Sobre</a>
                    <a href='#portifolio'>Portfolio</a>
                    <a href='#contato'>Contato</a>
                </nav>
            </div>    
        </header>
    )
}
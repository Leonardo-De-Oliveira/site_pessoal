import React from "react";
import './styles.css';


export default function Banner(props) {
    return(
        <section className='banner'>
            <div className={props.TemaEscuro ? 'box-banner-escuro' : 'box-banner-claro'}>
                <p>Olá! Eu sou Leonardo, bem-vindo ao meu website</p>
                <h1>Desenvolvedor Front-End Web / Mobile</h1>
                <p>Você pode encontrar aqui tudo sobre mim,<br/>
                meus recentes trabalhos, minhas skills e portifolio</p>
            </div>
        </section>
    );
}
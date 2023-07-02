import React from 'react';
import './styles.css';

import img from '../../assets/img.png';
import html from '../../assets/tecnologias/html.png';
import css from '../../assets/tecnologias/css.png';
import js from '../../assets/tecnologias/js.png';
import rc from '../../assets/tecnologias/react.png';
import nde from '../../assets/tecnologias/node.png';
import git from '../../assets/tecnologias/git.png';
import next from '../../assets/tecnologias/nextjs.png';
import sql from '../../assets/tecnologias/sql.png';
import mysql from '../../assets/tecnologias/mysql.png';

export default function Sobre(props) {
    return(
        <section className={props.TemaEscuro ? 'sobre-escuro' : 'sobre'}>
            <div className='box-sobre'>    
                <div className='box-fundo-img'></div>
                <div id='sobre'  className='box-img'>
                    <img src={img} />
                </div>
                <div className='box-texto'>
                    <h2>Sobre</h2>
                    <p>
                    Olá, meu nome é Leonardo de Oliveira e sou um programador Front-End e atualmente 
                    estou estudando para me tornar um programador Full Stack.
                    Com experiência em desenvolvimento Web/Mobile utilizando a liguagem JavaScript, 
                    framework React e React Native tive a oportunidade de desenvolver alguns projetos, 
                    buscando entregar o melhor resultado e qualidade para superar as expectativas.
                    A paixão por tecnologia começou quando eu era adolescente e pude ter 
                    a oportunidade de estudar e iniciar a carreira como programador.
                    Agradeço pela visita ao meu site e espero ter a oportunidade de trabalharmos juntos!
                    </p>
                </div>    
            </div>
            <h2>Tecnologias</h2>
            <div className='tecnologias'>
                <div className='hidden'>
                    <p>HTML</p>
                    <img src={html} alt='html' />
                </div>
                <div className='hidden'>
                    <p>CSS</p>
                    <img src={css} alt='css' />
                </div>
                <div className='hidden'>
                    <p>JavaScript</p>
                    <img src={js} alt='JavaScript' />
                </div>
                <div className='hidden'>
                    <p>React</p>
                    <img src={rc} alt='React' />
                </div>
                <div className='hidden'>
                    <p>Node.JS</p>
                    <img src={nde} alt='Node.Js' />
                </div>
                <div className='hidden'>
                    <p>Git</p>
                    <img src={git} alt='Git' />
                </div>
                <div className='hidden'>
                    <p>Next.JS</p>
                    <img src={next} alt='Next' />
                </div>
                <div className='hidden'>
                    <p>SQL</p>
                    <img src={sql} alt='sql' />
                </div>
                <div className='hidden'>
                    <p>MySQL</p>
                    <img src={mysql} alt='mysql' />
                </div>
            </div>
        </section>
    );
}
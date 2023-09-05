import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/portfolio-img.jpg';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" >
            
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>
                
                <p className="about-text-p about-text-p-2">meu nome é <span>Edilberto Firmino</span></p>
                
                <p className="about-text-p about-text-p-3">Sou desenvolvedor <span>full-stack</span> e atuo como Desenvolvedor Back-end na <span>FIEC</span> !</p>
                
                <p className="about-text-p about-text-p-3">Atualmente estou aprimorando minhas habilidades em <span>ReactJS</span> e em <span>PHP</span>, com o objetivo de me especializar em <span>Full-stack</span>, e aprendendo <span>React</span>, <span>LARAVEL</span> e <span>Freamworks JavaScript</span></p>
                
                <p className="about-text-p about-text-p-5"><span>Até o momento me identifico mais com Back-end e pretendo continuar com esse foco, mas acho importante explorar os horizontes de Front-end também.</span></p>

                <p className="about-text-p about-text-p-4"><span></span> Sou Analista de Sistemas sempre imaginei um futuro trabalhando na área da tecnologia e me sinto realizado com minha profissão <span></span></p>
                
                <p className="about-text-p about-text-p-6">Espero que goste do meu portfólio!</p>
              </section>
              <div className="about-image">
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}


import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'React Js'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Node Js'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Android Studio'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Cyber Seguridad'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'SQL'} progress={'Intermedio'} width={'66.66%'}/>
                <SkillsSection skill={'HMTL y CSS'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Javascript'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Python'} progress={'Básico'} width={'33.33%'}/>
                <SkillsSection skill={'Kotlin'} progress={'Intermedio'} width={'66.66%'}/>
                <SkillsSection skill={'PHP'} progress={'Intermedio'} width={'66.66%'}/>
                <SkillsSection skill={'Terminal'} progress={'Intermedio'} width={'66.66%'}/>
                <SkillsSection skill={'Git and GitHub'} progress={'Intermedio'} width={'66.66%'}/>
            </div>
            <Tittle title={'Knowledge'} span={'Knowledge'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Appications Development'} text={'Desarrollo de paginas web y aplicaciones android usando las mejores tecnologias.'}/>
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Uso práctico de inteligencia artificial para sistemas y de machine learning.'}/>
                <ServicesSection image={gamedev} title={'Technical service'} text={'Servicio de soporte técnico y mantenimiento de computadoras.'}/> 
                <ServicesSection image={gamedev} title={'Administration SQL'} text={'Uso y administración de SQL para ciencia de datos.'}/> 
            </div>
        </div>
    );
}

export default AboutPage;

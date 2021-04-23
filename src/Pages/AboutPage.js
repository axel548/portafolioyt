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
                <SkillsSection skill={'React Js'} progress={'10%'} width={'10%'}/>
                <SkillsSection skill={'Node Js'} progress={'20%'} width={'20%'}/>
                <SkillsSection skill={'Android Studio'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'Cyber Seguridad'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'SQL'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'HMTL y CSS'} progress={'30%'} width={'30%'}/>
                <SkillsSection skill={'Javascript'} progress={'35%'} width={'35%'}/>
                <SkillsSection skill={'Python'} progress={'20%'} width={'20%'}/>
                <SkillsSection skill={'Kotlin'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'PHP'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'Terminal'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Git and GitHub'} progress={'60%'} width={'60%'}/>
            </div>
            <Tittle title={'Services'} span={'Services'} />
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

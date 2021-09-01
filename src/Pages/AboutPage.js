import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import sql_badge from '../img/badges/sql-for-data-science-1.png';
import python_badge from '../img/badges/python-for-data-science.png';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import android from '../img/habilities/android.png'
import angular from '../img/habilities/angular.png'
import bd from '../img/habilities/BD.png'
import cyber from '../img/habilities/ciberseguridad.png'
import css from '../img/habilities/css.png'
import git from '../img/habilities/git.png'
import html from '../img/habilities/html.png'
import js from '../img/habilities/js.png'
import kotlin from '../img/habilities/kotlin.png'
import node from '../img/habilities/node.png'
import php from '../img/habilities/php.png'
import python from '../img/habilities/python.png'
import react from '../img/habilities/react.png'
import terminal from '../img/habilities/terminal.png'

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import CodeIcon from '@material-ui/icons/Code';
import SecurityIcon from '@material-ui/icons/Security';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Tittle title={'Badges'} span={'Badges'} />
            <div className="badges">
                <a href="https://www.credly.com/badges/230b9f77-a7ac-4aaf-90e7-d7f94ebe9e47" target="_blank">
                    <img src={sql_badge}/>
                </a>
                <a className="badge-Circle" href="https://www.credly.com/badges/d2c0f336-fa46-478c-9dc3-4a23e92f003e/" target="_blank">
                    <img src={python_badge}/>
                </a>
            </div>

            <Tittle title={'My Skills'} span={'My skills'} />
            {/* <div className="skillsContainer"> */}
            <div className="root">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography className="heading">
							<DeveloperBoardIcon  className="icon_react"/>Frontend Developer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="typo">
                            <SkillsSection w={'65px'} image={html} skill={'HMTL'} width={'33.33%'} />
                            <SkillsSection w={'65px'}image={css} skill={'CSS'} width={'33.33%'} />
                            <SkillsSection w={'70px'} image={js} skill={'JS'} width={'33.33%'} />
                            <SkillsSection w={'40px'} image={react} skill={'React Js'} width={'33.33%'}/>
                            <SkillsSection w={'40px'} image={angular} skill={'Angular'} width={'33.33%'} />
                            <SkillsSection w={'40px'} image={android} skill={'Android Studio'} width={'33.33%'} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                 <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography className="heading">
							<CodeIcon className="icon_react"/> Backend Developer</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="typo">
                            <SkillsSection image={python} skill={'Python'} width={'33.33%'} />
                            <SkillsSection image={node} skill={'Node Js'} width={'33.33%'} />
                            <SkillsSection w={'35px'} image={bd} skill={'SQL'} width={'66.66%'} />
                            <SkillsSection w={'35px'} image={kotlin} skill={'Kotlin'} width={'66.66%'} />
                            <SkillsSection w={'35px'} image={php} skill={'PHP'} width={'66.66%'} />
                            <SkillsSection w={'40px'} image={git} skill={'Git and GitHub'} width={'66.66%'} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
           <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography className="heading">
							<SecurityIcon className="icon_react"/> Cybersecurity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="typo">
                            <SkillsSection w={'45px'} image={cyber} skill={'Cyber Seguridad'} width={'33.33%'} />
                            <SkillsSection w={'35px'} image={terminal} skill={'Terminal'} width={'66.66%'} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>

		   </div>

            {/* </div> */}


            <Tittle title={'Knowledge'} span={'Knowledge'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Appications Development'} text={'Development of web pages and android applications using the best technologies.'} />
                {/* <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Uso práctico de inteligencia artificial para sistemas y de machine learning.'}/> */}
                <ServicesSection image={intelligence} title={'Administration SQL'} text={'Use and administration of SQL for data science.'} />
                <ServicesSection image={design} title={'Technical service'} text={'Computer maintenance and technical support service.'} />
            </div>
        </div>
    );
}

export default AboutPage;

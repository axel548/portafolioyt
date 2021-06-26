import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import sql_badge from '../img/badges/sql-for-data-science-1.png';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
		margin: '70px 0px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function AboutPage() {
    const classes = useStyles();

    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Tittle title={'Badges'} span={'Badges'} />
            <div className="badges">
                <a href="https://www.credly.com/badges/230b9f77-a7ac-4aaf-90e7-d7f94ebe9e47" target="_blank">
                    <img src={sql_badge} height="130" width="130" />
                </a>
            </div>

            <Tittle title={'My Skills'} span={'My skills'} />
            {/* <div className="skillsContainer"> */}
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography className={classes.heading}>Basic Habilities</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <SkillsSection skill={'React Js'} width={'33.33%'} />
                            <SkillsSection skill={'Node Js'} width={'33.33%'} />
                            <SkillsSection skill={'Android Studio'} width={'33.33%'} />
                            <SkillsSection skill={'Cyber Seguridad'} width={'33.33%'} />
                            <SkillsSection skill={'HMTL y CSS'} width={'33.33%'} />
                            <SkillsSection skill={'Javascript'} width={'33.33%'} />
                            <SkillsSection skill={'Python'} width={'33.33%'} />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <Typography className={classes.heading}>Intermediate Habilities</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <SkillsSection skill={'SQL'} width={'66.66%'} />
                            <SkillsSection skill={'Kotlin'} width={'66.66%'} />
                            <SkillsSection skill={'PHP'} width={'66.66%'} />
                            <SkillsSection skill={'Terminal'} width={'66.66%'} />
                            <SkillsSection skill={'Git and GitHub'} width={'66.66%'} />
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

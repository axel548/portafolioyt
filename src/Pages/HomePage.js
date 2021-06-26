import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Axel Lopez</span>
                </h1>
                <p className="h-sub-text">
                    I am a developer who is constantly learning new technologies.
                    <br />
                    <b>everything is possible</b>
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/axelabel.tuchezlopez/" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/axel548" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/axel-lopez-06606819a" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
                    </a>
                </div>
                
            </header>
        </div>
    );
}

export default HomePage;
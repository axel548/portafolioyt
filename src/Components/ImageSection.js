import React from 'react';
import about from '../img/personales/image_2.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Axel Lopez</span></h4>
                <p className="about-text">
                I am a guy who is passionate about learning, I like to learn new things every day, I am motivated to work as a backend developer and a bit of frontend.
                </p>
                <div className="about-details">
                    <div className="left-sectiofn">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Axel Abel Tuchez Lopez</p>
                        <p>: 20</p>
                        <p>: Guatemala</p>
                        <p>: Spanish, English, Japanese</p>
                        <p>: 8av. 12-85, Sn. Francisco 2, Zona 6 de Mixco</p>
                        <p>: Guatemala</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1gsOD5NdVtzn2vEr7nTU4nqxpgSS-UIQ9/view?usp=sharing" target="_blank"><button className="btn">CV</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
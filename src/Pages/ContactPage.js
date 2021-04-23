import React from 'react';
import Tittle from '../Components/Tittle';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.8406213815822!2d-90.58495262730624!3d14.659837742690137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM5JzM2LjMiTiA5MMKwMzUnMDUuNiJX!5e0!3m2!1ses-419!2sgt!4v1614216391491!5m2!1ses-419!2sgt" width="600" height="450" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+502 4230 2250'} text2={''} title={'Phone'} />
                    <ContactItem icon={email} text1={'axel.aatl@gmail.com'} text2={' tuchezlopezaxelabel@gmail.com '} title={'Email'} />
                    <ContactItem icon={location} text1={'8av 12-85 San Francisco 2, Zona 6 de Mixco '} text2={'Guatemala'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

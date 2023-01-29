import React from 'react';
import './contact.css';
import Separator from '../../common/separator/separator';
import SocialContact from './../../common/social-contact/social';
import resume from '../../../assets/Peter Quinn Resume.pdf';
import Cert from '../../../assets/Cert.pdf';


function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Social Media</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={resume} download="Peter Quinn Resume New.pdf"> Resume </a>
                    <i class='fi-rr-cloud-download download-icon' />
                </div>
                <div className="download2">
                    <a href={Cert} download="Cert.pdf"> Certification </a>
                    <i class='fi-rr-cloud-download download-icon' />
                </div>
            </div>
        </div>
    );
}

export default Contact;

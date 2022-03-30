import React from 'react';
import './contact.css';
import Separator from '../../common/separator/separator';
import SocialContact from './../../common/social-contact/social';
import resume from '../../../assets/Peter Quinn Resume.pdf';

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Work Together?</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={resume} download="Peter Quinn Resume.pdf"> Download Resume </a>
                    <i class='fi-rr-cloud-download download-icon' />
                   
                </div>
            </div>
        </div>
    );
}

export default Contact;

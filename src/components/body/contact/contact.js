import React from 'react';
import './contact.css';
import Separator from '../../common/separator/separator';
import SocialContact from './../../common/social-contact/social';
import resume from '../../../assets/Resume.pdf';

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Let's Talk</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={resume} download="Resume.pdf"> Download Resume </a>
                    <i class='fi-rr-cloud-download download-icon' />
                   
                </div>
            </div>
        </div>
    );
}

export default Contact;

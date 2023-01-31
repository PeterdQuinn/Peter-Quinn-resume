import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Welcome, My name is  
                    <br /><span className="info-name">Peter Quinn</span>
                    <br /> I am a certified full stack web developer.
                     I enjoy creating web applications and working with blockchain technology.
                    
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/icons/programming.jpg'  )}  width="300" height="300"       className="picture"></img>
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    );
}

export default About;

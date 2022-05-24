import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Welcome to my page, 
                   I am <br /><span className="info-name">Peter Quinn</span>
                    <br /> I am a freelance web Developer of the mern stack. I love creating clean working 
                    websites and applications. I am in love with web3 technology. 
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/icons/codeback.jpg'  )}  width="300" height="300"       className="picture"></img>
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    );
}

export default About;

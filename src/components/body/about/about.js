import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello I am ,
                    <br /><span className="info-name">Peter Quinn</span>
                    <br /> I am a mern Stack web developer who loves to develop applications and websites. I love creating
                    Dapps, currencies, and working on Blockchains.  
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/Bitcoin.png'  )}  width="400" height="333"       className="picture"></img>
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    );
}

export default About;

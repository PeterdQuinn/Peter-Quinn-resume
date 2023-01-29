import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello, my name is 
                    <br /><span className="info-name">Peter Quinn</span>
                    <br /> I am a certified mern stack web developer
                    who loves to create websites, build in web3 space and has a love for
                    data analytics. 
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

import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info"> 
                    <br /><span className="info-name">Full Stack (MERN) developer</span>
                    <br /> Hi there, I'm Peter Quinn, a certified full stack web developer with a passion for building dynamic web applications and exploring the exciting world of blockchain technology. With my extensive knowledge and experience in front-end and back-end development, I am capable of creating highly functional and user-friendly websites that meet the needs of modern businesses.
                            Whether it's building a custom website from scratch or optimizing an existing one for better performance, I am committed to delivering quality work that exceeds my clients' expectations.
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

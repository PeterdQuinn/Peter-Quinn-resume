import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info"> 
                    <br /><span className="info-name">Full Stack (MERN) developer</span>
                    <br /> Hi there, I'm Peter Quinn, a seasoned Full Stack (MERN) Developer and Blockchain Specialist. 
                    My journey in tech is fueled by a passion for creating dynamic, data-driven web applications and diving deep into the innovative realm of blockchain technology. 
                    With a comprehensive skill set in front-end and back-end development, 
                    I specialize in crafting highly functional and user-friendly websites that align with the evolving needs of modern businesses. 
                    My expertise extends to driving business growth through advanced SEO strategies, ensuring that each project not only meets but exceeds digital performance standards. 
                    Whether it's building a custom website from scratch, optimizing an existing one for better performance, or developing cutting-edge blockchain applications, my commitment lies in delivering exceptional, 
                    quality-driven solutions that surpass my clients' expectations.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/icons/Port.jpeg'  )}  width="300" height="300"       className="picture"></img>
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    );
}

export default About;

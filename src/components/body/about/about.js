import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/social';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi, My name is 
                    <br /><span className="info-name">Peter Quinn</span>
                    <br />  I am a Full Stack Web Developer of the (MERN) stack. I love Blockchains,NFTs, and crypto currencies.
                    but I love creating NFTs on Solana!
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/pngegg.png'  )}  width="500" height="333"       className="picture"></img>
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    );
}

export default About;

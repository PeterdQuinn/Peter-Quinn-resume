import React from 'react';
import './web.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i class="fi fi-rr-home"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="fi fi-rr-align-justify"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="fi fi-rr-globe"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi fi-rr-user"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web;

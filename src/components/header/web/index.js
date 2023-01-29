import React from 'react';
import './web.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i class="PROJECTS"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="SKILLS"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="WORK"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="CONTACT"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web;

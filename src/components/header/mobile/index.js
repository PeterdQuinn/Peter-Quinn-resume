import React from 'react';
import './mobile.css';


function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-settings-sliders"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                <i class="PROJECTS"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="SKILLS"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="WORK"></i>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="CONTACT"></i>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile;

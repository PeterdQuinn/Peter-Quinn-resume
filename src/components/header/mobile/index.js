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
                <i class="fi fi-rr-align-justify"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fi fi-rr-flame"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="fi fi-rr-grid"></i>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="fi fi-rr-address-book"></i>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile;

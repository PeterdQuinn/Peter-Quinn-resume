import React from 'react';
import './mobile.css';


function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                <i class="fi fi-brands-windows"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fi fi-sr-paint-brush"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <i class="fi fi-bs-grid-alt"></i></i>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="fi fi-brands-twitch"></i>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile;

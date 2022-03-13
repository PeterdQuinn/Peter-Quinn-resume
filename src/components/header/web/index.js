import React from 'react';
import './web.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i class="fi fi-rr-list-check"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="fi fi-brands-atom"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="fi fi-brands-ethereum"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi fi-brands-at&t"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web;

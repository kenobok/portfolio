import React, { useState } from 'react';

const Hire = () => {
    return (
        <li className="l-section section">
            <div className="hire hire-me">
                <div className="work-request">
                    <h3>Let Me Build Your Dream Website..!</h3>
                    <div className="work-request--options wrp2 mt-5 mb-4">
                        <span className="options-a">
                            <label>E-commerce Store</label>
                            <label>Academic Portal</label>
                            <label>Admin Dashboard</label>
                        </span>
                        <span className="options-b">
                            <label>Real Estate</label>
                            <label>Blog or Personal</label>
                            <label>Custom Projects</label>
                        </span>
                    </div>
                    <p>Have something else in mind? Let's talk about your custom needs!</p>
                    <div className="hire-contact">
                        <a href="tel:+2348033088179" style={{ color:'#2196F3' }}>
                            <i className="fas fa-phone fs-4"></i>
                            <small>Call Me</small>
                        </a>
                        <a href="https://wa.me/2348033088179" style={{ color:'#25D366' }}>
                            <i className="fab fa-whatsapp fs-4"></i>
                            <small>Whatsapp</small>
                        </a>
                        <a href="mailto:ken.obok.ula@gmail.com">
                            <i className="fas fa-envelope fs-4"></i>
                            <small>Email</small>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Hire;

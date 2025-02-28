import React, { useState } from 'react';

const Skills = () => {
    return (
        <li className="l-section section">
            <div className="hire">
              {/* <h2>My Skills</h2> */}
                <div className="work-request">
                    <div className="work-request--options">
                        <h4>Frontend</h4>
                        <span className="options">
                            <label>HTML5 & CSS3</label>
                            <label>Bootstrap</label>
                            <label>Tailwind CSS</label>
                            <label>JavaScript</label>
                            <label>React</label>
                        </span>
                        <h4>Backend</h4>
                        <span className="options">
                            <label>Python</label>
                            <label>Django</label>
                            <label>PostgreSQL</label>
                        </span>
                        <h4>DevOps & Testing</h4>
                        <span className="options">
                            <label>Git</label>
                            <label>AWS</label>
                            <label>Docker</label>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Skills;
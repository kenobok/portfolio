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
                            <label>HTML5</label>
                            <label>CSS3</label>
                            <label>JavaScript</label>
                            <label>React.js</label>
                        </span>
                        <h4>Backend & Database</h4>
                        <span className="options">
                            <label>Python</label>
                            <label>Django</label>
                            <label>Django REST</label>
                            <label>PostgreSQL</label>
                        </span>
                        <h4>DevOps & Testing</h4>
                        <span className="options">
                            <label>Git</label>
                            <label>Github</label>
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
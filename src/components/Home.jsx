import React from "react";
import me from '../assets/images/me.png'

const Home = () => {
    return (
        <>
            <li className="l-section section section--is-active">
                <div className="intro">
                    <div className="intro--banner">
                        <h4 id="typedText"></h4>
                        <button className="cta">Hire me</button>
                        <img src={me} alt="profile" />
                    </div>
                    <div className="intro--options">
                        <div>
                            <h3>ABOUT ME</h3>
                            <p>
                                With over 3 years of experience in web development, I have developed a well-rounded skill 
                                set that covers both front-end and back-end. Proficient in technologies like 
                                HTML, CSS, JavaScript (React.js), Python (Django, Django Rest Framework), SQL (MySQL, PostgreSQL),
                                AWS, Git and Github.<br/><br/>

                                I focus on writing clean, maintainable code while prioritizing user experience. 
                                My goal is to build intuitive, responsive websites that drive results and create 
                                scalable digital solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Home;

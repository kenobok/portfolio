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
                            With over 3 years of experience in crafting innovative web applications, 
                            I’ve honed a versatile skill set that allows me to seamlessly contribute 
                            to every aspect of a web project. My expertise spans front-end technologies 
                            such as HTML, CSS, and JavaScript (React.js), as well as back-end development 
                            using Python (Django, Django Rest Framework), and efficient database management 
                            with SQL (MySQL, PostgreSQL).<br/><br/>

                            I am committed to writing clean, maintainable code and prioritizing the user experience. 
                            I aim at building intuitive, responsive websites that not only meet user needs but also 
                            deliver tangible results. With a strong foundation in both front-end and back-end development, 
                            I focus on creating powerful, scalable digital experiences that drive success and add value.
                        </p>
                    </div>
                </div>
            </div>
        </li>
    </>
  );
};

export default Home;

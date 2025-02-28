import React from 'react';
import skilits from '../assets/images/skilits.png'
import ccc from '../assets/images/ccc.png'
import elitesdwell from '../assets/images/elitesdwell.png'
import tdfoundation from '../assets/images/tdfoundation.png'
import dop from '../assets/images/dop.png'

const Projects = () => {
    return (
        <li className="l-section section">
            <div className="work">
              <div className="work--lockup">
                <div className="slider-indicator"></div>
                <ul className="slider">
                  <li className="slider--item slider--item-left">
                    <a href="https://skilits-project.onrender.com" target="_blank">
                      <div className="slider--item-image">
                        <img src={ skilits } alt="Skilits" />
                      </div>
                      <h3 className="slider--item-title">Skilits</h3>
                      <p className="slider--item-description">
                        This portal connects skilled professionals with employers, 
                        offering an intuitive interface for job listings, search 
                        filters, and user profiles.
                        Built with HTML, CSS, JavaScript, 
                        React, Bootstrap, DjangoRestFramework, PostgreSQL, and AWS, it 
                        ensures a seamless and scalable user experience.
                      </p>
                    </a>
                  </li>
                  <li className="slider--item slider--item-center">
                    <a href="https://www.crystalcareercentre.com" target="_blank">
                      <div className="slider--item-image">
                        <img src={ ccc } alt="Crystal Career Centre" />
                      </div>
                      <h3 className="slider--item-title">Crystal Career Centre</h3>
                      <p className="slider--item-description">
                        Crystal Career Centre provides education and training 
                        support across London and the UK, offering resources 
                        to help students and trainees excel in their chosen fields.
                        Built with HTML, CSS, Bootstrap, JavaScript, React, 
                        Django and PostgreSQL for a robust and user-friendly experience.
                      </p>
                    </a>
                  </li>
                  <li className="slider--item slider--item-right">
                    <a href="https://elitesdwell-project.onrender.com" target="_blank">
                      <div className="slider--item-image">
                        <img src={ elitesdwell } alt="Elitesdwell" />
                      </div>
                      <h3 className="slider--item-title">ElitesDwell</h3>
                      <p className="slider--item-description">
                        The real estate website allows users to search for properties, 
                        view listings, and get detailed property information. It comprises
                        of service apartments, properties for rent and properties for sale.
                        It also features interactive property maps and search filters. 
                        Developed using HTML, CSS, Bootstrap, JavaScript.
                      </p>
                    </a>
                  </li>
                  <li className="slider--item">
                    <a href="https://tdfoundation-project.onrender.com" target="_blank">
                      <div className="slider--item-image">
                        <img src={ tdfoundation } alt="TDFoundation" />
                      </div>
                      <h3 className="slider--item-title">TDFoundation</h3>
                      <p className="slider--item-description">
                        A Non-Governmental Organization (NGO) website 
                        focused on charity, supporting communities and 
                        driving positive social change. The website helps raise 
                        awareness and donations for various causes. I implemented 
                        donation forms and event management features. 
                        Built using HTML, CSS, JavaScript and Git for version control.
                      </p>
                    </a>
                  </li>
                  <li className="slider--item">
                    <a href="" target="_blank">
                      <div className="slider--item-image">
                        <img src={ skilits } alt="awaays" />
                      </div>
                      <h3 className="slider--item-title">Awaays</h3>
                      <p className="slider--item-description">
                        Awaays website enables users to browse products, add them to the cart, 
                        and make purchases. It also comprises of give away activity on the site
                        were users can give away or recieve items. Technologies used include 
                        HTML, CSS, Bootstrap, TailwindCSS, JavaScript, React, DjangoRestFramework, 
                        Python, PostgreSQL, AWS and Git for version control.
                      </p>
                    </a>
                  </li>
                  <li className="slider--item">
                    <a href="https://cccdestinationofpeaceparish.co.uk/" target="_blank">
                      <div className="slider--item-image">
                        <img src={ dop } alt="dop" />
                      </div>
                      <h3 className="slider--item-title">Destination of Peace</h3>
                      <p className="slider--item-description">
                        Destination of Peace Parish is a Celestial Church of Christ in Birmingham, 
                        dedicated to fostering peace and spiritual growth. I built the church website 
                        to facilitate community engagement, providing event schedules, 
                        donation options, and sermon videos. The project utilizes HTML, CSS, Javascript
                        for a user-friendly interface.
                      </p>
                    </a>
                  </li>
                </ul>
                <div className="slider--prev2"></div>
                <div className="slider--next2"></div>
                <div className="slider--prev">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="slider--next">
                    <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
        </li>
    );
};

export default Projects;
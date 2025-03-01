import React from "react";
import resume from '../assets/images/resume.png'

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/obok-kenneth_resume.pdf';
        link.download = 'obok-kenneth_resume.pdf';
        link.click();
    };


  return (
    <>
        <li className="l-section section">
            <div className="resume_wrp">
                <div className="resume_img">
                    <img src={ resume } alt="resume" />
                </div>
                <div className="resume_download">
                    <button onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </li>
    </>
  );
};

export default Resume;

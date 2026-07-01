import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content-wrapper container">
        <span className="about-label">About</span>
        
        <div className="about-header">
          <div className="about-title-area">
            <h2 className="about-main-title">
              The Evolution of <br />
              <span className="gold-text">Mastery</span>
            </h2>
          </div>
        </div>

        <div className="about-details-grid">
          {/* Text Content Box */}
          <div className="detail-box text-box">
            <p>
              My journey into tech started with a lot of curiosity and a few broken lines of code. 
              Today, I build complete web applications using <strong>React and Flask</strong>. 
              I enjoy the balance of both worlds—designing clean interfaces and writing 
              solid logic that powers them behind the scenes.
            </p>
            <p>
              Recently, I built a <strong>Full-Stack Digital Diary</strong> to explore how data flows 
              between a frontend and a database.
            </p>
          </div>

          {/* Stats Box */}
          <div className="detail-box stats-box">
            <div className="stat-unit">
              <span className="stat-num">50+</span>
              <p className="stat-desc">Projects Completed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <span className="stat-num">24/7</span>
              <p className="stat-desc">Learning & Building</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="about-section" id="contact">
      <div className="about-content-wrapper container">
        {/* Section Header - Exactly like About/Projects */}
        <span className="about-label">Connect</span>
        <div className="about-header">
          <div className="about-title-area">
            <h2 className="about-main-title">
              Let's Start a <br />
              <span className="gold-text">Conversation</span>
            </h2>
          </div>
        </div>

        {/* Form Box - Full Width (Occupies both grid columns) */}
        <div className="detail-box contact-form-full">
          <form className="luxury-form">
            <div className="input-group">
              <div className="field">
                <label className="stat-desc">Your Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="field">
                <label className="stat-desc">Your Email</label>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="field">
              <label className="stat-desc">Message</label>
              <textarea placeholder="Tell me about your vision..." rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <span className="gold-text">→</span>
            </button>
          </form>
        </div>

        {/* Footer Row - Mail & Socials Aligned underneath */}
        <footer className="footer-bottom-row">
          <div className="footer-unit">
            <span className="about-label" style={{marginBottom: '5px', fontSize: '0.7rem'}}>Drop a mail</span>
            <a href="mailto:hello@example.com" className="footer-link">stutilohani854@gmail.com</a>
          </div>

          <div className="footer-unit social-links">
            <a href="https://www.linkedin.com" className="stat-desc hover-gold">LinkedIn</a>
            <div className="footer-dot"></div>
            <a href="https://github.com/" className="stat-desc hover-gold">GitHub</a>
            <div className="footer-dot"></div>
          </div>

          <div className="footer-unit right-align">
            <p className="stat-desc">© 2026 Crafted for Excellence</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
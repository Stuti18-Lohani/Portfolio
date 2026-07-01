import React, { useEffect, useState } from 'react'
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <nav className= {`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
            STUTI <span className='dot'>.</span>
        </div>

        <ul className="navbar__links">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#contact" className='nav-cta'>Get In Touch</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

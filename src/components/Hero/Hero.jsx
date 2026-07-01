import './Hero.css';
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Code. Scale. <br />
                        <span className="text-gradient">Deploy.</span>
                    </h1>

                    <p className="hero-description">
                        Passionate <strong>Full-Stack Developer</strong> with expertise in building
                        end-to-end web solutions. I specialize in creating seamless user journeys
                        and efficient server-side architectures using modern technologies.
                    </p>

                    <div className="hero__btns">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='btn-filled'
                            style={{ textDecoration: 'none', display: 'inline-block' }}
                        >
                            View My Work
                        </a>
                        <a href="#contact" className='btn-outline' style={{ textDecoration: 'none' }}>
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="hero__glow"></div>
            </section>
        </div>
    )
}

export default Hero

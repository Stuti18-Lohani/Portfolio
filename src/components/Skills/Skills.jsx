import './Skills.css';
import React from 'react'
import { SiPython, SiFlask, SiReact, SiTailwindcss, SiJavascript, SiBootstrap, SiHtml5, SiCss3, SiSqlite } from 'react-icons/si';

const Skills = () => {

    const skills = [
        {name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26'},
        {name: 'CSS3', icon: <SiCss3 />, color: '#1572B6'},
        {name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E'},
        {name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3'},
        {name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4'},
        {name: 'React', icon: <SiReact />, color: '#61DAFB'},
        {name: 'Python', icon: <SiPython />, color: '#3776AB'},
        {name: 'Flask', icon: <SiFlask />, color: '#FFFFFF'},
        {name: 'SQLAlchemy', icon: <SiSqlite />, color: '#CC0000'},
    ];
  return (
    <section className='skills-section' id='skills'>
      <div className="skills-wrapper container">
        <span className="section-lable">Skills</span>

        <h2 className="skills-title">
            Expert <span className="gold-text">Arsenal</span>
        </h2>

        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <div className="card-shine"></div>
                    <div className="skill-icon" style={{'--icon-color': 'skill.color'}}>
                        {skill.icon}
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import React from 'react';
import './Projects.css';

import inventoryImg from '../../assets/inventory-image.png'
import pokemonCardImg from '../../assets/pokemon-cards-image.png'
import foodDeliveryImg from '../../assets/food-delivery-image.png'

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Inventory Management System",
      cat: "FULL-STACK ENGINEERING",
      desc: "A sleek Full-Stack Inventory Manager built to simplify stock tracking. Using React for a snappy UI and Flask for a solid REST API, I created a live dashboard that handles real-time product updates and data management seamlessly.",
      tags: ["React", "Flask", "SQLAlchemy"],
      img: inventoryImg,
      link: "https://stockhero-dashboard.onrender.com/"
    },
    {
      id: "02",
      title: "PokeDex Explorer",
      cat: "API INTEGRATION & REACT",
      desc: "A dynamic search tool that fetches real-time data from the PokeAPI. I implemented custom search filters and responsive card layouts to display stats and abilities for over 1000+ characters.",
      tags: ["React", "REST API", "Axios", "CSS Grid"],
      img: pokemonCardImg,
      link: "https://pocket-vault-react.netlify.app/"
    },
    {
      id: "03",
      title: "Tomato – Food Delivery Platform",
      cat: "FRONTEND ARCHITECTUREY",
      desc: "A fully responsive food ordering interface built with React. It features a dynamic menu, category-based filtering, and a seamless cart system, providing a high-fidelity user experience similar to modern delivery apps.",
      tags: ["React", "Context API", "CSS3", "Netlify"],
      img: foodDeliveryImg,
      link: "https://stutifoodweb.netlify.app/"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <span className="project-label">Selected Works</span>
        <h2 className="about-main-title" style={{marginBottom: '100px'}}>
          The <span className="gold-text">Opus</span> Collection
        </h2>

        <div className="projects-list">
          {projects.map((p, index) => (
            <div key={p.id} className={`project-item ${index % 2 !== 0 ? 'rev' : ''}`}>
              
              <div className="project-visual">
                <div className="img-box">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <img src={p.img} alt={p.title} />
                  </a>
                  <div className="img-overlay"></div>
                </div>
                <div className="glow-sphere"></div>
              </div>

              <div className="project-content">
                <span className="p-num">{p.id}</span>
                <span className="p-cat">{p.cat}</span>
                <h3 className="p-title">{p.title}</h3>
                <p className="p-desc">{p.desc}</p>
                <div className="p-tags">
                  {p.tags.map(tag => <span key={tag} className="p-tag">{tag}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-link">
                  View Project <span>→</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
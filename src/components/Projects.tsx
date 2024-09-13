import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Projects.css'; // Custom CSS for the project list
import projectsData from '../assets/projects.json'
import { Link } from 'react-router-dom';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
  }

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData); // Directly set the projects state with the imported data
  }, []);


  return (
    <div className="container">
    <h1 className="my-4">Projects</h1>
      {projects.map((project, index) => (
        <div 
          className="row mb-4 project" 
          key={index} 
          style={{ 
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            color: '#fff'
          }}
        >
          <div className="overlay"></div>
          <div className="col-12 p-4">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="list-inline">
              {project.technologies.map((tech: string, techIndex: number) => (
                <li className="list-inline-item" key={techIndex}>
                  <span className="badge badge-primary">{tech}</span>
                </li>
              ))}
            </ul>
            <Link to={"/projects" + project.link} className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
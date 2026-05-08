import React from 'react';
import { motion } from 'framer-motion';
import { Github, Figma } from 'lucide-react';
import FlutterImg from '../assets/flutter.jpg';
import EcomImg from '../assets/ecom.png';
import MernImg from '../assets/mern.png';
import Serverless from '../assets/todo.jpeg';
import SclImg from '../assets/sclWebsite.jpg';
import BookMyShowImg from '../assets/bookmyshow.png';

const projects = [
  {
    title: "Waste Food Management App",
    description: "Flutter mobile app connecting donors with people in need to reduce food waste. Firebase backend for real-time data, intuitive UI/UX designed in Figma.",
    tags: ["Flutter", "Dart", "Firebase", "Figma"],
    image: FlutterImg,
    repoLink: "https://github.com/mpkumar04/wastefoodmanagement.git",
  },
  {
    title: "Employee Management System",
    description: "Full-stack MERN employee management solution with CRUD operations, attendance tracking, salary insights, and department analytics.",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    image: MernImg,
    repoLink: "https://github.com/mpkumar04/MERN-Employee-Management-System.git",
  },
  {
    title: "Mini E-Commerce Website",
    description: "React-based mini e-commerce platform with product ordering, detail pages, and shopping cart with dynamic updates.",
    tags: ["React", "Node.js", "Express"],
    image: EcomImg,
    repoLink: "https://github.com/mpkumar04/Mini-Ecommerce-Website.git",
  },
  {
    title: "Serverless todo app",
    description: "A serverless todo app with photo upload uses AWS and Flutter to manage tasks and images without running servers.",
    tags: ["Flutter", "Lambda", "S3 Bucket", "Aws"],
    image: Serverless,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    repoLink: "https://github.com/mpkumar04/serverless-todo-app",
  },
  {
    title: "School Website",
    description: "Responsive web application built with HTML, CSS, and JavaScript. Cross-browser compatible with optimized performance.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: SclImg,
    repoLink: "https://github.com/mpkumar04/School-Website",
  },
  {
    title: "BookMyShow UI/UX Redesign",
    description: "Redesigned BookMyShow app UI in Figma with modern visuals, improved navigation, and enhanced user experience for seamless ticket booking.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    image: BookMyShowImg,
    repoLink: null,
    figmaLink: "https://www.figma.com/proto/kiigEYycTUH81XvguAWsrT/HCI-BookMyShow-Project?node-id=0-1&t=dVbDojQuIHisILSO-1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div
                className="project-image"
                style={{
                  background: project.image
                    ? `url(${project.image}) center/cover no-repeat`
                    : project.gradient,
                }}
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.figmaLink && (
                    <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                      <Figma size={16} /> Figma
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="see-more-container">
          <a
            href="https://github.com/mpkumar04"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All on GitHub
          </a>
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.75rem;
          margin-top: 3rem;
        }

        .project-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 0 24px rgba(139, 92, 246, 0.2);
        }

        .project-image {
          height: 180px;
          background-size: cover;
          background-position: center;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.03);
        }

        .project-content {
          padding: 1.25rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.5rem;
        }

        .project-content h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .project-content p {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.6;
          flex: 1;
        }

        .project-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: 0.25rem;
        }

        .project-tags span {
          font-size: 0.72rem;
          padding: 0.2rem 0.55rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
        }

        .project-links a {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .project-links a:hover {
          color: var(--primary);
        }

        .see-more-container {
          text-align: center;
          margin-top: 3rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;

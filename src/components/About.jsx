import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                Hello! I'm <strong>M. Praveen Kumar</strong>, a motivated Software Engineer and BSc Management of Information Systems undergraduate at NSBM Green University, Sri Lanka.
                                I have hands-on experience in web and cross-platform mobile application development. Skilled in React.js, Flutter, Dart, Java, JavaScript, and cloud services including AWS Lambda, API Gateway, DynamoDB, and S3. Passionate about building scalable, user-focused applications while continuously learning new technologies.
                                Strong understanding of REST API integration, UI/UX design with Figma, and software development principles. Seeking opportunities to contribute and grow in a collaborative environment.
                            </p>
                        </div>

                        <div className="lang-row">
                            <span className="lang-label">Languages:</span>
                            {['Tamil', 'Sinhala', 'English'].map(l => (
                                <span key={l} className="lang-badge">{l}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .about-section {
          background: var(--bg-secondary);
        }

        .about-grid {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-text p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 0.75rem;
        }

        .about-text strong {
          color: var(--text-primary);
        }

        .lang-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .lang-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .lang-badge {
          padding: 0.25rem 0.75rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          font-size: 0.82rem;
          color: var(--text-primary);
        }
      `}</style>
        </section>
    );
};

export default About;

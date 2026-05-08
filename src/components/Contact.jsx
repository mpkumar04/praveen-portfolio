import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-wrapper"
        >
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="contact-sub">
            Open to new opportunities in Web & App Development. Feel free to reach out.
          </p>

          <div className="contact-cards">
            <a href="mailto:pravinmpk2@gmail.com" className="contact-card">
              <Mail size={22} className="card-icon" />
              <span className="card-label">Email</span>
              <span className="card-value">pravinmpk2@gmail.com</span>
            </a>
            <a href="tel:+94703310110" className="contact-card">
              <Phone size={22} className="card-icon" />
              <span className="card-label">Phone</span>
              <span className="card-value">+94 703310110</span>
            </a>
            <div className="contact-card">
              <MapPin size={22} className="card-icon" />
              <span className="card-label">Location</span>
              <span className="card-value">Bogawanthalawa, Sri Lanka</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
        }

        .contact-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .contact-sub {
          color: var(--text-secondary);
          font-size: 1rem;
          text-align: center;
          max-width: 480px;
          margin-bottom: 1rem;
        }

        .contact-cards {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.75rem 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          min-width: 180px;
          text-align: center;
          transition: border-color 0.2s, transform 0.2s;
          color: inherit;
          text-decoration: none;
        }

        .contact-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
        }

        .card-icon {
          color: var(--primary);
        }

        .card-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .card-value {
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
          word-break: break-all;
        }

        @media (max-width: 600px) {
          .contact-cards {
            flex-direction: column;
            align-items: center;
          }

          .contact-card {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

const scrollTo = (id, setIsMenuOpen) => {
  setIsMenuOpen(false);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="layout">
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo text-gradient" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Pravin</Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Link>
            <a href="#about" onClick={e => { e.preventDefault(); scrollTo('about', setIsMenuOpen); }}>About</a>
            <a href="#experience" onClick={e => { e.preventDefault(); scrollTo('experience', setIsMenuOpen); }}>Experience</a>
            <a href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects', setIsMenuOpen); }}>Projects</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo text-gradient">Pravin</span>
              <p>Full Stack Developer & UI/UX Designer based in Sri Lanka.</p>
            </div>
            <div className="footer-nav">
              <h4>Quick Links</h4>
              <a href="#about" onClick={e => { e.preventDefault(); scrollTo('about', setIsMenuOpen); }}>About</a>
              <a href="#skills" onClick={e => { e.preventDefault(); scrollTo('skills', setIsMenuOpen); }}>Skills</a>
              <a href="#experience" onClick={e => { e.preventDefault(); scrollTo('experience', setIsMenuOpen); }}>Experience</a>
              <a href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects', setIsMenuOpen); }}>Projects</a>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact', setIsMenuOpen); }}>Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="text-secondary">© {new Date().getFullYear()} Pravin Kumar. All rights reserved.</span>
            <div className="footer-socials">
              <a href="https://github.com/mpkumar04" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/pravin94" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/im.prxvin?igsh=YzM2dm80azk1OTF5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .mobile-toggle {
          display: none;
        }

        .main-content {
          padding-top: 70px;
        }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
          padding: 3rem 0 1.5rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand p {
          margin-top: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 260px;
          line-height: 1.6;
        }

        .footer-nav,
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav h4,
        .footer-contact h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.4rem;
        }

        .footer-nav a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .footer-nav a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom .text-secondary {
          font-size: 0.82rem;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.2s;
        }

        .social-icon:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(139, 92, 246, 0.08);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            padding: 1.5rem;
            gap: 1.25rem;
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-150%);
            transition: transform 0.3s ease-in-out;
          }

          .nav-links.open {
            transform: translateY(0);
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

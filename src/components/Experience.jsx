import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experience = [
  {
    role: 'Flutter Developer Intern',
    company: 'Appitura',
    period: 'Oct 2025 – May 2026 · Remote',
    bullets: [
      'Contributing to the development of a real-world booking application.',
      'Built and implemented complete frontend features using Flutter (Dart).',
      'Integrated REST APIs for booking flows, user authentication, and dynamic data handling.',
      'Working on backend development using AWS Lambda, API Gateway, and DynamoDB.',
      'Ensured seamless communication between mobile frontend and cloud backend.',
      'Focused on performance optimization and smooth user experience.',
    ],
  },
  {
    role: 'Cashier',
    company: 'Asia Asset Finance PLC, Bogawantalawa',
    period: 'Apr 2022 – Oct 2022 · On-site',
    bullets: [
      'Completed a 6-month training in cash handling, customer service, and financial transactions.',
      'Maintained accurate records while delivering high-quality service.',
      'Strengthened time management, attention to detail, and communication skills.',
    ],
  },
];

const education = [
  {
    degree: 'BSc in Management of Information Systems (Special)',
    institution: 'NSBM Green University, Sri Lanka',
    period: 'Oct 2022 – Present',
    bullets: [
      'Undergraduate degree focused on software development, UI/UX design, and data management.',
      'Studying the intersection of business, technology, and information systems.',
    ],
  },
  {
    degree: 'Advance Level — Engineering Technology',
    institution: 'Norwood National College',
    period: '2017 – 2019',
    bullets: [
      'Completed A/L in Engineering Technology stream.',
    ],
  },
  {
    degree: 'Ordinary Level',
    institution: "St Mary's National College",
    period: '2015 – 2016',
    bullets: [
      'Completed O/L examinations.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>

          <div className="exp-grid">
            {/* Work Experience */}
            <div className="exp-column">
              <div className="column-header">
                <Briefcase size={20} className="col-icon" />
                <h3>Work Experience</h3>
              </div>
              <div className="timeline">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    className="timeline-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="timeline-dot" />
                    <div className="card-body">
                      <h4>{item.role}</h4>
                      <span className="company">
                        <MapPin size={13} /> {item.company}
                      </span>
                      <span className="period">
                        <Calendar size={13} /> {item.period}
                      </span>
                      <ul className="bullet-list">
                        {item.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="exp-column">
              <div className="column-header">
                <GraduationCap size={20} className="col-icon" />
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    className="timeline-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="timeline-dot" />
                    <div className="card-body">
                      <h4>{item.degree}</h4>
                      <span className="company">
                        <MapPin size={13} /> {item.institution}
                      </span>
                      <span className="period">
                        <Calendar size={13} /> {item.period}
                      </span>
                      <ul className="bullet-list">
                        {item.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-tertiary);
        }

        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        .column-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .column-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .col-icon {
          color: var(--primary);
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-left: 2px solid var(--border-color);
          padding-left: 1.5rem;
          position: relative;
        }

        .timeline-card {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -1.85rem;
          top: 0.4rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
        }

        .card-body {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transition: border-color 0.2s;
        }

        .card-body:hover {
          border-color: var(--primary);
        }

        .card-body h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .company,
        .period {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--primary);
        }

        .period {
          color: var(--text-secondary);
        }

        .card-body p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 0.4rem;
        }

        .bullet-list {
          margin-top: 0.5rem;
          padding-left: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bullet-list li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          list-style: disc;
        }

        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

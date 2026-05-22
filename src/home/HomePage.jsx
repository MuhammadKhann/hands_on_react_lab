import React from 'react';

const skills = [
  { name: 'React', desc: 'Component-based UI development with hooks and state management' },
  { name: 'React Router', desc: 'Client-side navigation with route parameters and nested routes' },
  { name: 'React Query', desc: 'Server state management with caching, pagination and mutations' },
  { name: 'REST API', desc: 'HTTP GET and PUT operations with fetch and json-server backend' },
  { name: 'Form Validation', desc: 'Controlled components with real-time client-side validation' },
  { name: 'Custom Hooks', desc: 'Reusable stateful logic extracted from components' },
];

const timeline = [
  { label: 'Components and Props', detail: 'Built reusable ProjectCard and ProjectForm components' },
  { label: 'State and Events', detail: 'Added edit toggling and form field binding with useState' },
  { label: 'HTTP GET', detail: 'Loaded projects from a REST API with loading and error states' },
  { label: 'HTTP PUT', detail: 'Persisted project edits to the backend using fetch PUT requests' },
  { label: 'React Router', detail: 'Set up multi-page navigation with route parameters' },
  { label: 'React Query', detail: 'Replaced manual fetch logic with useQuery and useMutation' },
];

export default function HomePage() {
  return (
    <div style={s.page}>


      <section style={s.hero}>
        <div style={s.heroInner}>
          <p style={s.greeting}>Hello, my name is</p>
          <h1 style={s.name}>Muhammad Bin Nasir</h1>
          <p style={s.role}>Computer Science Student &mdash; 4th Semester</p>
          <p style={s.bio}>
            A motivated and detail-oriented Computer Science student with a strong passion for
            software development and modern web technologies. Continuously building hands-on
            experience through structured labs and real-world projects, with a focus on writing
            clean, maintainable code and delivering functional applications.
          </p>
          <div style={s.links}>
            <a
              href="https://www.linkedin.com/in/muhammad-bin-nasir-5b790b308/"
              target="_blank"
              rel="noreferrer"
              style={s.btnPrimary}
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/MuhammadKhann"
              target="_blank"
              rel="noreferrer"
              style={s.btnOutline}
            >
              GitHub
            </a>
            <a
              href="mailto:Muhammad.243595@gmail.com"
              style={s.btnOutline}
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* About This Project */}
      <section style={s.section}>
        <div style={s.inner}>
          <h2 style={s.sectionTitle}>About This Project</h2>
          <div style={s.divider} />
          <p style={s.para}>
            This application was built as part of the <strong>Hands-On React</strong> lab series,
            a structured curriculum covering the fundamentals of modern React development. The
            project demonstrates the full lifecycle of a production-style frontend application,
            from component design through REST API integration and advanced state management.
          </p>
          <p style={s.para}>
            The app allows users to browse a list of projects, view individual project details,
            and edit project information that is persisted to a backend REST API, all within a
            single-page application architecture.
          </p>
        </div>
      </section>

      {/* Technologies Used */}
      <section style={{ ...s.section, background: '#f8f9fa' }}>
        <div style={s.inner}>
          <h2 style={s.sectionTitle}>Technologies Used</h2>
          <div style={s.divider} />
          <div style={s.grid}>
            {skills.map((sk) => (
              <div key={sk.name} style={s.card}>
                <h3 style={s.cardTitle}>{sk.name}</h3>
                <p style={s.cardText}>{sk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Progress */}
      <section style={s.section}>
        <div style={s.inner}>
          <h2 style={s.sectionTitle}>Lab Progress</h2>
          <div style={s.divider} />
          <div>
            {timeline.map((item, i) => (
              <div key={i} style={s.timelineItem}>
                <div style={s.dot} />
                <div style={s.timelineContent}>
                  <p style={s.timelineLabel}>{item.label}</p>
                  <p style={s.timelineDetail}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer style={s.footer}>
        <p style={s.footerText}>
          Built with React &bull; Hands-On React Lab &bull; Muhammad Bin Nasir &copy; 2026
        </p>
      </footer>
    </div>
  );
}

const ACCENT = '#1a56db';
const BORDER = '#e2e8f0';
const DARK = '#0f172a';
const MUTED = '#64748b';

const s = {
  page: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    color: DARK,
    background: '#fff',
  },

  /* Hero */
  hero: {
    background: '#fff',
    borderBottom: `1px solid ${BORDER}`,
    padding: '4rem 2rem',
  },
  heroInner: {
    maxWidth: '760px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  greeting: {
    margin: '0 0 0.25rem',
    color: MUTED,
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  name: {
    margin: '0 0 0.4rem',
    fontSize: '2.4rem',
    fontWeight: '700',
    color: DARK,
    lineHeight: 1.15,
  },
  role: {
    margin: '0 0 1.25rem',
    color: ACCENT,
    fontWeight: '600',
    fontSize: '1rem',
  },
  bio: {
    margin: '0 0 1.75rem',
    color: MUTED,
    lineHeight: '1.8',
    fontSize: '0.97rem',
    maxWidth: '640px',
  },
  links: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '0.55rem 1.4rem',
    background: ACCENT,
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.875rem',
    border: `2px solid ${ACCENT}`,
  },
  btnOutline: {
    display: 'inline-block',
    padding: '0.55rem 1.4rem',
    background: 'transparent',
    color: ACCENT,
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.875rem',
    border: `2px solid ${ACCENT}`,
  },

  /* Sections */
  section: {
    padding: '3.5rem 2rem',
    background: '#fff',
  },
  inner: {
    maxWidth: '760px',
    margin: '0 auto',
  },
  sectionTitle: {
    margin: '0 0 0.5rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: DARK,
  },
  divider: {
    width: '48px',
    height: '3px',
    background: ACCENT,
    borderRadius: '2px',
    marginBottom: '1.75rem',
  },
  para: {
    color: MUTED,
    lineHeight: '1.8',
    marginBottom: '1rem',
    fontSize: '0.97rem',
  },

  /* Skills grid */
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.25rem',
  },
  card: {
    background: '#fff',
    border: `1px solid ${BORDER}`,
    borderRadius: '10px',
    padding: '1.5rem',
    borderTop: `3px solid ${ACCENT}`,
  },
  cardTitle: {
    margin: '0 0 0.5rem',
    fontSize: '0.97rem',
    fontWeight: '700',
    color: DARK,
  },
  cardText: {
    margin: 0,
    color: MUTED,
    fontSize: '0.875rem',
    lineHeight: '1.65',
  },

  /* Timeline */
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    paddingBottom: '1.5rem',
  },
  dot: {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    background: ACCENT,
    flexShrink: 0,
    marginTop: '4px',
    boxShadow: `0 0 0 3px rgba(26,86,219,0.12)`,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: '1rem',
    borderBottom: `1px solid ${BORDER}`,
  },
  timelineLabel: {
    margin: '0 0 0.2rem',
    fontWeight: '600',
    fontSize: '0.97rem',
    color: DARK,
  },
  timelineDetail: {
    margin: 0,
    color: MUTED,
    fontSize: '0.875rem',
  },

  /* Contact */
  contactRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.3rem',
  },
  contactLabel: {
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: MUTED,
    fontWeight: '700',
  },
  contactLink: {
    color: ACCENT,
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
  },

  /* Footer */
  footer: {
    padding: '1.5rem 2rem',
    textAlign: 'center',
    borderTop: `1px solid ${BORDER}`,
    background: '#f8f9fa',
  },
  footerText: {
    margin: 0,
    color: MUTED,
    fontSize: '0.8rem',
  },
};

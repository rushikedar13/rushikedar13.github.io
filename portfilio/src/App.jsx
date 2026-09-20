import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Mail, Menu, X, Terminal, Server, Database, ExternalLink, Moon, Sun } from 'lucide-react'
import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']

const skills = {
  Languages: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'SQL'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'API Integration'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux', 'Docker'],
  Concepts: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Authentication'],
}

const projects = [
  { number: '01', title: 'AI Resume Builder', type: 'FULL-STACK / AI', description: 'A full-stack AI-powered resume builder for creating, customizing, and exporting professional resumes with intelligent suggestions.', technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Groq AI'], features: ['Resume templates', 'AI summary generation', 'ATS score', 'PDF export'], accent: 'orange', repo: 'https://github.com/rushikedar13/AI-Resume-Builder-MERN' },
  { number: '02', title: 'Dropidex', type: 'MERN / PLATFORM', description: 'A transportation platform connecting senders, drivers, and administrators to manage intercity goods transportation.', technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'], features: ['Booking workflow', 'Driver management', 'Tracking', 'Authentication'], accent: 'blue', repo: 'https://github.com/rushikedar13' },
  { number: '03', title: 'Gym Management System', type: 'JAVA / DESKTOP', description: 'A Java desktop application for managing gym members, trainers, memberships, payments, attendance, and reports.', technologies: ['Java', 'Java Swing', 'JDBC', 'MySQL'], features: ['Member management', 'Payment management', 'Attendance', 'Reports'], accent: 'green', repo: 'https://github.com/rushikedar13' },
  { number: '04', title: 'E-Commerce Automation', type: 'TESTING / JAVA', description: 'A Selenium UI automation framework built for functional testing with TestNG, Maven, and the Page Object Model.', technologies: ['Java', 'Selenium', 'TestNG', 'Maven'], features: ['UI automation', 'TestNG execution', 'Element validation', 'Functional testing'], accent: 'pink', repo: 'https://github.com/rushikedar13' },
]

const services = [
  ['01', 'React Development', 'Responsive React websites, dashboards, forms, and frontend applications.', <Terminal key="1" size={24} />],
  ['02', 'MERN Development', 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.', <Server key="2" size={24} />],
  ['03', 'REST API Development', 'Backend APIs with CRUD operations, authentication, validation, and database integration.', <Database key="3" size={24} />],
  ['04', 'Bug Fixing', 'Debug and fix React, Node.js, API, database, and JavaScript issues.', <Code2 key="4" size={24} />],
]

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>RK<span>.</span></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'light'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href="/resume.pdf" download="Rushikesh_Kedar_Resume.pdf">Download CV <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>HELLO, I'M</motion.div>
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>Rushikesh<br /><em>Kedar</em></motion.h1>
            <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>Full-Stack Developer <span>/</span> Pune, India</motion.p>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}>I build modern web applications, REST APIs, and database-driven solutions that make practical problems feel simple.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
              <a className="button button-orange" href="#projects">View projects <ArrowDownRight size={17} /></a>
              <a className="button button-light" href="#contact">Contact me <ArrowUpRight size={17} /></a>
            </motion.div>
          </div>
          <motion.div className="hero-art" aria-label="Abstract developer profile illustration" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="art-grid"></div>
            <div className="art-circle">R<span>K</span></div>
          </motion.div>
          <div className="scroll-note"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="marquee" aria-label="Specialties"><span>REACT</span><i>✳</i><span>NODE.JS</span><i>✳</i><span>DATABASES</span><i>✳</i><span>JAVA</span><i>✳</i><span>REST APIS</span><i>✳</i><span>MONGODB</span><i>✳</i><span>EXPRESS</span></section>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp}>Curious by nature.<br /><em>Practical by choice.</em></motion.h2>
            <motion.div className="about-text" variants={fadeInUp}>
              <p>I'm a Computer Science and Engineering graduate focused on building full-stack web applications, REST APIs, and database-driven solutions.</p>
              <p>I enjoy solving practical problems, debugging applications, integrating APIs, and building responsive and user-friendly software. I'm currently looking for opportunities in software development, full-stack development, and freelance projects where I can apply my technical skills and continue learning.</p>
              <a className="text-link" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
            </motion.div>
          </motion.div>
          <motion.div className="stat-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}><strong>04</strong><span>Featured projects</span></motion.div>
            <motion.div variants={fadeInUp}><strong>04</strong><span>Core stacks</span></motion.div>
            <motion.div variants={fadeInUp}><strong>∞</strong><span>Things to learn</span></motion.div>
          </motion.div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label"><span>02</span> TOOLKIT</div>
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Skills that turn<br /><em>ideas into software.</em></h2>
            <p>A growing toolkit built through projects, internships, and a lot of curiosity.</p>
          </motion.div>
          <motion.div className="skill-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {Object.entries(skills).map(([category, values]) => (
              <motion.div className="skill-group" key={category} variants={fadeInUp}>
                <h3>{category}</h3>
                <div>{values.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <motion.div className="section-heading project-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Things I've<br /><em>built.</em></h2>
            <p>Projects where product thinking meets hands-on engineering.</p>
          </motion.div>
          <motion.div className="project-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {projects.map((project) => (
              <motion.article className={`project-card ${project.accent}`} key={project.title} variants={fadeInUp}>
                <div className="project-top">
                  <span>{project.number} / {project.type}</span>
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Code2 size={19} /></a>
                </div>
                <div className="project-body">
                  <div className="project-visual">
                    <Code2 size={32} />
                    <span>{project.number}</span>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <ul>{project.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
                    <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={16} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-label"><span>04</span> EXPERIENCE</div>
          <motion.div className="experience-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="experience-icon"><BriefcaseBusiness size={28} /></div>
            <div>
              <p className="eyebrow">JUL 2022 — SEP 2022</p>
              <h2>Java Developer Intern</h2>
              <h3>Compilers Technologies <span>/</span> Amravati</h3>
              <p>Worked on Java-based application development using Java Swing, JDBC, Servlets, JSP, and SQL. Developed database-driven functionality, implemented CRUD operations, performed functional testing and data validation, and worked on debugging and error handling.</p>
            </div>
          </motion.div>
          <motion.div className="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <span>EDUCATION</span>
              <strong>B.E. Computer Science &amp; Engineering</strong>
              <small>Sipna College of Engineering and Technology, Amravati</small>
              <b>2023 — 2026</b>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span>EDUCATION</span>
              <strong>Diploma in Computer Engineering</strong>
              <small>Government Polytechnic, Amravati</small>
              <b>2020 — 2023</b>
            </motion.div>
          </motion.div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-label"><span>05</span> SERVICES</div>
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2>Ways I can<br /><em>help you move.</em></h2>
            <p>From the first component to the final deploy, I like making the work feel clear.</p>
          </motion.div>
          <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {services.map(([number, title, description, icon]) => (
              <motion.div className="service" key={title} variants={fadeInUp}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-decor">LET'S<br /><em>MAKE</em><br />IT REAL<span>.</span></div>
          <motion.div className="contact-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="section-label"><span>06</span> CONTACT</div>
            <h2>Have a project<br /><em>in mind?</em></h2>
            <p>I'm open to software development, full-stack development, and freelance opportunities.</p>
            <div className="contact-actions">
              <a className="button button-orange" href="mailto:rushikeshkedar13@gmail.com?subject=Portfolio%20Enquiry"><Mail size={17} /> Email me</a>
              <a className="social-button" href="tel:+918485863058"><span aria-hidden="true">☎</span> 84858 63058</a>
              <a className="social-button" href="https://github.com/rushikedar13" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
              <a className="social-button" href="https://linkedin.com/in/rushikesh-kedar-2511b5390" target="_blank" rel="noreferrer"><Code2 size={18} /> LinkedIn</a>
            </div>
          </motion.div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home">RK<span>.</span></a>
        <p>Designed &amp; built by Rushikesh Kedar <span>© 2026</span></p>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  )
}

export default App

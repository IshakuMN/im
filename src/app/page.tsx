"use client";

import { motion } from "framer-motion";
import {
  Atom,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Database,
  FileDown,
  GitBranch,
  Link2,
  Menu,
  Terminal,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const technologies = [
  { name: "PostgreSQL", icon: Database },
  { name: "Node.js", icon: Terminal },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Wind },
  { name: "JavaScript", icon: Braces },
  { name: "Git", icon: GitBranch },
  { name: "Python", icon: Terminal },
  { name: "PyTorch", icon: BrainCircuit },
  { name: "FastAPI", icon: Zap },
  { name: "LangChain", icon: Link2 },
];

const projects = [
  {
    number: "01",
    title: "Studiowork",
    type: "Productivity platform",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    shade: "dark",
  },
  {
    number: "02",
    title: "Ledgerly",
    type: "Financial dashboard",
    tags: ["React", "Node.js", "Charts"],
    shade: "stone",
  },
  {
    number: "03",
    title: "Memento",
    type: "A considered notes app",
    tags: ["Next.js", "Prisma", "Vercel"],
    shade: "sand",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#connect" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section" id="top">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1>
            Ishaku
            <br />
            March
          </h1>
          <p className="hero-role">Software Engineer | AI/ML &amp; Full Stack</p>
          <p className="hero-description">
            Building LLM-powered systems and full-stack applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a href="#connect" className="button button-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>
        <motion.div
          className="keyboard"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          aria-label="Decorative keyboard keys spelling ISHK"
        >
          <div className="keyboard-base" />
          <div className="key key-i">I</div>
          <div className="key key-s">S</div>
          <div className="key key-h">H</div>
          <div className="key key-k">K</div>
        </motion.div>
        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <ArrowDownRight size={25} />
        </a>
      </section>

      <section className="technologies-section section" aria-labelledby="technologies-title">
        <h2 id="technologies-title">Technologies</h2>
        <div className="technology-grid">
          {technologies.map(({ name, icon: Icon }) => (
            <article className="technology" key={name}>
              <Icon aria-hidden="true" strokeWidth={1.8} />
              <p>{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
        >
          <div className="about-introduction">
            <h2>About Me</h2>
            <p className="about-lead">
              I build AI-powered systems and full-stack applications, from LLM
              pipelines to polished production web experiences.
            </p>
            <div className="about-copy">
              <p>
                I&apos;m Ishaku March, a software engineer who enjoys turning
                complex ideas into elegant, dependable digital products.
              </p>
              <p>
                From the first sketch to the final deployment, I care deeply
                about the details that make software useful, maintainable, and
                effortless to use.
              </p>
              <p>
                My work spans AI/ML systems, full-stack platforms, and tools
                that help people get more from technology.
              </p>
            </div>
            <a className="resume-link" href="#connect">
              <FileDown size={15} /> Download Resume
            </a>
          </div>
          <div className="metrics" aria-label="Professional highlights">
            <article>
              <strong>3+</strong>
              <span>Projects</span>
            </article>
            <article>
              <strong>8+</strong>
              <span>Technologies</span>
            </article>
            <article>
              <strong>2 years</strong>
              <span>Experience</span>
            </article>
            <article>
              <strong>Always</strong>
              <span>Learning</span>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label">
          <span>03</span>
          <p>Experience</p>
        </div>
        <div className="experience-heading">
          <h2>A few places I&apos;ve made an impact.</h2>
          <p>
            My work sits at the intersection of engineering, product thinking,
            and careful execution.
          </p>
        </div>
        <div className="roles">
          <article>
            <span>2023 — Present</span>
            <h3>Senior Full-stack Developer</h3>
            <p>Independent / Remote</p>
            <ArrowUpRight size={19} />
          </article>
          <article>
            <span>2021 — 2023</span>
            <h3>Software Engineer</h3>
            <p>Product-focused team</p>
            <ArrowUpRight size={19} />
          </article>
          <article>
            <span>2019 — 2021</span>
            <h3>Frontend Developer</h3>
            <p>Digital studio</p>
            <ArrowUpRight size={19} />
          </article>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-label">
          <span>04</span>
          <p>Selected projects</p>
        </div>
        <div className="project-intro">
          <h2>Selected work.</h2>
          <a className="text-link" href="mailto:hello@ishakumarch.dev">
            Start a project <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className={`project-preview ${project.shade}`}>
                <span>{project.number}</span>
                <div className="project-mark">{project.title.slice(0, 1)}</div>
                <ArrowUpRight size={23} />
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="connect section" id="connect">
        <div className="section-label">
          <span>05</span>
          <p>Connect</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Have a project in mind?</p>
          <h2>
            Let&apos;s make something
            <br />
            <em>good together.</em>
          </h2>
          <a className="email-link" href="mailto:hello@ishakumarch.dev">
            hello@ishakumarch.dev <ArrowUpRight size={24} />
          </a>
        </motion.div>
        <footer>
          <p>© 2026 Ishaku March</p>
          <div>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
          <p>Designed with intention.</p>
        </footer>
      </section>
    </main>
  );
}

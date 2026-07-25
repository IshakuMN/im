"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const technologies = [
  "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Git",
];

const projects = [
  { number: "01", title: "Studiowork", type: "Productivity platform", tags: ["Next.js", "TypeScript", "PostgreSQL"], shade: "dark" },
  { number: "02", title: "Ledgerly", type: "Financial dashboard", tags: ["React", "Node.js", "Charts"], shade: "stone" },
  { number: "03", title: "Memento", type: "A considered notes app", tags: ["Next.js", "Prisma", "Vercel"], shade: "sand" },
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
        <a className="wordmark" href="#top" aria-label="Ishaku March home">IM<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#connect" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-contact" href="mailto:hello@ishakumarch.dev">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section" id="top">
        <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>Based in Nigeria · Available worldwide</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          I build digital<br />experiences that <em>matter.</em>
        </motion.h1>
        <motion.div className="hero-bottom" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <p>Full-stack engineer focused on crafting clear, useful, and beautifully built products for the web.</p>
          <a href="#projects" className="round-link" aria-label="View selected work"><ArrowDownRight size={25} /></a>
        </motion.div>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section className="marquee" aria-label="Technologies I work with">
        <div className="marquee-track">{[...technologies, ...technologies].map((tech, index) => <span key={`${tech}-${index}`}>{tech}<i>✦</i></span>)}</div>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>02</span><p>About me</p></div>
        <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.65 }}>
          <h2>Building the thoughtful layer between people and technology.</h2>
          <div className="about-copy">
            <p>I&apos;m Ishaku March, a software engineer who enjoys turning complex ideas into elegant, dependable digital products.</p>
            <p>From the first sketch to the final deployment, I care deeply about the small details that make software feel effortless to use.</p>
            <a className="text-link" href="#connect">More about me <ArrowUpRight size={15} /></a>
          </div>
        </motion.div>
        <div className="principles">
          <article><Code2 size={21} /><h3>Clean craft</h3><p>Simple, maintainable systems that are a pleasure to extend.</p></article>
          <article><Layers3 size={21} /><h3>Whole product</h3><p>Technical decisions made with the people using them in mind.</p></article>
          <article><Braces size={21} /><h3>Built to last</h3><p>Reliable foundations that scale alongside your ambition.</p></article>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label"><span>03</span><p>Experience</p></div>
        <div className="experience-heading"><h2>A few places I&apos;ve made an impact.</h2><p>My work sits at the intersection of engineering, product thinking, and careful execution.</p></div>
        <div className="roles">
          <article><span>2023 — Present</span><h3>Senior Full-stack Developer</h3><p>Independent / Remote</p><ArrowUpRight size={19} /></article>
          <article><span>2021 — 2023</span><h3>Software Engineer</h3><p>Product-focused team</p><ArrowUpRight size={19} /></article>
          <article><span>2019 — 2021</span><h3>Frontend Developer</h3><p>Digital studio</p><ArrowUpRight size={19} /></article>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-label"><span>04</span><p>Selected projects</p></div>
        <div className="project-intro"><h2>Selected work.</h2><a className="text-link" href="mailto:hello@ishakumarch.dev">Start a project <ArrowUpRight size={15} /></a></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className="project" key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <div className={`project-preview ${project.shade}`}><span>{project.number}</span><div className="project-mark">{project.title.slice(0, 1)}</div><ArrowUpRight size={23} /></div>
              <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="connect section" id="connect">
        <div className="section-label"><span>05</span><p>Connect</p></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let&apos;s make something<br /><em>good together.</em></h2>
          <a className="email-link" href="mailto:hello@ishakumarch.dev">hello@ishakumarch.dev <ArrowUpRight size={24} /></a>
        </motion.div>
        <footer><p>© 2026 Ishaku March</p><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div><p>Designed with intention.</p></footer>
      </section>
    </main>
  );
}

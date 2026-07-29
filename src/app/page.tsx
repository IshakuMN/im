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
import {
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
} from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaPython, FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { useState } from "react";

const technologies = [
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git", icon: FaGitAlt },
  { name: "Python", icon: FaPython },
  { name: "Figma", icon: FaFigma },
  { name: "NestJS", icon: SiNestjs },
  { name: "FastAPI", icon: Zap },
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
  const navItems = ["About Me", "Experience", "Projects", "Contact"];
  const navTargets = ["#about", "#experience", "#projects", "#connect"];

  return (
    <main>
      <header className="mx-auto flex h-[8.6rem] max-w-[1680px] items-center justify-center px-[clamp(1.5rem,8.7vw,11rem)] text-[clamp(1rem,1.15vw,1.5rem)] max-[700px]:h-22">
        <nav
          className={`${
            menuOpen ? "max-[700px]:flex" : "max-[700px]:hidden"
          } flex gap-[clamp(2.5rem,4vw,5.1rem)] text-[#777b89] max-[700px]:absolute max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-22 max-[700px]:z-5 max-[700px]:flex-col max-[700px]:border-b max-[700px]:border-[#d8d6cf] max-[700px]:bg-[#fcfcfc] max-[700px]:p-6`}
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href={navTargets[index]}
              onClick={() => setMenuOpen(false)}
              className={`relative py-[0.35rem] transition-colors hover:text-[#2d2d2e] ${
                index === 0
                  ? "text-[#2d2d2e] after:absolute after:bottom-[-0.45rem] after:left-0 after:right-0 after:h-0.75 after:bg-current"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="absolute right-6 hidden border-0 bg-transparent p-0 text-inherit max-[700px]:block"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section
        className="relative mx-auto min-h-[calc(100vh-8.6rem)] max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-18 pt-20 max-[700px]:min-h-190 max-[700px]:pt-18"
        id="top"
      >
        <motion.div
          className="relative z-1 max-w-208"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="max-w-275 text-[clamp(4.9rem,7.5vw,9.25rem)] leading-[0.93] font-bold tracking-[-0.09em] max-[700px]:text-[clamp(4.25rem,19vw,6rem)]">
            Ishaku March
          </h1>
          <p className="mt-6 mb-4 text-[clamp(1.6rem,2.15vw,2.75rem)] leading-[1.4] tracking-[-0.045em] max-[700px]:my-8 max-[700px]:mb-5 max-[700px]:text-[1.35rem]">
            Software Engineer | AI &amp; Full Stack
          </p>
          <p className="max-w-188 text-[clamp(1rem,1.25vw,1.55rem)] leading-[1.35] text-[#5c5c5d] max-[700px]:max-w-[18rem] max-[700px]:text-base">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
          <div className="mt-8 flex gap-5 max-[700px]:mt-9 max-[700px]:gap-3">
            <a
              href="#projects"
              className="inline-flex  items-center justify-center rounded-[0.7rem] border-2 border-[#3a3a3a] bg-[#323232] px-8 py-4 text-[1.1rem] font-semibold text-gray-100! transition duration-200 hover:-translate-y-0.75 max-[700px]:min-h-[3.8rem] max-[700px]:min-w-0 max-[700px]:flex-1 max-[700px]:px-3 max-[700px]:py-3 max-[700px]:text-[0.95rem]"
            >
              View Projects
            </a>
            <a
              href="#connect"
              className="inline-flex  items-center justify-center rounded-[0.7rem] border-2 border-[#3a3a3a] px-8 py-4 text-[1.1rem] font-semibold transition duration-200 hover:-translate-y-0.75 hover:bg-[#323232] hover:text-white max-[700px]:min-h-[3.8rem] max-[700px]:min-w-0 max-[700px]:flex-1 max-[700px]:px-3 max-[700px]:py-3 max-[700px]:text-[0.95rem]"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <a
          className="absolute bottom-[3.6rem] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[0.7rem] text-[1.05rem] text-[#555] max-[700px]:bottom-[1.4rem] max-[700px]:text-[0.9rem]"
          href="#about"
        >
          <span>Scroll to explore</span>
          <ArrowDownRight size={25} className="rotate-45" />
        </a>
      </section>

      <section
        className="bg-[#f5f5f5] px-[clamp(1.5rem,8.7vw,11rem)] pb-[clamp(4.5rem,7vw,7.2rem)] pt-[clamp(4.5rem,7vw,7.2rem)]"
        aria-labelledby="technologies-title"
      >
        <h2
          id="technologies-title"
          className="mx-auto max-w-[1680px] text-[clamp(3rem,5.1vw,5.55rem)] leading-none font-normal tracking-[-0.065em]"
        >
          Technologies
        </h2>
        <div className="mx-auto mt-[clamp(3.3rem,5vw,5.1rem)] grid max-w-6xl grid-cols-7 gap-y-[3.6rem] gap-x-10 max-[900px]:grid-cols-5 max-[700px]:mt-12 max-[700px]:grid-cols-3 max-[700px]:gap-y-10 max-[700px]:gap-x-4">
          {technologies.map(({ name, icon: Icon }) => (
            <article
              className="flex min-w-0 flex-col items-center gap-3 text-center text-[#383838]"
              key={name}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.8}
                className="h-[3.45rem] w-[3.45rem] max-[700px]:h-[2.8rem] max-[700px]:w-[2.8rem]"
              />
              <p className="m-0 whitespace-nowrap text-[0.9rem] leading-[1.2] max-[700px]:whitespace-normal max-[700px]:text-[0.78rem]">
                {name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-38 pt-38 max-[700px]:pb-22 max-[700px]:pt-22"
        id="about"
      >
        <motion.div
          className="grid grid-cols-[minmax(0,1.08fr)_minmax(23rem,0.92fr)] gap-[clamp(3rem,7vw,8.5rem)] max-[900px]:grid-cols-1 max-[700px]:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
        >
          <div className="max-w-136 max-[900px]:max-w-156">
            <h2 className="m-0 text-[clamp(3rem,5.1vw,5.55rem)] leading-none font-normal tracking-[-0.065em]">
              About Me
            </h2>
            <p className="mb-8 mt-[clamp(2.6rem,4vw,4.2rem)] text-[clamp(1.2rem,1.75vw,1.85rem)] leading-[1.35] tracking-[-0.035em] max-[700px]:mb-6 max-[700px]:mt-8 max-[700px]:text-[1.25rem]">
              I build AI-powered systems and full-stack applications, from LLM
              pipelines to polished production web experiences.
            </p>
            <div>
              <p className="mb-[1.45rem] mt-0 text-base leading-[1.55] text-[#5d5d5e] max-[700px]:text-[0.94rem]">
                I&apos;m Ishaku March, a software engineer who enjoys turning
                complex ideas into elegant, dependable digital products.
              </p>
              <p className="mb-[1.45rem] mt-0 text-base leading-[1.55] text-[#5d5d5e] max-[700px]:text-[0.94rem]">
                From the first sketch to the final deployment, I care deeply
                about the details that make software useful, maintainable, and
                effortless to use.
              </p>
              <p className="mb-[1.45rem] mt-0 text-base leading-[1.55] text-[#5d5d5e] max-[700px]:text-[0.94rem]">
                My work spans AI systems, full-stack platforms, and tools that
                help people get more from technology.
              </p>
            </div>
            <a
              className="mt-4 inline-flex items-center gap-2 rounded-[0.3rem] bg-[#333] px-4 py-3 text-[0.84rem] text-gray-100! transition duration-200 hover:-translate-y-0.5 hover:bg-[#171717]"
              href="/ishaku_march.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileDown size={15} /> Download Resume
            </a>
          </div>
          <div
            className="grid grid-cols-2 gap-[1.35rem] self-end max-[900px]:max-w-156 max-[700px]:gap-3"
            aria-label="Professional highlights"
          >
            <article className="flex min-h-[clamp(12rem,20vw,17.5rem)] flex-col items-center justify-center bg-[#f4f4f4] text-center max-[700px]:min-h-38">
              <strong className="text-[clamp(1.9rem,3.1vw,3.25rem)] leading-none tracking-[-0.06em]">
                10+
              </strong>
              <span className="mt-2 text-[0.9rem] text-[#555] max-[700px]:text-[0.75rem]">
                Projects
              </span>
            </article>
            <article className="flex min-h-[clamp(12rem,20vw,17.5rem)] flex-col items-center justify-center bg-[#f4f4f4] text-center max-[700px]:min-h-38">
              <strong className="text-[clamp(1.9rem,3.1vw,3.25rem)] leading-none tracking-[-0.06em]">
                20+
              </strong>
              <span className="mt-2 text-[0.9rem] text-[#555] max-[700px]:text-[0.75rem]">
                Technologies
              </span>
            </article>
            <article className="flex min-h-[clamp(12rem,20vw,17.5rem)] flex-col items-center justify-center bg-[#f4f4f4] text-center max-[700px]:min-h-38">
              <strong className="text-[clamp(1.9rem,3.1vw,3.25rem)] leading-none tracking-[-0.06em]">
                5+
              </strong>
              <span className="mt-2 text-[0.9rem] text-[#555] max-[700px]:text-[0.75rem]">
                Years Experience
              </span>
            </article>
            <article className="flex min-h-[clamp(12rem,20vw,17.5rem)] flex-col items-center justify-center bg-[#f4f4f4] text-center max-[700px]:min-h-38">
              <strong className="text-[clamp(1.9rem,3.1vw,3.25rem)] leading-none tracking-[-0.06em]">
                Always
              </strong>
              <span className="mt-2 text-[0.9rem] text-[#555] max-[700px]:text-[0.75rem]">
                Learning
              </span>
            </article>
          </div>
        </motion.div>
      </section>

      <section
        className="bg-[#2d2d2e] px-[clamp(1.5rem,8.7vw,11rem)] pb-38 pt-38 text-[#f7f6f0] max-[700px]:pb-22 max-[700px]:pt-22"
        id="experience"
      >
        <div className="mx-auto max-w-308">
          <div className="mb-[4.7rem] flex gap-4 text-[0.66rem] font-bold uppercase tracking-[0.11em] text-[#aaa9a2] max-[700px]:mb-14">
            <span className="text-[#829825]">03</span>
            <p className="m-0">Experience</p>
          </div>

          <div className="grid grid-cols-[1.2fr_0.55fr] gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[700px]:gap-8">
            <h2 className="m-0 max-w-182.5 text-[clamp(3rem,5.1vw,5.55rem)] leading-none font-normal tracking-[-0.065em]">
              A few places I&apos;ve made an impact.
            </h2>
            <p className="mt-2 text-[0.93rem] leading-[1.6] text-[#aaa9a2]">
              My work sits at the intersection of engineering, product thinking,
              and careful execution.
            </p>
          </div>

          <div className="mt-[6.8rem] border-t border-[#42423e] max-[700px]:mt-16">
            <article className="grid min-h-22.5 grid-cols-[0.7fr_1.4fr_1fr_auto] items-center gap-4 border-b border-[#42423e] transition-[padding] duration-200 hover:px-4 max-[700px]:grid-cols-[1fr_auto] max-[700px]:py-5">
              <span className="text-[0.78rem] text-[#aaa9a2]">
                2023 — Present
              </span>
              <h3 className="m-0 text-base font-medium max-[700px]:col-start-1 max-[700px]:row-start-2">
                Senior Full-stack Developer
              </h3>
              <p className="m-0 text-[0.78rem] text-[#aaa9a2] max-[700px]:col-start-1 max-[700px]:row-start-3">
                Independent / Remote
              </p>
              <ArrowUpRight
                size={19}
                className="text-[#d8ff6a] max-[700px]:col-start-2 max-[700px]:row-[1/span_3]"
              />
            </article>
            <article className="grid min-h-22.5 grid-cols-[0.7fr_1.4fr_1fr_auto] items-center gap-4 border-b border-[#42423e] transition-[padding] duration-200 hover:px-4 max-[700px]:grid-cols-[1fr_auto] max-[700px]:py-5">
              <span className="text-[0.78rem] text-[#aaa9a2]">2021 — 2023</span>
              <h3 className="m-0 text-base font-medium max-[700px]:col-start-1 max-[700px]:row-start-2">
                Software Engineer
              </h3>
              <p className="m-0 text-[0.78rem] text-[#aaa9a2] max-[700px]:col-start-1 max-[700px]:row-start-3">
                Product-focused team
              </p>
              <ArrowUpRight
                size={19}
                className="text-[#d8ff6a] max-[700px]:col-start-2 max-[700px]:row-[1/span_3]"
              />
            </article>
            <article className="grid min-h-22.5 grid-cols-[0.7fr_1.4fr_1fr_auto] items-center gap-4 border-b border-[#42423e] transition-[padding] duration-200 hover:px-4 max-[700px]:grid-cols-[1fr_auto] max-[700px]:py-5">
              <span className="text-[0.78rem] text-[#aaa9a2]">2019 — 2021</span>
              <h3 className="m-0 text-base font-medium max-[700px]:col-start-1 max-[700px]:row-start-2">
                Frontend Developer
              </h3>
              <p className="m-0 text-[0.78rem] text-[#aaa9a2] max-[700px]:col-start-1 max-[700px]:row-start-3">
                Digital studio
              </p>
              <ArrowUpRight
                size={19}
                className="text-[#d8ff6a] max-[700px]:col-start-2 max-[700px]:row-[1/span_3]"
              />
            </article>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-38 pt-38 max-[700px]:pb-22 max-[700px]:pt-22"
        id="projects"
      >
        <div className="mb-[4.7rem] flex gap-4 text-[0.66rem] font-bold uppercase tracking-[0.11em] max-[700px]:mb-14">
          <span className="text-[#829825]">04</span>
          <p className="m-0 text-[#777b89]">Selected projects</p>
        </div>
        <div className="mb-16 flex items-end justify-between max-[700px]:mb-12">
          <h2 className="m-0 text-[clamp(3rem,5.1vw,5.55rem)] leading-none font-normal tracking-[-0.065em]">
            Selected work.
          </h2>
          <a
            className="inline-flex items-center gap-[0.42rem] text-[#777b89] transition-colors hover:text-[#2d2d2e]"
            href="mailto:hello@ishakumarch.dev"
          >
            Start a project <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[700px]:grid-cols-1 max-[700px]:gap-12">
          {projects.map((project, index) => (
            <motion.article
              className="group"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div
                className={`relative flex h-82.5 justify-between overflow-hidden p-5 max-[700px]:h-67.5 ${
                  project.shade === "dark"
                    ? "bg-[#252724] text-white"
                    : project.shade === "stone"
                      ? "bg-[#686963] text-white"
                      : "bg-[#b7ad99] text-[#2d2d2e]"
                }`}
              >
                <span className="text-[0.68rem]">{project.number}</span>
                <div className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 font-[Georgia,serif] text-[15rem] leading-none italic opacity-90">
                  {project.title.slice(0, 1)}
                </div>
                <ArrowUpRight
                  size={23}
                  className="transition-transform duration-200 group-hover:translate-x-1.25 group-hover:-translate-y-1.25"
                />
              </div>
              <div className="flex justify-between gap-4 pt-5">
                <div>
                  <h3 className="mb-1 mt-0 text-base font-medium">
                    {project.title}
                  </h3>
                  <p className="m-0 text-[0.78rem] text-[#777b89]">
                    {project.type}
                  </p>
                </div>
                <ul className="m-0 flex list-none flex-wrap justify-end gap-[0.35rem] p-0">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="h-fit rounded-[10rem] border border-[#d8d6cf] px-2 py-1 text-[0.65rem] text-[#777b89]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-[2.2rem] pt-38 max-[700px]:pt-22"
        id="connect"
      >
        <div className="mb-[4.7rem] flex gap-4 text-[0.66rem] font-bold uppercase tracking-[0.11em] max-[700px]:mb-14">
          <span className="text-[#829825]">05</span>
          <p className="m-0 text-[#777b89]">Connect</p>
        </div>
        <motion.div
          className="px-0 pb-40 pt-12 text-center max-[700px]:pb-24 max-[700px]:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="m-0 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-[#777b89]">
            Have a project in mind?
          </p>
          <h2 className="my-5 text-[clamp(3.3rem,7vw,7.2rem)] leading-[0.92] font-normal tracking-[-0.075em] max-[700px]:text-[clamp(3rem,14vw,5rem)]">
            Let&apos;s make something
            <br />
            <em className="font-[Georgia,serif] font-normal">good together.</em>
          </h2>
          <a
            className="inline-flex items-center gap-[0.42rem] border-b border-[#2d2d2e] pb-2 text-[clamp(1rem,1.6vw,1.35rem)] font-semibold"
            href="mailto:hello@ishakumarch.dev"
          >
            hello@ishakumarch.dev <ArrowUpRight size={24} />
          </a>
        </motion.div>
        <footer className="flex justify-between gap-5 border-t border-[#d8d6cf] pt-6 text-[0.71rem] text-[#777b89] max-[700px]:flex-wrap">
          <p className="m-0">© 2026 Ishaku March</p>
          <div className="flex gap-5">
            <a
              href="https://github.com/ishakumn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[0.35rem]"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/ishakumn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[0.35rem]"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
          <p className="m-0 max-[700px]:w-full">Designed with intention.</p>
        </footer>
      </section>
    </main>
  );
}

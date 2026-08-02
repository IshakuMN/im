"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  FileDown,
  Mail,
  Link2,
  Menu,
  Send,
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
import Image from "next/image";

import { useState, type ChangeEvent, type FormEvent } from "react";

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
    title: "Arctur",
    type: "artur.fun",
    href: "https://artur.fun",
    image: "/arctur.png",
    frame: "bg-[#e4edd9]",
    tags: ["Next.js", "Motion", "Branding"],
  },
  {
    number: "02",
    title: "Linkor",
    type: "linkor-chi.vercel.app",
    href: "https://linkor-chi.vercel.app/",
    image: "/lincor.png",
    frame: "bg-[#dfe6ef]",
    tags: ["Dashboard", "TypeScript", "UI"],
  },
  {
    number: "03",
    title: "Arts Markets",
    type: "artsmarkets.vercel.app",
    href: "https://artsmarkets.vercel.app/",
    image: "/artsmarket.png",
    frame: "bg-[#eadfd2]",
    tags: ["Commerce", "Design", "Web app"],
  },
  {
    number: "04",
    title: "Histral",
    type: "histral.netlify.app",
    href: "https://histral.netlify.app/",
    image: "/histral.png",
    frame: "bg-[#dce7df]",
    tags: ["Landing page", "Motion", "Branding"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ishakumn",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ishakumn",
  },
  {
    label: "Email",
    href: "mailto:hello@ishakumarch.dev",
  },
];

const experienceEntries = [
  {
    period: "Sep 2025 — Jun 2026",
    role: "Team Lead",
    company: "Sech Groups",
    location: "Russia",
    description:
      "Led the team building Arctur, an event planning and management platform for the Russian market. Drove task planning, architecture decisions, code reviews, and feature delivery while contributing to frontend and backend development with Next.js, React, TypeScript, Node.js, and PostgreSQL.",
  },
  {
    period: "Oct 2023 — Apr 2025",
    role: "Software Engineer",
    company: "Prometheus Technologies",
    location: "Russia",
    description:
      "Contributed to an AI-powered lead generation and email marketing platform. Built responsive interfaces with React, TypeScript, and Next.js, supported backend services in Node.js, and helped improve lead generation effectiveness by about 70% through AI-driven segmentation and campaign workflows.",
  },
  {
    period: "Jun 2022 — Aug 2024",
    role: "Software Engineer",
    company: "Binorix",
    location: "Russia",
    description:
      "Delivered full-stack web applications for clients across beauty, logistics, finance, and automation. Built React and Next.js frontends, developed Node.js APIs, integrated third-party services, and optimized PostgreSQL and MongoDB solutions for products ranging from booking systems to trading tools and broker platforms.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navItems = ["About Me", "Experience", "Projects", "Contact"];
  const navTargets = ["#about", "#experience", "#projects", "#connect"];

  const handleContactChange =
    (field: keyof typeof contactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      subject: `Portfolio message from ${contactForm.name || "a visitor"}`,
      body: [
        `Name: ${contactForm.name || "Not provided"}`,
        `Email: ${contactForm.email || "Not provided"}`,
        "",
        contactForm.message,
      ].join("\n"),
    });

    window.location.href = `mailto:hello@ishakumarch.dev?${params.toString()}`;
  };

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
        className="relative mx-auto min-h-[calc(100vh-8.6rem)] max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-18 pt-20 max-[900px]:pb-24 max-[900px]:pt-18 max-[700px]:min-h-190"
        id="top"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-16">
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
              Specialize in transforming ideas into beautifully crafted
              products.
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

          <motion.div
            className="relative mx-auto flex w-full max-w-136 items-center justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <Image
              src="/nathan.png"
              alt="Portrait of Ishaku March"
              width={1200}
              height={1400}
              priority
              className="h-auto w-full max-w-136 object-cover rotate-6"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </motion.div>
        </div>

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
              Roles where I&apos;ve led, built, and delivered.
            </h2>
            <p className="mt-2 text-[0.93rem] leading-[1.6] text-[#aaa9a2]">
              A snapshot of the teams and products where I&apos;ve contributed
              across frontend, backend, and delivery.
            </p>
          </div>

          <div className="mt-[6.8rem] border-t border-[#42423e] max-[700px]:mt-16">
            {experienceEntries.map((entry) => (
              <article
                className="grid gap-3 border-b border-[#42423e] py-6 transition-[padding] duration-200 hover:px-4 md:grid-cols-[0.7fr_1.35fr_1fr_auto] md:items-start md:gap-4 md:py-7 max-[700px]:py-5"
                key={`${entry.company}-${entry.period}`}
              >
                <span className="text-[0.78rem] text-[#aaa9a2]">
                  {entry.period}
                </span>
                <h3 className="m-0 text-base font-medium">{entry.role}</h3>
                <div className="flex flex-col gap-1 text-[0.78rem] text-[#aaa9a2]">
                  <p className="m-0">{entry.company}</p>
                  <p className="m-0">{entry.location}</p>
                </div>
                <ArrowUpRight
                  size={19}
                  className="text-[#d8ff6a] md:justify-self-end"
                />
                <p className="m-0 text-[0.84rem] leading-[1.6] text-[#c7c6bf] md:col-start-2 md:col-end-4">
                  {entry.description}
                </p>
              </article>
            ))}
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
        <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1 max-[700px]:gap-12">
          {projects.map((project, index) => (
            <motion.article
              className="group flex flex-col"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <a
                className={`relative flex min-h-124 items-center justify-center overflow-hidden rounded-4xl p-4 transition-transform duration-200 group-hover:-translate-y-1 max-[700px]:min-h-90 ${project.frame}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.08),transparent_36%)]" />
                <div className="relative flex h-full w-full items-center justify-center rounded-[1.45rem] border border-white/55 bg-[#fbfaf6]/88 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.1)] backdrop-blur-[2px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} desktop screenshot`}
                    width={1600}
                    height={1200}
                    className="h-auto max-h-96 w-full max-w-[92%] rounded-2xl border border-black/10 object-contain shadow-[0_18px_48px_rgba(0,0,0,0.16)] max-[700px]:max-h-64"
                  />
                </div>
                <span className="absolute left-5 top-5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#2d2d2e]/70">
                  {project.number}
                </span>
                <ArrowUpRight
                  size={23}
                  className="absolute right-5 top-5 transition-transform duration-200 group-hover:translate-x-1.25 group-hover:-translate-y-1.25"
                />
              </a>
              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <h3 className="mb-1 mt-0 text-base font-medium">
                    {project.title}
                  </h3>
                  <p className="m-0 text-[0.78rem] text-[#777b89]">
                    {project.type}
                  </p>
                </div>
                <a
                  className="mt-[0.1rem] inline-flex items-center gap-[0.35rem] text-[0.72rem] uppercase tracking-[0.12em] text-[#777b89] transition-colors hover:text-[#2d2d2e]"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit <Link2 size={12} />
                </a>
              </div>
              <div className="pt-3">
                <ul className="m-0 flex list-none flex-wrap gap-[0.35rem] p-0">
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
        className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8.7vw,11rem)] pb-24 pt-38 max-[700px]:pt-22"
        id="connect"
      >
        <div className="mb-[4.7rem] flex gap-4 text-[0.66rem] font-bold uppercase tracking-[0.11em] max-[700px]:mb-14">
          <span className="text-[#829825]">05</span>
          <p className="m-0 text-[#777b89]">Connect</p>
        </div>
        <motion.div
          className="grid items-start gap-8 border-t border-[#d8d6cf] pt-12 md:grid-cols-[0.92fr_1.08fr] lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-136">
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#777b89]">
              Available for select work
            </p>
            <h2 className="mt-4 text-[clamp(3rem,5.6vw,5.9rem)] leading-[0.95] font-normal tracking-[-0.07em] max-[700px]:text-[clamp(2.8rem,12vw,4.6rem)]">
              Let&apos;s build something clear, useful, and well made.
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.65] text-[#777b89]">
              If you have an idea, product, or collaboration in mind, send a
              short note and I&apos;ll get back with next steps.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  className="flex items-center justify-between rounded-[1.1rem] border border-[#d8d6cf] px-4 py-3 text-[0.82rem] text-[#2d2d2e] transition-colors hover:bg-[#f5f5f5]"
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-[#d8d6cf] bg-[#fbfaf6] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] max-[700px]:p-4">
            <div className="mb-6 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#777b89]">
              <Mail size={14} />
              Send a message
            </div>
            <form className="grid gap-4" onSubmit={handleContactSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-[0.82rem] text-[#4a4a4a]">
                  Name
                  <input
                    className="rounded-2xl border border-[#d8d6cf] bg-white px-4 py-3 text-[0.95rem] text-[#2d2d2e] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#829825]"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={handleContactChange("name")}
                  />
                </label>
                <label className="grid gap-2 text-[0.82rem] text-[#4a4a4a]">
                  Email
                  <input
                    className="rounded-2xl border border-[#d8d6cf] bg-white px-4 py-3 text-[0.95rem] text-[#2d2d2e] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#829825]"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={contactForm.email}
                    onChange={handleContactChange("email")}
                  />
                </label>
              </div>

              <label className="grid gap-2 text-[0.82rem] text-[#4a4a4a]">
                Message
                <textarea
                  className="min-h-44 resize-none rounded-2xl border border-[#d8d6cf] bg-white px-4 py-3 text-[0.95rem] leading-[1.55] text-[#2d2d2e] outline-none transition-colors placeholder:text-[#9b9b9b] focus:border-[#829825]"
                  name="message"
                  placeholder="Tell me what you're building, what you need help with, or how you’d like to collaborate."
                  value={contactForm.message}
                  onChange={handleContactChange("message")}
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="m-0 max-w-[18rem] text-[0.74rem] leading-normal text-[#777b89]">
                  This form opens your email client with the message prefilled.
                </p>
                <button
                  className="inline-flex items-center gap-2 rounded-[0.95rem] border border-[#323232] bg-[#323232] px-5 py-3 text-[0.9rem] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d1d1d]"
                  type="submit"
                >
                  Send message <Send size={15} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

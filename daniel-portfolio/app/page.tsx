import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Database,
  Smartphone,
  TestTube2,
  GitBranch,
  BookOpen,
  ImageIcon,
  FileText,
  Layers
} from "lucide-react";

const profile = {
  name: "Daniel Vega",
  location: "Atlanta, GA Area",
  email: "dvega974@gmail.com",
  github: "https://github.com/dvega974",
  resumeUrl: "/Daniel_Vega_Resume.pdf",
  headline: "Building practical software through projects, coursework, and hands-on technical skills.",
  summary:
    "I am a software development graduate from Georgia Gwinnett College building full-stack web apps, dashboards, automation tools, and database-backed projects! I am open to tech roles where I can apply my skills in software development, QA testing, IT support, databases, and problem-solving."
};

const roleTargets = [
  "Software Development",
  "QA Testing",
  "IT Support",
  "Technical Support",
  "Healthcare Technology",
  "Database-Focused Roles"
];

const projects = [
  {
    title: "Device Manager",
    type: "Personal Project",
    status: "Main Showcase",
    description:
      "A personal device value tracker for organizing electronics, gaming devices, purchase prices, estimated resale values, storage models, editions, and notes.",
    problem:
      "I wanted a better way to track the value of my gaming handhelds and gaming collection instead of keeping everything scattered across notes or memory.",
    solution:
      "I built a dashboard that organizes device information, purchase prices, estimated current values, storage sizes, editions, conditions, and notes all in one place.",
    learned:
      "This project helped me hone my skills in Next.js, React, TypeScript, Tailwind CSS, dashboard design, reusable data structures, and deployment with Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Firebase"],
    highlights: [
      "Tracks device details, conditions, purchase prices, and estimated current values.",
      "Compares original purchase cost against possible resale value.",
      "Uses a clean dashboard layout for quick collection viewing.",
            "Stores data in a firestore database."

    ],
    icon: Database,
    featured: true,
    liveUrl: "https://devicemanager-iota.vercel.app/",
    githubUrl: "https://github.com/DanielS-Moon/DeviceManager",
    screenshots: [
  { src: "/screenshots/device-manager-dashboard.png", label: "Dashboard" },
  { src: "/screenshots/device-manager-details.png", label: "Device Details" },
  { src: "/screenshots/device-manager-values.png", label: "Value Tracking" }
]
  },
  {
    title: "BabyBlooming",
    type: "Academic Project",
    status: "Full-Stack App",
    description:
      "A parenting tracker web and mobile app for managing child profiles, daily logs, and care-related information with secure user-based data storage.",
    problem:
      "Parents and caregivers need a simple way to keep child-related records organized and accessible.",
    solution:
      "The app supports child profiles, daily logs, authentication, real-time database updates, and Android-ready mobile wrapping.",
    learned:
      "This project strengthened my understanding of Firebase Authentication, Firestore, real-time data, React state patterns, and Capacitor mobile setup.",
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Firestore", "Capacitor"],
    highlights: [
      "Integrated Firebase Authentication for account-based access.",
      "Used Firestore for real-time child profile and log data.",
      "Converted the web app into an Android-ready mobile application."
    ],
    icon: Smartphone,
    featured: false,
    liveUrl: "https://parentingapp.vercel.app/",
    githubUrl: "https://github.com/wilhelmmxd/BabyBlooming",
    screenshots: [
      { src: "/screenshots/babyblooming-login.png", label: "Login" },
      { src: "/screenshots/babyblooming-dashboard.png", label: "Dashboard" },
      { src: "/screenshots/babyblooming-logs.png", label: "Daily Logs" }
    ]
  },
  {
    title: "Automated Data Collection & QA Testing",
    type: "Academic Project",
    status: "Testing + Database",
    description:
      "A Java automation project using Selenium, SQLite, JUnit, and XPath to collect website data, validate results, and store records locally.",
    problem:
      "Manual data collection and validation can be repetitive, inconsistent, and difficult to verify over repeated test runs.",
    solution:
      "I used Selenium automation, XPath selectors, JUnit structure, and SQLite storage to collect, validate, and track data consistently.",
    learned:
      "This project helped me practice automated testing, database checks, web element selection, data validation, and Arrange-Act-Assert test structure.",
    tech: ["Java", "Selenium", "SQLite", "JUnit", "XPath"],
    highlights: [
      "Collected listing data including title, price, URL, and retrieval time.",
      "Stored validated results in SQLite for repeatable tracking.",
      "Applied Arrange-Act-Assert testing structure with JUnit."
    ],
    icon: TestTube2,
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    screenshots: [
      { src: "/screenshots/automation-code.png", label: "Test Code" },
      { src: "/screenshots/automation-results.png", label: "Test Results" },
      { src: "/screenshots/automation-database.png", label: "Database" }
    ]
  }
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    title: "Backend / Database",
    skills: ["Firebase", "Firestore", "SQLite", "Data Modeling"]
  },
  {
    title: "Testing / Automation",
    skills: ["Java", "Selenium", "JUnit", "XPath", "QA Testing"]
  },
  {
    title: "Tools / Deployment",
    skills: ["GitHub", "Vercel", "Capacitor", "VS Code"]
  }
];

const coursework = [
  "Software Development",
  "Web Development",
  "Object-Oriented Programming",
  "Database Systems",
  "Software Testing",
  "Data Structures and Algorithms",
  "Cloud Computing",
  "Software Project Management",
  "User Interface Design",
  "Software Quality Assurance",
  "Mobile App Development"
];

const strengths = [
  {
    title: "Project-based learning",
    description: "Built personal and academic apps using modern frontend tools, databases, authentication, and deployment workflows.",
    icon: Code2
  },
  {
    title: "QA and automation practice",
    description: "Created testing projects using Selenium, JUnit, SQLite, XPath, structured validation, and repeatable test logic.",
    icon: TestTube2
  },
  {
    title: "Workplace readiness",
    description: "Clinical work experience strengthened communication, organization, attention to detail, and problem-solving under pressure.",
    icon: Briefcase
  }
];

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-slate-100">
      {children}
    </a>
  );
}

function ContactLink({ href, icon: Icon, children }: { href: string; icon: typeof Mail; children: React.ReactNode }) {
  return (
    <a href={href} className="flex items-center gap-3 text-slate-400 transition hover:text-[#d4af37]">
      <Icon className="h-4 w-4 text-[#d4af37]" />
      <span>{children}</span>
    </a>
  );
}

function ScreenshotGallery({
  title,
  screenshots
}: {
  title: string;
  screenshots: { src: string; label: string }[];
}) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]">
        <img src={screenshots[0].src} alt={`${title} ${screenshots[0].label} screenshot`} className="h-64 w-full object-cover" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {screenshots.map((screenshot) => (
          <div key={screenshot.src} className="overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
            <img src={screenshot.src} alt={`${title} ${screenshot.label} screenshot`} className="h-24 w-full object-cover" />
            <p className="border-t border-white/10 px-3 py-2 text-xs font-medium text-slate-400">
              {screenshot.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;

  return (
    <article
      className={`rounded-2xl border p-6 transition hover:border-[#d4af37]/30 ${
        project.featured ? "border-[#d4af37]/20 bg-[#d4af37]/[0.06]" : "border-white/10 bg-[#07111f]/60"
      }`}
    >
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#d4af37] ring-1 ring-white/10">
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              {project.type}
            </span>
            <span className="rounded-full bg-[#d4af37]/10 px-3 py-1 text-sm font-medium text-[#f6d77a]">
              {project.status}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-100">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="rounded-lg bg-[#102947] px-3 py-1 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <ScreenshotGallery title={project.title} screenshots={project.screenshots} />
        </div>

        <div className="space-y-6">
          <div className="grid gap-4">
            <CaseStudyBlock label="Problem" text={project.problem} />
            <CaseStudyBlock label="Solution" text={project.solution} />
            <CaseStudyBlock label="What I Learned" text={project.learned} />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-4 py-2 font-semibold text-[#07111f] transition hover:bg-[#f6d77a]">
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-100 transition hover:bg-white/10">
              GitHub
              <GitBranch className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#07111f]/55 p-4">
      <p className="text-sm font-semibold text-[#d4af37]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-5">
      <h3 className="font-semibold text-slate-100">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-lg bg-[#102947] px-3 py-1 text-sm text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[300px_1fr]">
        <aside className="border-b border-white/10 bg-[#07111f] p-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/20">
                  <Code2 className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]/80">Portfolio</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight">{profile.name}</h1>
                <p className="mt-4 leading-7 text-slate-400">
                  Software development graduate focused on full-stack apps, dashboards, QA automation, databases, and practical technology projects.
                </p>
              </div>

              <nav className="grid gap-1 text-sm font-medium text-slate-400">
                <SidebarLink href="#work">About</SidebarLink>
                <SidebarLink href="#projects">Projects</SidebarLink>
                <SidebarLink href="#skills">Skills</SidebarLink>
                <SidebarLink href="#education">Education</SidebarLink>
                <SidebarLink href="#contact">Contact</SidebarLink>
              </nav>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 text-[#d4af37]" />
                <span>{profile.location}</span>
              </div>
              <ContactLink href={`mailto:${profile.email}`} icon={Mail}>{profile.email}</ContactLink>
              <ContactLink href={profile.github} icon={GitBranch}>github.com/dvega974</ContactLink>
              <ContactLink href={profile.resumeUrl} icon={FileText}>Resume PDF</ContactLink>
            </div>
          </div>
        </aside>

        <section className="w-full bg-[#0b1f3a]">
          <section className="border-b border-white/10 px-6 py-16 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-6xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-[#f6d77a]">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                Open to Tech Roles: Software Development, QA, IT, Support, and More
              </div>

              <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {profile.headline}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{profile.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-5 py-3 font-semibold text-[#07111f] transition hover:bg-[#f6d77a]">
                  See Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={profile.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-3 font-semibold text-[#f6d77a] transition hover:bg-[#d4af37]/15">
                  Resume
                  <FileText className="h-4 w-4" />
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
                  Contact Me
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section id="work" className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
              <SectionHeader eyebrow="About" title="Software development student with practical project experience." />

              <div className="space-y-8">
                <p className="text-lg leading-8 text-slate-300">
                  I am currently building my technical foundation through coursework, personal projects, and academic applications. My portfolio focuses on full-stack development, QA automation, databases, deployment, and practical problem-solving.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  {strengths.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-5">
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-slate-100">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
              <SectionHeader
                eyebrow="Currently Looking For"
                title="Open to a wide range of entry-level tech roles."
                description="I am especially interested in roles where I can keep growing through hands-on technical work, troubleshooting, testing, support, and application development."
              />

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {roleTargets.map((role) => (
                  <div key={role} className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-4">
                    <p className="font-medium text-slate-200">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="mb-10 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <SectionHeader
                eyebrow="Projects"
                title="Featured Work"
                description="Personal and academic projects showing full-stack development, mobile app wrapping, data tracking, and automated testing."
              />
            </div>

            <div className="grid gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr]">
              <SectionHeader eyebrow="Skills" title="Technical Toolkit" />

              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} title={group.title} skills={group.skills} />
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
              <SectionHeader eyebrow="Education" title="Georgia Gwinnett College" />

              <div className="grid gap-5">
                <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">Bachelor’s in Software Development</h3>
                      <p className="mt-2 text-slate-400">May 2026 Graduation</p>
                      <p className="mt-4 leading-7 text-slate-300">
                        Academic experience includes web apps, automation projects, database-backed tools, testing, object-oriented programming, and mobile-ready applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-semibold text-slate-100">Relevant Coursework</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span key={course} className="rounded-lg bg-[#102947] px-3 py-1 text-sm text-slate-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#d4af37] ring-1 ring-white/10">
                  <Layers className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Resume Focus</p>
                <h2 className="mt-3 text-2xl font-bold">Projects, skills, and education first.</h2>
                <p className="mt-4 leading-7 text-slate-400">
                  This portfolio is built to highlight technical projects, coursework, tools, and job-ready skills before work history.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#d4af37] ring-1 ring-white/10">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Additional Work Experience</p>
                <h2 className="mt-3 text-2xl font-bold">Clinical workplace background.</h2>
                <p className="mt-4 leading-7 text-slate-400">
                  Clinical experience strengthened communication, organization, attention to detail, problem-solving, and the ability to work in fast-paced team environments.
                </p>
              </div>
            </div>
          </section>

          <footer id="contact" className="px-6 py-14 md:px-10 lg:px-14 xl:px-20">
            <div className="rounded-2xl border border-white/10 bg-[#07111f]/75 p-6 md:p-8">
              <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Contact</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                    Let’s build something useful.
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                    Open to tech roles including software development, QA testing, IT support, technical support, and healthcare technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-5 py-3 font-semibold text-[#07111f] transition hover:bg-[#f6d77a]">
                    Email Me
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href={profile.github} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
                    GitHub
                    <GitBranch className="h-4 w-4" />
                  </a>
                  <a href={profile.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
                    Resume
                    <FileText className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}

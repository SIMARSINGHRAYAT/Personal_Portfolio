import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import {
  achievementImages,
  achievementTimeline,
  experiences,
  interests,
  patentsAndInnovation,
  patentImages,
  profile,
  profileLinks,
  products,
  projects,
  publications,
  youtubeContent,
} from "./data/portfolio";

type GalleryImage = { src: string; title: string; caption: string };

type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const sectionTitleClass = "text-2xl font-semibold tracking-tight text-white sm:text-3xl";
const panelClass = "rounded-xl border border-cyan-400/25 bg-zinc-950/75 backdrop-blur-sm";

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-8 space-y-3">
        <h2 className={sectionTitleClass}>{title}</h2>
        <p className="max-w-3xl text-sm text-zinc-200 sm:text-base">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function ImageItem({ image, onView }: { image: GalleryImage; onView: (image: GalleryImage) => void }) {
  const [missing, setMissing] = useState(false);

  return (
    <button
      type="button"
      onClick={() => !missing && onView(image)}
      className={`${panelClass} group relative overflow-hidden text-left transition hover:border-cyan-300/50`}
      aria-label={`Open ${image.title} in full view`}
    >
      {!missing ? (
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
          onError={() => setMissing(true)}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-zinc-900 p-4 text-center text-sm text-zinc-400">
          {image.caption}
        </div>
      )}
      <div className="border-t border-cyan-400/25 px-4 py-3 text-sm text-zinc-200">{image.title}</div>
    </button>
  );
}

export default function App() {
  const [activeDomain, setActiveDomain] = useState("All Domains");
  const [activeType, setActiveType] = useState("All Types");
  const [activeYear, setActiveYear] = useState("All Years");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [formErrors, setFormErrors] = useState<ContactErrors>({});
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Simar Singh Rayat | Research and Engineering Portfolio";
  }, []);

  const domains = useMemo(() => ["All Domains", ...new Set(publications.map((item) => item.domain))], []);
  const types = useMemo(() => ["All Types", ...new Set(publications.map((item) => item.type))], []);
  const years = useMemo(
    () => ["All Years", ...new Set(publications.map((item) => String(item.year ?? "Unspecified")))],
    []
  );

  const filteredPublications = useMemo(
    () =>
      publications.filter((item) => {
        const matchesDomain = activeDomain === "All Domains" || item.domain === activeDomain;
        const matchesType = activeType === "All Types" || item.type === activeType;
        const matchesYear =
          activeYear === "All Years" || String(item.year ?? "Unspecified") === activeYear;
        return matchesDomain && matchesType && matchesYear;
      }),
    [activeDomain, activeType, activeYear]
  );

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Simar Singh Rayat",
      jobTitle: "Researcher and Software Developer",
      alumniOf: "Graphic Era Hill University",
      url: "https://github.com/SIMARSINGHRAYAT",
      sameAs: profileLinks.map((item) => item.href),
    }),
    []
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: ContactErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      nextErrors.email = "Please provide a valid email address.";
    }

    if (formState.message.trim().length < 20) {
      nextErrors.message = "Please add at least 20 characters in your message.";
    }

    setFormErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.16),transparent_40%),radial-gradient(circle_at_55%_90%,rgba(12,74,110,0.34),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] [background-size:58px_58px]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-black">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-cyan-400/20 bg-black/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
            SIMAR SINGH RAYAT
          </a>
          <div className="hidden items-center gap-4 text-xs text-zinc-300 md:flex">
            <a href="#publications" className="hover:text-cyan-300">
              Publications
            </a>
            <a href="#projects" className="hover:text-cyan-300">
              Projects
            </a>
            <a href="#patents" className="hover:text-cyan-300">
              Patents
            </a>
            <a href="#achievements" className="hover:text-cyan-300">
              Awards
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 font-medium text-cyan-200 hover:bg-cyan-500/20"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl items-center px-5 py-20 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl space-y-7"
          >
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">{profile.name}</h1>
            <p className="max-w-3xl text-base text-cyan-200/90 sm:text-lg">{profile.role}</p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap gap-2 text-xs text-zinc-200"
            >
              {profile.descriptors.map((descriptor) => (
                <span key={descriptor} className="rounded-full border border-cyan-500/35 px-3 py-1">
                  {descriptor}
                </span>
              ))}
            </motion.div>

            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">{profile.summary}</p>

            <div className="flex flex-wrap gap-3">
              {profile.ctaLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute right-8 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-cyan-500/30 bg-cyan-500/10 blur-3xl lg:block"
          />
        </section>

        <Section
          id="research"
          title="Research Focus"
          subtitle="Current research direction in intelligent systems, trustworthy AI, cybersecurity analytics, and practical software architecture."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Machine learning systems for security and anomaly detection",
              "Intelligent software tooling for research, citation, and patent workflows",
              "Applied AI for embedded, cloud, and real-time decision environments",
            ].map((item) => (
              <div key={item} className={`${panelClass} p-5 text-sm text-zinc-200`}>
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="publications"
          title="Research and Publications"
          subtitle="Verified publication titles are mapped from provided academic profile sources. Use filters to navigate by domain, type, and year."
        >
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <select
              aria-label="Filter publications by domain"
              value={activeDomain}
              onChange={(event) => setActiveDomain(event.target.value)}
              className="rounded-lg border border-cyan-500/35 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 outline-none"
            >
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter publications by type"
              value={activeType}
              onChange={(event) => setActiveType(event.target.value)}
              className="rounded-lg border border-cyan-500/35 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 outline-none"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter publications by year"
              value={activeYear}
              onChange={(event) => setActiveYear(event.target.value)}
              className="rounded-lg border border-cyan-500/35 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 outline-none"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((paper) => (
              <article key={paper.title} className={`${panelClass} p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.04)]`}>
                <h3 className="text-lg font-medium text-cyan-100">{paper.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span>{paper.venue}</span>
                  <span>•</span>
                  <span>{paper.type}</span>
                  <span>•</span>
                  <span>{paper.domain}</span>
                  <span>•</span>
                  <span>{paper.year ?? "Unspecified"}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-300">{paper.summary}</p>
                <p className="mt-2 text-xs text-zinc-400">
                  Indexing: {paper.indexing} | Status: {paper.status}
                </p>
                <p className="mt-1 text-xs text-zinc-400">Co-authors: {paper.authors}</p>
                <p className="mt-1 text-xs text-zinc-400">Keywords: {paper.keywords.join(", ")}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {paper.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Professional and research experience presented as a contribution-first timeline."
        >
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div key={item.title} className="relative border-l border-cyan-500/35 pl-5">
                <div className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-cyan-300" />
                <h3 className="text-lg font-medium text-cyan-100">
                  {item.title} - {item.org}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{item.period}</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {item.highlights.map((point) => (
                    <li key={`${index}-${point}`}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Featured technical projects with architecture intent, implementation method, and outcomes."
        >
          <div className="grid gap-4 md:grid-cols-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`${panelClass} p-5 ${project.emphasis === "featured" ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <h3 className="text-lg font-semibold text-cyan-100">{project.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{project.objective}</p>
                <p className="mt-2 text-sm text-zinc-300">{project.methodology}</p>
                <p className="mt-2 text-sm text-zinc-400">Outcome: {project.outcomes}</p>
                <p className="mt-2 text-sm text-zinc-400">Challenge solved: {project.challenge}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                  {project.stack.map((tool) => (
                    <span key={tool} className="rounded-full border border-cyan-500/25 px-2 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-xs">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="products"
          title="Products and Software"
          subtitle="Public deployment footprint across software distribution platforms and extension ecosystems."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className={`${panelClass} p-5`}>
                <h3 className="text-base font-semibold text-cyan-100">{product.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{product.platform}</p>
                <p className="mt-2 text-sm text-zinc-300">{product.description}</p>
                <p className="mt-2 text-xs text-zinc-400">Release: {product.release}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm text-cyan-300 underline-offset-4 hover:underline"
                >
                  View platform
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="patents"
          title="Patents and Innovations"
          subtitle="Dedicated space for granted patent visuals, innovation documentation, and engineering evidence."
        >
          <div className="mb-5 space-y-2">
            {patentsAndInnovation.map((item) => (
              <div key={item.title} className={`${panelClass} p-5`}>
                <h3 className="text-base font-semibold text-cyan-100">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
                <p className="mt-2 text-xs text-zinc-400">Status: {item.status}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {patentImages.map((image) => (
              <ImageItem key={image.src} image={image} onView={setSelectedImage} />
            ))}
          </div>
        </Section>

        <Section
          id="achievements"
          title="Achievements and Awards"
          subtitle="Structured milestones and image-based evidence for awards, recognitions, and technical accomplishments."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 text-sm text-zinc-300">
              {achievementTimeline.map((item) => (
                <div key={item} className={`${panelClass} p-3`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {achievementImages.map((image) => (
                <ImageItem key={image.src} image={image} onView={setSelectedImage} />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="interests"
          title="Research Interests"
          subtitle="Current technical domains and long-term areas of exploration."
        >
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {interests.map((item) => (
              <div key={item} className={`${panelClass} px-3 py-2 text-sm text-zinc-200`}>
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="profiles"
          title="Academic Profiles and Professional Presence"
          subtitle="Centralized links to publications, software, academic identity, and professional channels."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {profileLinks.map((item) => (
              <article key={item.name} className={`${panelClass} p-4`}>
                <h3 className="text-base font-medium text-cyan-100">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-cyan-300 underline-offset-4 hover:underline"
                >
                  Open profile
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="content"
          title="Technical Content"
          subtitle="Educational and communication-oriented content through YouTube and technical demos."
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className={`${panelClass} p-5`}>
              <h3 className="text-lg font-medium text-cyan-100">YouTube Channel</h3>
              <p className="mt-2 text-sm text-zinc-300">{youtubeContent.join(". ")}.</p>
              <a
                href="https://www.youtube.com/@KILZSNIPPET"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-cyan-300 underline-offset-4 hover:underline"
              >
                Visit channel
              </a>
            </div>
            <div className={`${panelClass} p-5 text-sm text-zinc-300`}>
              Featured categories:
              <ul className="mt-3 space-y-2 text-zinc-300">
                <li>Project demonstrations</li>
                <li>Research discussions</li>
                <li>Software walkthroughs</li>
                <li>Technical explainers</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Available for research collaboration, internships, publications, conferences, and software development opportunities."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-zinc-300">
              <a href="mailto:simarsinghrayat@gmail.com" className="block text-cyan-300 hover:underline">
                simarsinghrayat@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/simarsinghrayat" target="_blank" rel="noreferrer" className="block hover:text-cyan-300">
                LinkedIn
              </a>
              <a href="https://github.com/SIMARSINGHRAYAT" target="_blank" rel="noreferrer" className="block hover:text-cyan-300">
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-cyan-300"
              >
                Google Scholar
              </a>
              <a href="https://orcid.org/0009-0006-7187-1198" target="_blank" rel="noreferrer" className="block hover:text-cyan-300">
                ORCID
              </a>
              <a
                href="https://www.researchgate.net/profile/Simar-Singh-Rayat?ev=hdr_xprf"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-cyan-300"
              >
                ResearchGate
              </a>
              <a
                href="https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
              >
                Download Resume
              </a>
            </div>

            <form onSubmit={handleSubmit} noValidate className={`${panelClass} p-5`}>
              <label className="mb-1 block text-sm text-zinc-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-lg border border-cyan-500/30 bg-black px-3 py-2 text-sm outline-none"
              />
              {formErrors.name ? <p className="mt-1 text-xs text-red-300">{formErrors.name}</p> : null}

              <label className="mb-1 mt-4 block text-sm text-zinc-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-lg border border-cyan-500/30 bg-black px-3 py-2 text-sm outline-none"
              />
              {formErrors.email ? <p className="mt-1 text-xs text-red-300">{formErrors.email}</p> : null}

              <label className="mb-1 mt-4 block text-sm text-zinc-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-lg border border-cyan-500/30 bg-black px-3 py-2 text-sm outline-none"
              />
              {formErrors.message ? <p className="mt-1 text-xs text-red-300">{formErrors.message}</p> : null}

              <button
                type="submit"
                className="mt-4 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
              >
                Send message
              </button>
              {formSubmitted ? (
                <p className="mt-3 text-xs text-emerald-300">
                  Thank you. Your message is validated and ready to be connected with your backend email service.
                </p>
              ) : null}
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-cyan-500/20 py-8 text-center text-xs text-zinc-500">
        Built for academic and technical portfolio use. Data is organized for easy maintenance and future updates.
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] max-w-5xl overflow-hidden rounded-lg border border-cyan-400/30 bg-zinc-950"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[80vh] w-full object-contain" />
              <div className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300">
                <span>{selectedImage.title}</span>
                <button
                  type="button"
                  className="rounded border border-cyan-500/35 px-3 py-1 text-xs text-cyan-200"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

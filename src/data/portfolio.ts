export type Publication = {
  title: string;
  venue: string;
  year?: number;
  type: string;
  domain: string;
  indexing: string;
  status: string;
  doi?: string;
  authors: string;
  keywords: string[];
  summary: string;
  links: { label: string; href: string }[];
};

export const profile = {
  name: "Simar Singh Rayat",
  role: "B.Tech Computer Science and Engineering Student at Graphic Era Hill University",
  summary:
    "Research-driven software developer focused on machine learning, artificial intelligence, cybersecurity, software engineering, intelligent systems, cloud technologies, and embedded computing. Interested in building practical systems that translate research into reliable products.",
  descriptors: [
    "Computer Science Engineering Student",
    "Researcher",
    "AI Enthusiast",
    "Cybersecurity Researcher",
    "Software Developer",
    "Technology Innovator",
  ],
  ctaLinks: [
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view",
    },
    { label: "Contact", href: "#contact" },
    { label: "GitHub", href: "https://github.com/SIMARSINGHRAYAT" },
  ],
};

export const publications: Publication[] = [
  {
    title:
      "A Physics-Informed Deep Learning and Probabilistic Inference Framework for Real-Time Single-Station Earthquake Detection and Magnitude Estimation",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "AI + Geoscience",
    indexing: "Google Scholar / Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Physics-Informed AI", "Deep Learning", "Earthquake Detection"],
    summary:
      "Combines physics-informed deep learning with probabilistic inference for real-time seismic event detection and magnitude estimation from single-station data.",
    links: [
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en",
      },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Simar-Singh-Rayat?ev=hdr_xprf",
      },
    ],
  },
  {
    title: "Essence of Unsupervised Learning in Early Cybersecurity Attacks Detection",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "Cybersecurity",
    indexing: "Google Scholar / IEEE / Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Unsupervised Learning", "Anomaly Detection", "Security Analytics"],
    summary:
      "Explores unsupervised machine learning pipelines for early-stage attack pattern detection and threat intelligence support.",
    links: [
      {
        label: "IEEE Author Profile",
        href: "https://ieeexplore.ieee.org/author/714243000636525",
      },
      {
        label: "Scopus",
        href: "https://www.scopus.com/authid/detail.uri?authorId=60132297000",
      },
    ],
  },
  {
    title: "Essence of Deep Learning Techniques in Evolving Agriculture Technology Society",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "AI for Agriculture",
    indexing: "Google Scholar / Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Deep Learning", "Agritech", "Precision Systems"],
    summary:
      "Discusses practical deep learning strategies for modern agricultural optimization, forecasting, and automation.",
    links: [
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en",
      },
    ],
  },
  {
    title:
      "Prinzo: An Automated Printing Infrastructure Built on QR Code Technology and Real-Time Privacy",
    venue: "Academic Profile Listing",
    type: "Applied Research",
    domain: "Software Systems",
    indexing: "Google Scholar / Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["QR Systems", "Automation", "Privacy Engineering"],
    summary:
      "Presents a QR-code-enabled printing workflow focused on fast document transfer, role-based control, and privacy-preserving logic.",
    links: [
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Simar-Singh-Rayat?ev=hdr_xprf",
      },
    ],
  },
  {
    title:
      "An IoT-Enabled Framework with Real-Time Logic Gate Validation and Equipped Large Language Model",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "IoT + Embedded AI",
    indexing: "Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["IoT", "Logic Validation", "LLM Integration"],
    summary:
      "Proposes an IoT validation framework for logic operations integrated with language-model-assisted diagnostics and interpretation.",
    links: [
      {
        label: "ORCID",
        href: "https://orcid.org/0009-0006-7187-1198",
      },
    ],
  },
  {
    title:
      "A Holistic AI-Driven Predictive Maintenance Framework for Power Converters Equipped with Fault Diagnosis and System Reliability",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "Predictive Intelligence",
    indexing: "Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Predictive Maintenance", "Fault Diagnosis", "Reliability"],
    summary:
      "Details an AI-first predictive maintenance architecture for converter reliability with continuous fault analysis.",
    links: [
      {
        label: "Scopus",
        href: "https://www.scopus.com/authid/detail.uri?authorId=60132297000",
      },
    ],
  },
  {
    title:
      "A Novel Approach for Adaptive Spatial Suitability Index with Hybrid ML-DL for Renewable Energy Site Selection",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "Sustainable Systems",
    indexing: "Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Hybrid ML-DL", "Spatial Indexing", "Renewable Energy"],
    summary:
      "Introduces a hybrid ML and DL framework to improve adaptive site suitability ranking for renewable deployments.",
    links: [
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Simar-Singh-Rayat?ev=hdr_xprf",
      },
    ],
  },
  {
    title:
      "A Novel Multi-Layer Framework for Human and AI-Voice Detection Using Machine Learning and Network Architecture",
    venue: "Academic Profile Listing",
    type: "Research Paper",
    domain: "AI + Audio Security",
    indexing: "IEEE / Research Profiles",
    status: "Listed in author profiles",
    authors: "Simar Singh Rayat et al.",
    keywords: ["Voice Detection", "AI Speech", "Network Models"],
    summary:
      "Builds a layered machine learning architecture for identifying synthetic speech and human voice patterns.",
    links: [
      {
        label: "IEEE Author Profile",
        href: "https://ieeexplore.ieee.org/author/714243000636525",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Associate Member and Core Contributor",
    org: "Sigma Xi",
    period: "Research and Technical Contribution",
    highlights: [
      "Contributed to retrieval-augmented generation workflows for prior-art and citation analysis.",
      "Supported AI-generated speech detection research with multi-layer modeling and validation.",
      "Participated in collaborative technical reviews and publication-focused discussions.",
    ],
  },
  {
    title: "Research Head Advisor and Lead Innovator",
    org: "IEEE Technical Activities",
    period: "Technical Leadership and Innovation",
    highlights: [
      "Led extension-based secure file transfer prototypes and malicious QR-code detection concepts.",
      "Improved deployment and data handling pipelines with Redis tuning and Docker optimizations.",
      "Guided citation intelligence and collaborative research initiatives for multidisciplinary topics.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered GitHub Project Summarizer",
    emphasis: "featured",
    objective:
      "Transform source repositories into clear, context-aware technical summaries for faster review and collaboration.",
    stack: ["RAG", "LLM", "AST Parsing", "FastAPI", "Prompt Engineering"],
    methodology:
      "Uses code parsing, semantic chunking, retrieval pipelines, and LLM reasoning to create architecture-level summaries.",
    outcomes:
      "Improved code understanding workflow for multi-file repositories and reduced manual onboarding time.",
    challenge:
      "Solved context loss in long repositories using chunk orchestration and retrieval ranking.",
    links: [
      { label: "GitHub Profile", href: "https://github.com/SIMARSINGHRAYAT" },
    ],
  },
  {
    title: "AI-Powered Patent Parser",
    emphasis: "featured",
    objective:
      "Automate patent intelligence workflows for prior-art identification, novelty checks, and structured analysis.",
    stack: ["Machine Learning", "NLI", "PostgreSQL", "FastAPI", "Automation"],
    methodology:
      "Parses patent content, extracts claims and entities, and performs similarity and inference checks for novelty insights.",
    outcomes:
      "Enabled faster technical screening and better structuring of invention narratives.",
    challenge:
      "Handled complex legal and technical language by combining retrieval and inference constraints.",
    links: [
      { label: "GitHub Profile", href: "https://github.com/SIMARSINGHRAYAT" },
    ],
  },
];

export const products = [
  {
    title: "Microsoft Store Publisher Portfolio",
    platform: "Microsoft Store",
    release: "Published Software",
    description:
      "Public software distribution under KILZSNIPPET with practical utility-focused engineering.",
    link: "https://apps.microsoft.com/search/publisher?name=KILZSNIPPET",
  },
  {
    title: "Microsoft Edge Add-ons",
    platform: "Microsoft Edge",
    release: "Browser Extensions",
    description:
      "Extension development with attention to productivity, security, and maintainable architecture.",
    link: "https://microsoftedge.microsoft.com/addons/search?developer=KILZSNIPPET",
  },
  {
    title: "Chrome Web Store (Planned / Expanding)",
    platform: "Google Chrome",
    release: "Future Ready",
    description:
      "Dedicated slot to feature verified Chrome extensions and update history as new releases are published.",
    link: "https://github.com/SIMARSINGHRAYAT",
  },
];

export const patentsAndInnovation = [
  {
    title: "Patent and Innovation Portfolio",
    status: "Includes granted and active innovation work",
    summary:
      "Use the patents image folder to add granted patent visuals and innovation diagrams for documented portfolio evidence.",
  },
];

export const achievementTimeline = [
  "Peer-reviewed and profile-listed research publications",
  "Journal and technical manuscript activities",
  "Patent and innovation documentation",
  "Browser extension and software releases",
  "Conference and technical research participation",
  "Young Scientist Award and academic recognition",
  "Technical leadership across research and innovation communities",
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Cybersecurity",
  "Intelligent Systems",
  "Software Engineering",
  "Cloud Computing",
  "Internet of Things",
  "Embedded Systems",
  "Quantum Computing",
  "Intelligent Automation",
  "Emerging Technologies",
];

export const profileLinks = [
  {
    name: "Google Scholar",
    description: "Publication visibility and citation tracking",
    href: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en",
  },
  {
    name: "ORCID",
    description: "Research identity and authorship record",
    href: "https://orcid.org/0009-0006-7187-1198",
  },
  {
    name: "Scopus Author Profile",
    description: "Indexed publications and author profile",
    href: "https://www.scopus.com/authid/detail.uri?authorId=60132297000",
  },
  {
    name: "IEEE Author Profile",
    description: "IEEE-indexed research and technical work",
    href: "https://ieeexplore.ieee.org/author/714243000636525",
  },
  {
    name: "ResearchGate",
    description: "Research communication and publication sharing",
    href: "https://www.researchgate.net/profile/Simar-Singh-Rayat?ev=hdr_xprf",
  },
  {
    name: "GitHub",
    description: "Code repositories and software projects",
    href: "https://github.com/SIMARSINGHRAYAT",
  },
  {
    name: "LinkedIn",
    description: "Professional profile and network",
    href: "https://www.linkedin.com/in/simarsinghrayat",
  },
  {
    name: "Microsoft Store Publisher",
    description: "Published software products",
    href: "https://apps.microsoft.com/search/publisher?name=KILZSNIPPET",
  },
  {
    name: "Microsoft Edge Add-ons",
    description: "Published browser extensions",
    href: "https://microsoftedge.microsoft.com/addons/search?developer=KILZSNIPPET",
  },
  {
    name: "YouTube",
    description: "Technical content, demos, and walkthroughs",
    href: "https://www.youtube.com/@KILZSNIPPET",
  },
  {
    name: "Resume",
    description: "Download and review detailed profile",
    href: "https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view",
  },
];

export const youtubeContent = [
  "Project demonstrations and implementation walkthroughs",
  "Research discussion videos and technical explainers",
  "Software and extension demos",
  "Learning-focused technology communication",
];

export const patentImages = [
  {
    src: "/images/patents/patent-1.png",
    title: "Patent Document 1",
    caption: "Add your granted patent image as patent-1.png",
  },
  {
    src: "/images/patents/patent-2.png",
    title: "Patent Document 2",
    caption: "Add your granted patent image as patent-2.png",
  },
];

export const achievementImages = [
  {
    src: "/images/achievements/achievement-1.png",
    title: "Achievement 1",
    caption: "Add your image as achievement-1.png",
  },
  {
    src: "/images/achievements/achievement-2.png",
    title: "Achievement 2",
    caption: "Add your image as achievement-2.png",
  },
  {
    src: "/images/achievements/achievement-3.png",
    title: "Achievement 3",
    caption: "Add your image as achievement-3.png",
  },
];
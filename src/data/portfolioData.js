import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const portfolioData = {
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/harshpatel03",
      icon: faLinkedin,
    },
    {
      label: "GitHub",
      url: "https://github.com/harsh7z",
      icon: faGithub,
    },
    {
      label: "Email Me",
      url: "mailto:harshapatel112003@gmail.com",
      icon: faEnvelope,
    },
  ],

  education: [
    {
      label: "University of Alabama at Birmingham",
      img: "imgs/university/uab.png",
      sublabel: "Master's in Computer Science",
      date: "August, 2024 - December, 2025",
      description:
        "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Artificial Intelligence, Computer Security, Cloud Computing, Cloud Security, Network Security, Modern Cryptography",
    },
    {
      label: "Uka Tarsadia University",
      img: "imgs/university/utu.png",
      sublabel: "B.Tech in Computer Engineering",
      date: "June, 2020 - May, 2024",
      description:
        "Relevant Coursework: Machine Intelligence, Information Security, Full Stack Development, Software Engineering, Web Designing",
    },
  ],

 skills: {
  "Machine Learning & AI": [
    "Deep Learning (CNNs, Transformers, GANs, LLMs)",
    "NLP",
    "Computer Vision",
    "Reinforcement Learning",
    "Retrieval-Augmented Generation (RAG)",
    "Embeddings & Vector Search"
  ],
  "ML Platforms & MLOps": [
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "MLFlow",
    "Weights & Biases",
    "Docker",
    "Kubernetes",
    "CI/CD Pipelines"
  ],
  "LLM Systems & Orchestration": [
    "Prompt Engineering",
    "Tool/Function Calling",
    "Agentic Workflows",
    "Vector Database (FAISS, Pinecone, Pgvector)"
  ],
  "Software Engineering": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Bash",
    "REST & GraphQL APIs",
    "Database (SQL, MongoDB)"
  ],
  "Frontend & Product Engineering": [
    "React.js",
    "Next.js",
    "GSAP",
    "Node.js"
  ],
  "Cloud Services": [
    "AWS Lambda",
    "AWS Elastic Beanstalk",
    "AWS CLI",
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "AWS IAM"
  ]
}
,

  certificates: [
    {
      label: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      img: "/imgs/certificates/aws.png",
      date: "October, 2023",
    },
  ],

  work: [
    {
      label: "Tanvi Wealth PVT LTD, India",
      img: "imgs/work/tanvi_wealth.jpeg",
      sublabel: "Full Stack Developer",
      date: "Dec, 2023 - May, 2024",
      description:
        "From December 2023 to May 2024, I worked as a Full Stack Developer at Tanvi Wealth Pvt. Ltd., India, where I engineered and deployed cloud-integrated financial software solutions that enhanced system performance, scalability, and security. My work focused on designing and implementing secure transaction mechanisms using technologies such as Node.js and MongoDB, ensuring seamless and reliable financial operations for investors. I also played a key role in optimizing the user onboarding process by refining backend workflows and streamlining UI/UX components, which resulted in a 30% reduction in onboarding time. Collaborating closely with product managers and security engineers, I ensured that all systems complied with financial data protection standards while delivering a smooth and trustworthy user experience.",
    },
    {
      label: "Izonnet Web Solutions, India",
      img: "imgs/work/izonnet.png",
      sublabel: "Full Stack Developer Intern",
      date: "May, 2023 - Jun, 2023",
      description:
        "Earlier, from May 2023 to June 2023, I interned as a Full Stack Developer at Izonnet Web Solutions Pvt. Ltd., India, where I led the development of an admin panel for an employee attendance management platform. I integrated the Google Maps API to enable real-time geospatial insights and live location tracking for employees. Using React.js, I designed and implemented a responsive, mobile-first interface that provided a consistent and intuitive user experience across all devices. This internship gave me practical experience in full-stack development and strengthened my ability to deliver end-to-end solutions that improve usability, automation, and data accuracy.",
    },
  ],

  projects: [
      {
      label: "Enterprise Knowledge Assistant MCP Server",
      img: "imgs/projects/mcp_server.png",
      skills: [
        "LLM orchestration,",
        "RAG generation",
        "MCP server",
      ],
      description: "A Python-based MCP server built with FastMCP that connects internal knowledge bases to Claude or other MCP-capable LLMs, allowing employees and tools to search, retrieve, and query internal documents in a structured, auditable way.",
            github: "https://github.com/harsh7z/enterprise-knowledge-mcp.git",
      link: ""
    },
    {
      label: "Face ID System using Siamese Network",
      img: "imgs/projects/faceID.png",
      skills: [
        "Computer Vision",
        "PyTorch",
        "OpenCV",
      ],
      description: "This is a Python-based Face ID system that can register multiple users, and later verify a person using facial similarity. It uses a Siamese Neural Network implemented in PyTorch and OpenCV for real-time webcam face capture.",
            github: "https://github.com/harsh7z/face-recognition-system",
      link: ""
    },
    {
      label: "Open Field Assay Rodent Tracking",
      img: "imgs/projects/oft_tracker.png",
      skills: [
        "Computer Vision",
        "YOLOv8",
        "OpenCV",
        "Python"
      ],
      description: "Real-time rodent tracking for Open Field Assay using YOLOv8. Faster and lighter than DeepLabCut, and a free alternative to EthoVision. Supports arena calibration, trajectory mapping, speed metrics, center-zone analysis, and heatmap/annotated video outputs.",
      github: "https://github.com/harsh7z/oft-tracker",
      link: ""
    },
    {
      label: "GPT Token Visualizer",
      img: "imgs/projects/gptTokenizer.png",
      skills: ["Next.js", "Python", "NLP","Tokenization"],
      description: "A small project that visualizes GPT tokenization and token usage across prompts and responses. The repository contains a Next.js frontend and a lightweight Python backend used to analyze and serve tokenization information.",
      github: "https://github.com/harsh7z/gpt-token-visualizar",
      link: ""
    },
    {
      label: "Wecare",
      img: "imgs/projects/wecare.png",
      skills: [
        "React.js",
        "Express.js",
        "Node.js",
        "Mongodb"],
      description: "We Care is a personal project built using the MERN stack to help pet owners easily find and connect with reliable pet sitters. It features user-friendly search and booking options, making sure pets get the care they deserve while their owners are away.",
      github: "https://github.com/harsh7z/wecare-full-site",
      link: "https://harsh7z.github.io/wecare/"
    },
    {
      label: "Hazypix",
      img: "imgs/projects/hazypix.png",
      skills: ["HTML", "JavaScript", "CSS"],
      description: "A sleek and responsive NFT landing page built with HTML, CSS, and JavaScript. Features smooth CSS-only animations and a modern layout—perfect for showcasing digital collectibles and Web3 projects.",
            github: "https://github.com/harsh7z/harsh-portfolio",
      link: "https://harsh7z.github.io/hazypix/"
    },
  ],
};

export default portfolioData;

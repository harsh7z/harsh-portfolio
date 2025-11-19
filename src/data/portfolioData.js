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
      date: "August, 2024 - December, 2026",
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
    "AI/ML & Data Science": [
      "Deep Learning (CNNs, RNNs, GANs, LLMs)",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Reinforcement Learning",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face Transformers",
      "scikit-learn",
      "XGBoost",
      "OpenCV"
    ],
    "Generative AI": [
      "Large Language Models",
      "Prompt Engineering & Optimization",
      "LangChain & LlamaIndex",
      "Fine-tuning LLMs (LoRA, RLHF)",
      "Vector Databases (Pinecone, FAISS, Weaviate)",
      "RAG (Retrieval-Augmented Generation)",
      "Synthetic Data Generation"
    ],
    // "Robotics & Systems": [
    //   "ROS (Robot Operating System)",
    //   "SLAM (Simultaneous Localization and Mapping)",
    //   "Path Planning Algorithms",
    //   "Edge AI Deployment",
    //   "Real-time Systems Optimization"
    // ],
    "MLOps & Infrastructure": [
      "MLOps (MLflow, Weights & Biases)",
      "Docker",
      "Kubernetes",
      "Linux",
      "CI/CD Pipelines",
      "AWS",
      "GCP",
      "Azure"
    ],
    "Programming & Software Engineering": [
      "Python",
      "C++",
      "Rust",
      "Go",
      "Java",
      "JavaScript",
      "TypeScript"
    ],
    "Web & Backend Development": [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "GraphQL",
      "REST APIs",
      "Tailwind CSS",
      "Postman"
    ],
    "Security & Cryptography": [
      "Cloud Security",
      "Network Security",
      "Modern Cryptography",
      "Secure AI/ML Systems"
    ],
    "Version Control & Collaboration": [
      "Git",
      "GitHub"
    ]
  },

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
      description: "A Python-based Model Context Protocol (MCP) server using FastMCP that connects an internal knowledge base to Claude or other MCP-capable LLMs. This allows employees or internal tools to search, retrieve, and ask questions about internal documents in a structured and auditable manner.",
            github: "https://github.com/harsh7z/enterprise-knowledge-mcp.git",
      link: ""
    },
    {
      label: "Face ID System using Siamese Network (PyTorch + OpenCV)",
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

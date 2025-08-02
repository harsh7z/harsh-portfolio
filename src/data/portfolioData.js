const portfolioData = {
  socialLinks: [
    //     {
    //   label: "Resume",
    //   url: "",
    //   icon: faEnvelope,
    // },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/harshpatel03",
    },
    {
      label: "GitHub",
      url: "https://github.com/harsh7z",
    },
    {
      label: "Email Me",
      url: "mailto:harshapatel112003@gmail.com",
    },
  ],

  education: [
    {
      label: "University of Alabama at Birmingham",
      img: "imgs/university/uab.png",
      sublabel: "Master's in Computer Science",
      date: "August, 2024 - May, 2026",
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

  skills: [
    "Python",
    "TensorFlow",
    "OpenCV",
    "Linux",
    "Docker",
    "Git & GitHub",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GSAP",
    "AWS",
    "Postman",
  ],


  certificates: [
    {
      lable: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      img: "/imgs/certificates/aws.png",
      date: "October, 2023",
    },
  ],

  work: [
    {
      label: "Tanvi Wealth PVT LTD, India",
      img: "imgs/work/tanvi_wealth.jpeg",
      sublabel: "Full Stack Developer Intern",
      date: "Dec, 2023 - May, 2024",
      description:
        "At Tanvi Wealth, I contributed to building a secure, full-stack portfolio management platform using the MERN stack to streamline how the company handled client financial data. I developed RESTful APIs to process real-time stock data and integrated third-party services to retrieve detailed portfolio insights. The platform was built with a strong focus on regulatory compliance and data security. On the front end, I enhanced the React.js interface for better performance and usability, helping the team onboard and support clients more efficiently.",
    },
    {
      label: "Izonnet Web Solutions, India",
      img: "imgs/work/izonnet.png",
      sublabel: "Full Stack Developer Intern",
      date: "May, 2023 - Jun, 2023",
      description:
        "At Izonnet Technologies, I led the development of a location-based employee attendance system to improve workforce productivity tracking. I integrated the Google Geofence API for real-time location verification and automated check-ins, reducing manual errors. The system included a React.js admin dashboard and scalable backend services built with Node.js and MongoDB, which improved data accuracy and gave managers clearer visibility into team performance",
    },
  ],

  projects: [
    {
      label: "Face ID System using Siamese Network (PyTorch + OpenCV)",
      img: "imgs/projects/faceID.png",
      skills: [
        "Computer Vision",
        "PyTorch",
        "OpenCV",
      ],
      description: "This is a Python-based Face ID system that can register multiple users, and later verify a person using facial similarity. It uses a Siamese Neural Network implemented in PyTorch and OpenCV for real-time webcam face capture.",
            github: "https://github.com/harsh7z/faceID",
      link: ""
    },
    {
      label: "Personal portfolio",
      img: "imgs/projects/portfolio.png",
      skills: ["Next.js", "React.js", "GSAP","Tailwind"],
      description: "A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and GSAP. Smooth scroll animations and section reveals enhance the user experience. Showcases skills, education, projects, certifications, and contact info in a clean, minimal design.",
      github: "https://github.com/harsh7z/harsh-portfolio",
      link: "https://harsh7z.vercel.app"
    },
    {
      label: "wecare",
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

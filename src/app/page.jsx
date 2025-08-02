"use client";
import { useRef, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import MiniCard from "@/components/MiniCard/MiniCard";
import ProjectCard from "@/components/project_card/ProjectCard";
import portfolioData from "@/data/portfolioData";
import CertificateCard from "@/components/CertificateCard/CertificateCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const certificateRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);
  const footerRef = useRef(null);

  const { socialLinks, education, skills, certificates, work, projects } =
    portfolioData;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.6 }, // faster duration
    });

    const animateIn = (ref, delay = "-=0.4") => {
      if (!ref.current) return;

      tl.fromTo(
        ref.current,
        {
          y: 10,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
        delay
      );
    };

    animateIn(bannerRef, "+=0");
    animateIn(aboutRef);
    animateIn(educationRef);
    animateIn(workRef);
    animateIn(skillRef);
    animateIn(certificateRef);
    animateIn(projectsRef);
    animateIn(connectRef);
    animateIn(footerRef);

    return () => {
      tl.kill();
      footerTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.8, // increase for more smoothness
      effects: true, // allows blur, scale, etc.
      normalizeScroll: false, //disabling this makes ScrollSmoother not bug out on Iphone
      ignoreMobileResize: true,
    });

    return () => {
      tl.kill();
      footerTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll effect
    });
  };

  return (
    <>
      <div
        id="smooth-wrapper"
        className="overflow-hidden flex justify-center bg-black text-white"
      >
        <div
          id="smooth-content"
          ref={containerRef}
          className="flex justify-center items-center h-fit max-w-[720px] px-4 cursor-default overflow-hidden md:overflow-visible touch-auto"
        >
          <div className="w-full">
            <div className="w-full h-full pt-6">
              {/**banner section */}
              <div ref={bannerRef} className="banner flex flex-col opacity-0">
                <div className="flex justify-between">
                  <Image
                    src="/imgs/pfp.jpeg" // relative to the public folder
                    alt="Harsh Patel"
                    width={120}
                    height={120}
                    className="rounded-full pointer-events-none"
                  />
                  <div className="socials  flex flex-col justify-center items-left ">
                    {socialLinks.map((item, i) => (
                      <div key={item.label}>
                        <a
                          href={`${item.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-lg underline text-neutral-400 hover:text-white font-semibold lg:font-normal"
                        >
                          {item.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-6  font-normal tracking-normal leading-relaxed lg:text-lg">
                  <span className="text-xl font-bold inline-block lg:text-2xl">
                    Hi, I'm Harsh 😄{" "}
                  </span>
                  <br />
                  <span className="font-semibold lg:font-normal">Exploring AI, Machine Learning and Cybersecurity</span>
                </p>
              </div>

              {/**about section */}
              <div ref={aboutRef} className="about flex flex-col opacity-0">
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  {" "}
                  About
                </span>
                <p className="text-md font-semibold leading-relaxed lg:text-lg lg:font-normal">
                  I’m currently pursuing my Master’s in Computer Science at the
                  University of Alabama at Birmingham. Prior to this, I
                  completed my undergraduate studies in computer engineering,
                  building a strong foundation in software development. Right
                  now, I’m deeply exploring artificial intelligence, applied
                  machine learning, and cybersecurity, fascinated by how smart
                  systems can learn, adapt, and protect. Outside the classroom,
                  I’m constantly learning through projects and hands-on
                  exploration.
                </p>
              </div>

              {/**education section */}
              <div
                ref={educationRef}
                className="education flex flex-col opacity-0"
              >
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  Education
                </span>

                {education.map((item, i) => (
                  <MiniCard key={i} item={item} />
                ))}
              </div>

              {/**work experience section */}
              <div ref={workRef} className="flex flex-col opacity-0">
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  Work Experience
                </span>

                {work.map((item, i) => (
                  <MiniCard key={i} item={item} />
                ))}
              </div>

              {/**skill section */}
              <div ref={skillRef} className="flex flex-col opacity-0">
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  Skills
                </span>

                <div className="w-full flex flex-wrap gap-2 mt-2">
                  {skills.map((item, i) => (
                    <div
                      key={i}
                      className="w-fit bg-white px-3 py-1 rounded-sm flex justify-center"
                    >
                      <span className="text-black text-sm font-semibold lg:font-normal leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/**certificates section */}
              <div ref={certificateRef} className="flex flex-col opacity-0">
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  Certificates
                </span>

                <div className="w-full flex flex-col border-b border-neutral-800">
                  {certificates.map((item, i) => (
                    <CertificateCard item={item} key={i} />
                  ))}
                </div>
              </div>

              {/**projects section */}
              <div
                ref={projectsRef}
                className="projects flex flex-col opacity-0"
              >
                <span className="text-xl font-semibold inline-block pt-4 lg:text-2xl">
                  Featured projects
                </span>

                <div className="w-full max-w-[720px] mx-auto mt-2">
                  <div className="flex flex-wrap gap-2 justify-between">
                    {projects.map((item, i) => (
                      <ProjectCard key={i} item={item} />
                    ))}
                  </div>
                </div>

                <a
                  href={"https://github.com/harsh7z"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full p-1"
                >
                  <span className="w-full h-full bg-white text-black text-  font-semibold lg:font-normal flex justify-center items-center rounded-sm p-2">
                    <FontAwesomeIcon
                      icon={faSquareArrowUpRight}
                      className="w-6 h-6 mr-2"
                    />
                    Check out more projects on github
                  </span>
                </a>
              </div>

              {/**connect section */}
              <div
                ref={connectRef}
                className="connect text-2xl py-6 lg:text-3xl opacity-0"
              >
                <p>
                  Thanks for dropping by! I'm always open to meaningful
                  connections and creative collaborations.
                </p>
                <br />
                <p>
                  {" "}
                  Have a project in mind or just want to say hi?{" "}
                  <span>
                    Feel free to reach out via{" "}
                    <a
                      className="underline"
                      href="mailto:harshapatel112003@gmail.com"
                    >
                      e-mail
                    </a>{" "}
                    or{" "}
                    <a
                      className="underline"
                      href="https://www.linkedin.com/in/harshpatel03"
                    >
                      LinkedIn
                    </a>
                  </span>
                  . Let’s build something awesome together. <br />
                </p>
                <br />
                <p>I'd love to hear from you.</p>
              </div>

              {/**footer section */}
              <div
                ref={footerRef}
                className="footer w-full p-8 mb-8 text-sm text-neutral-400 flex flex-col justify-center items-center opacity-0 lg:24"
              >
                <span>© 2025 Harsh Patel</span>
                <span>Guided by curiosity, grounded in craft.</span>
                <div className="socials flex justify-center items-center gap-2">
                  {socialLinks.map((item, i) => (
                    <div key={item.label}>
                      <a
                        href={`${item.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block underline text-neutral-400 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
                <button onClick={scrollToTop} aria-label="Scroll to top">
                  <FontAwesomeIcon
                    icon={faChevronCircleUp}
                    className="text-netruel-400 hover:text-white transition cursor-pointer mt-2 text-2xl"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

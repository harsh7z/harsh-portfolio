"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./navbar.css";

const menuLabels = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Connect", id: "connect" },
];

const socialLinks = [
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "GitHub", url: "https://github.com" },
];

const Navbar = ({ containerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const linksRef = useRef([]);

// Animate menu/close button  
useGSAP(() => {
  const duration = 0.15;
  const ease = "power1.out";

  if (isOpen) {
    gsap.to(openRef.current, {
      opacity: 0,
      duration,
      ease,
    });

    gsap.to(closeRef.current, {
      opacity: 1,
      duration,
      ease,
    });
  } else {
    gsap.to(openRef.current, {
      opacity: 1,
      duration,
      ease,
    });

    gsap.to(closeRef.current, {
      opacity: 0,
      duration,
      ease,
    });
  }
}, [isOpen]);
  // Animate menu overlay/content/links AND main container
  useGSAP(() => {
    setMenuAnimating(true);


    if (isOpen) {
      gsap.to(containerRef.current, {
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(menuOverlayRef.current, {
        display: "block",
        opacity:1,
        pointerEvents: "auto",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => setMenuAnimating(false),
      });

      gsap.fromTo(
        menuContentRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(containerRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(menuOverlayRef.current, {
        display: "none",
        pointerEvents: "none",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => setMenuAnimating(false),
      });
      gsap.fromTo(
        menuContentRef.current,
        {
          y: 0,
          opacity: 1,
        },
        { y: -50, opacity: 0, duration: 0.6, ease: "power3.out" }
      );
      gsap.to(linksRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isOpen, containerRef]);

  const handleToggle = () => {
    if (!menuAnimating) setIsOpen((prev) => !prev);
    console.log(isOpen)
  };
  return (
    <>
      <div className=" absolute top-0 flex justify-between items-center z-50 w-full text-2xl xl:max-w-3/4 mx-auto lg:text-xl p-4">
        <nav className="w-full flex justify-between items-center">
          <div className="logo font-bold ">Harsh Patel</div>

          {/* Desktop links (hidden on mobile) */}
          <div className="gap-6 items-center flex font-medium">
            {menuLabels.map((item, i) => (
              <div key={item.label} className="navbar-links hidden lg:block">
                <a
                  href={`#${item.id}`}
                  className="relative inline-block text-center"
                >
                  {item.label}
                </a>
              </div>
            ))}

            {/* Hamburger (hidden on desktop) */}
            <div className="menu-toggle relative w-[60px] h-[30px] lg:hidden">
              <span
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                onClick={handleToggle}
                ref={openRef}
              >
                Menu
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0"
                onClick={handleToggle}
                ref={closeRef}
              >
                Close
              </span>
            </div>
          </div>
        </nav>
      </div>

      {/*Mobile menu */}
      <div
        ref={menuOverlayRef}
        className="menu-overlay fixed w-full h-full px-4 flex justify-baseline pointer-events-none z-10 bg-white opacity-0 lg:hidden"
      >
        <div
          ref={menuContentRef}
          className="menu-content relative w-full h-full flex justify-center items-center flex-col gap-8"
        >
          {/*menu links */}
          <div className="menu-links text-4xl font-normal flex flex-col gap-6">
            {menuLabels.map((item, i) => (
              <div key={item.id} className="link relative text-center">
                <a href={`#${item.id}`} className="inline-block">
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/*social links */}
          <div className="menu-links text-2xl font-normal flex  gap-6">
            {socialLinks.map((item, i) => (
              <div key={item.label} className="link relative text-left">
                <a href={`#${item.id}`} className="inline-block">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

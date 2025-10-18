import Image from "next/image";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MiniCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef();

  useGSAP(
    () => {
      const el = contentRef.current;
      if (!el) return;

      if (isExpanded) {
        el.style.display = "block";
        const height = el.scrollHeight;

        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: height,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              el.style.height = "auto";
            },
          }
        );
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
    },
    { dependencies: [isExpanded] }
  );

  return (
    <>
      <div
        className="card group w-full h-[64px] flex justify-between items-center mt-2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <Image
          src={`/${item.img}`}
          alt={`${item.label}`}
          width={64}
          height={64}
          className="rounded-full pointer-events-none border border-neutral-300  mr-2 shadow"
        />

        <div className="flex-1/2 flex flex-col text-sm lg:text-lg">
          <div className="font-bold flex flex-col lg:flex-row justify-between">
            <span>{item.label}</span>
            <p className="font-semibold lg:hidden lg:font-normal">
              {item.sublabel}
              <span className="ml-2 absolute">
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronUp : faChevronDown}
                  size="xs"
                  className="text-neutral-400"
                />
              </span>
            </p>
            <span className="font-normal text-neutral-400">{item.date}</span>
          </div>
          <p className="hidden lg:block">
            {item.sublabel}
            <span className="ml-2 absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
              <FontAwesomeIcon
                icon={isExpanded ? faChevronUp : faChevronDown}
                size="xs"
                className="text-neutral-400"
              />
            </span>
          </p>
        </div>
      </div>

      {/* Animated Description */}
      <div
        ref={contentRef}
        className="ml-18 text-sm text-neutral-400 font-semibold lg:font-normal hidden"
      >
        <div className="py-2">
          {item.description || "No description provided."}
        </div>
      </div>
    </>
  );
};

export default MiniCard;

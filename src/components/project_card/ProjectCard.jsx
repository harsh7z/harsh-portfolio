import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ item }) => {
  return (
    <div className="w-full sm:w-[calc(50%-4px)] h-[464px] p-1">
      <div className="flex flex-col items-center justify-center w-full h-full border border-neutral-700 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-black">
        {/* Image Section */}
        <div className="w-full h-[36%] relative overflow-hidden">
          <Image
            src={`/${item.img}`}
            alt={item.label || "Project Image"}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>

        {/* Content Section */}
        <div className="w-full h-[56%] flex flex-col gap-2 p-2 border-t border-neutral-700">
          <span className="text-lg font-bold">{item.label}</span>
          <p className="font-semibold text-md text-neutral-400 lg:font-normal">{item.description}</p>

          <div className="links flex gap-1 flex-wrap">
            {item.skills.map((item, i) => (
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

        <div className="mt-auto w-full h-[12%]">
          <div className="w-full h-full flex flex-c justify-between items-center gap-2 px-2 py-2">
            <a
              href={`${item.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full bg-white text-black text-md font-medium leading-tight rounded-sm flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faGithubSquare} className="w-6 h-6" />
              <span className="ml-2 font-semibold lg:font-normal">Github</span>
            </a>

            {item.link ? (
              <a
                href={`${item.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full bg-white text-black text-md font-medium leading-tight rounded-sm flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="w-6 h-6"
                />
                <span className="ml-2 font-semibold lg:font-normal">Open</span>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

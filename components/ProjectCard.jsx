import Image from "next/image";
import TechChip from "@components/TechChip";
import TapedImage from "@components/TapedImage";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center hand-drawn-border max-w-4xl">
      <div className="flex flex-col items-center mt-10 mb-1 mx-4">
        <TapedImage imageUrl={project.imagePath} className="my-10" />
        <div className="flex flex-col items-center">
          <div className="text-center"></div>
          <div>
            <h1 className="text-3xl  text-center mb-2">
              {project.description}
            </h1>
          </div>
          <div className="flex">
            {project.technologies.map((technology, index) => (
              <TechChip key={index} technology={technology} />
            ))}
          </div>
        </div>
        <div className="flex space-x-5 mt-4">
          {project.links.demo && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/GithubLink.svg" width={35} height={35} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/WebLink.svg" width={35} height={35} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

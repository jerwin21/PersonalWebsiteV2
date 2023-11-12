import ProjectCard from "@components/ProjectCard";

const projects = [
  {
    title: "GSL Data App",
    description: `Livestock Data Analytics utilizing Amazon Web Services and VueJs. A year-long collaboration for Gundmundsen Sandhills Labs in Western Nebraska.`,
    technologies: [
      {
        title: "Amazon Web Services",
        logo: "/assets/AwsLogo.svg",
      },
      { title: "VueJs" },
      { title: "Lambda" },
      { title: "Python" },
    ],
    links: {
      demo: "https://demo1.com",
      github: "https://github.com/project1",
    },
    imagePath: "/assets/GSLApp.png",
  },
  {
    title: "Developer Portfolio",
    description: `You're looking at it! A personal website intended to be a digital first impression of myself. Created using NextJs and TailwindCSS it was a great way to learn to technology.`,
    technologies: [
      {
        title: "Next.Js",
      },
      { title: "Tailwind CSS" },
      { title: "React.Js" },
    ],
    links: {
      demo: "https://demo1.com",
      github: "https://github.com/project1",
    },
    imagePath: "/assets/Portfolio.png",
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <h1 className="text-6xl mb-6">Projects</h1> */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;

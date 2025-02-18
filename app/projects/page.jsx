import ProjectCard from "@components/ProjectCard";

const projects = [
  {
    title: "CloverNYC.com",
    description: `My good friend Ben Morris and I made a website for our friends' company`,
    technologies: [
      {
        title: "Next.Js",
      },
      { title: "Cloudinary" },
      { title: "Python" },
      { title: "React.Js" },
    ],
    links: {
      demo: "https://clovernyc.com",
      github: "https://github.com/extremobemo/clover",
    },
    imagePath: "/static/images/CloverDesktop.jpg",
  },
  {
    title: "Developer Portfolio",
    description: `You're looking at it! A personal website intended to be a digital first impression of myself. Created using NextJs and TailwindCSS. It was a great project to learn a new technology.`,
    technologies: [
      {
        title: "Next.Js",
      },
      { title: "Tailwind CSS" },
      { title: "React.Js" },
    ],
    links: {
      demo: "https://johnerwin.dev",
      github: "https://github.com/jerwin21/PersonalWebsiteV2",
    },
    imagePath: "/static/images/Portfolio.png",
  },
  {
    title: "GSL Data App",
    description: `Livestock Data Analytics utilizing Amazon Web Services and VueJs. A year-long collaboration for Gundmundsen Sandhills Labs in Western Nebraska.`,
    technologies: [
      {
        title: "Amazon Web Services",
        logo: "/static/images/AwsLogo.svg",
      },
      { title: "VueJs" },
      { title: "Lambda" },
      { title: "Python" },
    ],
    links: {},
    imagePath: "/static/images/GSLApp.PNG",
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

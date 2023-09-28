import ProjectCard from "@components/ProjectCard"


const projects = [
  {
    title: 'Project 1',
    description: `Livestock Data Analytics utilizing Amazon Web Services and VueJs. A year-long collaboration for Gundmundsen Sandhills Labs in Western Nebraska.`,
    technologies: [
      {
      title: "Amazon Web Services",
       logo: '/assets/AwsLogo.svg'
      },
      {title: "Fortnite"},
    ],
    links: {
      demo: 'https://demo1.com',
      github: 'https://github.com/project1',
    },
    imagePath: '/assets/GSLApp.png',
  },
  // Add more projects here
];


const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <h1 className="text-6xl mb-6">Projects</h1> */}
      <ProjectCard project={projects[0]}></ProjectCard>
    </div>
  )
}

export default Projects
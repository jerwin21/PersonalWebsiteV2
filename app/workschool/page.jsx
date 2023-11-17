import Experience from "@components/Experience";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Penlink",
    duration: {
      start: "2021",
      end: "2022",
    },
    description: `This was my first job in software. It was a wonderful experience learning to write production level code with a team of several experienced engineers that eventually led to a full time position.`,
    roles: [
      `Gained familiarity with software development methodologies`,
      ` Implemented full-stack functionality to add bookmarks to user cases`,
      ` Maintained software by tracking down issues logged by QA and making appropriate code changes`,
      ` Learned the importance of software architecture especially while maintaining legacy systems`,
    ],
    technologies: [
      { title: "Azure Devops" },
      { title: "C#" },
      { title: "XAML" },
      { title: "Agile" },
      { title: "ORACLE SQL" },
      { title: ".NET" },
    ],
  },
  {
    title: "Software Engineer",
    company: "Penlink",
    duration: {
      start: "2022",
      end: "Present",
    },
    description: `As a full-time software engineer at Penlink working their flagship product - PLX - I've continued to learn and grow as an engineer, and I have been able to conquer bugs and features of larger scope. `,
    roles: [
      `Collaborate with project management to clarify requirements and timelines for new features and bug fixes`,
      `Develop new features, modify existing features, and hunt down bugs`,
      `Conduct time-sensitive hotfixes for customers, ensuring their investigations aren’t hindered by technical issues`,
      `Learned the importance of software architecture especially while maintaining legacy systems`,
      `Conduct code review and provide feedback on coworkers’ pull requests to ensure high quality code standards`,
      `Facilitate learning through documentation and open communication of my mistakes`,
      `Demonstrate excellent presentation skills via leading dmonstrations of my feature work to executive, sales, and training teams`,
    ],
    technologies: [
      { title: "Azure Devops" },
      { title: "C#" },
      { title: "XAML" },
      { title: "Agile" },
      { title: "ORACLE SQL" },
      { title: ".NET" },
    ],
  },
];

const WorkSchool = () => {
  return (
    <div className="flex flex-col items-center m-2">
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
  );
};

export default WorkSchool;

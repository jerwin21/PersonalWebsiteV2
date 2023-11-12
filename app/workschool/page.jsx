import TapedImage from "@components/TapedImage";
import Experience from "@components/Experience";
import gif from "@public/assets/JohnHasAnIdeaTransparent.gif";
import Image from "next/image";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Penlink",
    duration: {
      start: "2021",
      end: "2022",
    },
    description: `I have over 50 solo victory royales and triple digit victory royales when playing with a squad.
  I only play 0 builds tho. I love the gold scar`,
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
    description: `I have over 50 solo victory royales and triple digit victory royales when playing with a squad.
  I only play 0 builds tho. I love the gold scar`,
    roles: [
      `Collaborate with project management to clarify requirements and timelines for new features and bug fixes`,
      `Develop new features, modify existing features, and hunt down bugs`,
      `Conduct time-sensitive hotfixes for customers, ensuring their investigations aren’t hindered by technical issues`,
      `Learned the importance of software architecture especially while maintaining legacy systems`,
      `Conduct code review and provide feedback on coworkers’ pull requests to ensure high quality code standards`,
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

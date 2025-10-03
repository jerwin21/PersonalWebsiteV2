import Experience from "@components/Experience";

const experiences = [
  {
    title: "Platform Engineer",
    company: "National Basketball Association",
    duration: {
      start: "November 2024",
      end: "Present",
    },
    description: `I finally made it to the league! Not exactly the way I thought I would when I was in 6th grade tho...`,
    roles: [
      `Maintained and extended high-traffic middle-ware API that serves all NBA App clients, ensuring performance and stability across 21 different
platforms`,
      `Engineered and managed content delivery and caching strategies utilizing Redis, Akamai, and Varnish to ensure API resiliency and low-latency`,
      `Key contributor in architecture design and implementation of greenfield backend platform to replace legacy Redis-based caching with a durable
event-driven pipeline using RedPanda (Kafka) and MongoDB`,
      `Assisted in design and implementation for microservices to ingest change events from upstream services, aggregate and transform the
data, and persist results to a centralized datastore`,
      `Reduced our reliance on fragile polling-based systems, improving upstream stability and preparing the system for future scalability`,
      `Lead engineer on a high-visibility initiative to provide smart links that redirect users to game broadcaster platforms, respecting location based
blackout restrictions`,
      `Designed and built a microservice to consume broadcaster update events and updates Akamai EdgeKV , enabling smart user redirection to
appropriate broadcaster platforms`,
      `Implemented Akamai edge-compute solution to perform lightning fast user redirect based on user location`,
      `Bootstrapped cloud-agnostic infrastructure for microservices, enabling seamless deployment to both Azure and AWS Kubernetes clusters
amid an ongoing cloud provider migration`,
      `Collaborated across multiple teams to gather requirements`
    ],
    technologies: [
      { title: "Azure Devops" },
      { title: "C#" },
      { title: "nextJs" },
      { title: "MongoDB" },
      { title: "Redis" },
      { title: "RedPanda" },
      { title: "Kubernetes" },
      { title: "Helm" },
      { title: ".NET" },
    ],
  },
  {
    title: "Software Engineer",
    company: "Penlink",
    duration: {
      start: "2022",
      end: "2024",
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

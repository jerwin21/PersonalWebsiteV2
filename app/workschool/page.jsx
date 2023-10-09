import TapedImage from "@components/TapedImage";
import Experience from "@components/Experience";
import gif from "@public/assets/JohnHasAnIdeaTransparent.gif";
import Image from "next/image";

const experience = {
  title: "Renegade Raider",
  company: "Fortnite",
  duration: {
    start: "2018",
    end: "present",
  },
  description: `I have over 50 solo victory royales and triple digit victory royales when playing with a squad.
  I only play 0 builds tho. I love the gold scar`,
  roles: [
    `God i miss loot lake. why did they get rid of it. So dumb.`,
    `moisty mire was another one of my favorites. Right over by the prison. We would hit that, then the prison and have a good time`,
    `tilted towers was cool too. i heard that's back`,
  ],
  technologies: [
    { title: "fortnite" },
    { title: "solos" },
    { title: " zero builds" },
  ],
};

const WorkSchool = () => {
  return (
    <div className="flex flex-col items-center m-20">
      <Experience experience={experience} />
    </div>
  );
};

export default WorkSchool;

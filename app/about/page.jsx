import Bio from "@components/Bio";
import Education from "@components/Education";

const About = () => {
  return (
    <div className="flex flex-col items-center hand-drawn-border pt-10 pb-32">
      <Bio />
      <Education />
    </div>
  );
};

export default About;

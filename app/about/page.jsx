import Bio from "@components/Bio";
import Education from "@components/Education";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Bio />
      <Education />
    </div>
  );
};

export default About;

import Bio from "@components/Bio";
import Education from "@components/Education";
import Contact from "@components/Contact";

const About = () => {
  return (
    <div className="flex flex-col items-center hand-drawn-border pt-0 pb-0 sm:pb-10 lg:pb-36">
      <Bio />
      <Education />
      <Contact />
    </div>
  );
};

export default About;

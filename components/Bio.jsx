import TapedImage from "@components/TapedImage";

const Bio = () => {
  return (
    <div className="py-10 flex flex-col items-center ">
      <div className="flex flex-col items-center w-[95%] sm:w-[88%] md:w-[80%] lg:my-10">
        <TapedImage
          imageUrl={"/static/images/johnAndBassWBackgroundLandscape.jpg"}
          alt="John with a big one"
        />
        <div className="flex flex-col text-md sm:text-lg md:text-2xl leading-tight font-semibold mt-4 space-y-2">
          <p>
            <span className="text-2xl">Hello! I'm John Erwin</span>, <br /> a
            full-stack software engineer and graduate of{" "}
            <span className="text-red-700">
              The University of Nebraska-Lincoln
            </span>
            , with a degree in computer science and minors in business and
            mathematics.
          </p>
          <p>
            I entered the computer science department at UNL somwhat lacking in
            technical skills, but fortunately I was born with little fear of
            asking "stupid" questions, and by leaning on my people skills and
            making friends with talented developers I was able to quickly
            improve my technical weaknesses. Now that I've become more
            proficient in the technical aspects of software engineering, I'm
            excited to see what sort of positive impact I can make on the world
            with software.
          </p>
          <p>
            Into my professional career I've continued to hone my skills through
            work, becoming proficient in C#, .NET, and ORACLE SQL; as well as
            through personal projects like this website. I've also been able to
            build on my presentation and public speaking skills through leading
            demonstrations of my feature work to executive, sales, and training
            teams. I don't mind working alone, but I enjoy working with others
            the most. Collaborative work has always been a fun way to learn and
            accomplish what I wouldn't be able to on my own.
          </p>
          <p>
            On a more personal note, I grew up in a small town called York,
            Nebraska as the oldest child in a large family. Growing up in a
            tight-knit community, I spent my formative years playing team
            sports, and working in agriculture. Today I reside in Lincoln,
            Nebraska. When I'm not writing code, it might be hard to find me. As
            a passionate outdoorsman, I am often without cell service, getting
            my boots wet and (if I'm lucky) my hands slimy while fishing. I've
            also recently found a passion for the ever frustrating sport of
            golf. During the colder months, you might find me hurdling down a
            mountain on a snowboard or sitting on a frozen lake, again, trying
            to get my hands a little slimy with some ice fishing.
          </p>
          <p>
            Well, if you've made it this far, I want to thank you for sticking
            around. As a closing message I want to leave you with this: As a
            dedicated full-stack software engineer, I thrive on the intersection
            of creativity and functionality. My commitment to collaboration,
            continuous learning, and effective communication has been
            instrumental in both my personal and professional growth. I invite
            you to explore my projects and experiences, and I'm excited to
            connect and contribute with innovators this field. Don't hesitate to
            reach out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

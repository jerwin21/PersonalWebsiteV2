import TapedImage from "@components/TapedImage";

const Bio = () => {
  return (
    <div className="py-10 flex flex-col items-center ">
      <div className="flex flex-col items-center w-[95%] sm:w-[88%] md:w-[80%] lg:my-10">
        <TapedImage imageUrl={"/assets/johnAndBassWBackgroundLandscape.jpg"} />
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
            It was there that I met my good friend and introduction the world of
            writing code, Ben Morris. Since then, I have an enjoyed an exciting
            an adventure into the world of software engineering full of
            learning, several success, and several more failures.
          </p>
          <p>
            I entered the computer science department severely lacking in
            technical skills, but fortunately I had little fear of asking
            "stupid" questions, and by leaning on my people skills and friends
            like Ben and Tanner Skelton I was able to quickly improve my
            technical weaknesses. Now that I've become more proficient in the
            technical aspects of software engineering, I'm excited to see what
            sort of positive impact I can make on the world with software.
          </p>
          <p>
            I've continued to hone my skills through experiences at work, and
            with personal and collaborative projects on the side. I don't mind
            working alone, but I enjoy working with others the most. Group work
            has always been a fun way to learn and accomplish what I wouldn't be
            able to on my own.
          </p>
          <p>
            On a more personal note, I grew up in a small town called York,
            Nebraska as the oldest child in a large family. Today I reside in
            Boulder, Colorado. When I'm not writing code, it might be hard to
            find me. I'm a passionate outdoorsman, often getting my boots wet
            and (if I'm lucky) my hands slimy while fly fishing. During the
            colder months, you might find me hurdling down a mountain on a
            snowboard or sitting on a frozen lake, again, trying to get my hands
            a little slimy with some ice fishing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

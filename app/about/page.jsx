import TapedImage from "@components/TapedImage";

const About = () => {
  return (
    <div className="flex flex-col items-center p-10 border border-red-400">
      <div className="xl:grid xl:grid-cols-12 flex flex-col-reverse items-center max-w-screen-lg border border-black w-fit m-10 p-5">
        <div className="xl:col-span-6 border  xl:lg:mt-20  border-blue-400 ">
          <p className="text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type{" "}
            <span className="red-highlight-container">
              <span className="highlight"> University of Nebraska-Lincoln</span>
            </span>{" "}
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="col-span-6 sm:max-w-screen-sm self-start  border border-green-400">
          <TapedImage imageUrl="/assets/JohnAndBassWBackground.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;

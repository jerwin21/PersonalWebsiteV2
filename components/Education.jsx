import Image from "next/image";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row sm:justify-center w-[95%] sm:w-[88%] font-semibold">
      <Image
        src={"/static/images/UniversityNebraskaLogo.png"}
        width={200}
        height={200}
        className="self-center"
      />
      <div>
        <h1 className="text-3xl sm:text-5xl font-semibold">Education</h1>
        <h1 className="text-2xl sm:text-4xl font-semibold text-red-600">
          University of Nebraska-Lincoln
        </h1>

        <h1 className="text-lg sm:text-xl my-3">
          Bachelor of Science in{" "}
          <span className="text-xl sm:text-2xl underline">
            Computer Science
          </span>{" "}
          with Minors in Business and Mathematics
        </h1>

        <h1 className="text-xl">Cumulative GPA: 3.919 / 4.0</h1>

        <div className="ml-5">
          <ul className="list-disc">
            <li>Dean's List All Semesters</li>
            <li>Phi Delta Theta Recruitment Chairmen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import TechChip from "@components/TechChip";

const Experience = ({ experience }) => {
  return (
    <div className="flex flex-col hand-drawn-border w-full p-4 max-w-6xl">
      <div>
        <p className="text-xl sm:text-3xl ">
          {experience.duration.start} - {experience.duration.end}
        </p>
      </div>
      <div className="flex items-center">
        <h1>
          <span className="text-4xl sm:text-6xl underline">
            {experience.title}
          </span>
          <span className="text-2xl"> @ </span>
          <span className="text-5xl sm:text-6xl">{experience.company}</span>
        </h1>
      </div>
      <div className=" sm:mt-1 mb-2">
        <p className="text-2xl">{experience.description}</p>
      </div>
      <div>
        <h1 className="text-4xl underline">Responsibilities</h1>
      </div>
      <div className="pl-2 sm:pl-6">
        <ul className="list-disc">
          {experience.roles.map((role, index) => (
            <li className="text-2xl">{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center flex-wrap mt-2">
        {experience.technologies.map((technology, index) => (
          <TechChip key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

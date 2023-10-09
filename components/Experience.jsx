import React from "react";
import Image from "next/image";
import TechChip from "@components/TechChip";

const Experience = ({ experience }) => {
  return (
    <div className="flex flex-col hand-drawn-border w-full p-4 max-w-6xl">
      <div>
        <p className="text-3xl ml-6">
          {experience.duration.start} - {experience.duration.end}
        </p>
      </div>
      <div className="flex items-center">
        <h1>
          <span className="text-7xl underline">{experience.title}</span>
          <span className="text-4xl"> @ </span>
          <span className="text-5xl">{experience.company}</span>
        </h1>
      </div>
      <div className="mx-6 mt-4 mb-2">
        <p className="text-2xl">{experience.description}</p>
      </div>
      <div>
        <h1 className="text-4xl underline">Responsibilities</h1>
      </div>
      <div className="mx-6">
        <ul className="list-disc">
          {experience.roles.map((role, index) => (
            <li className="text-2xl">{role}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-2">
        {experience.technologies.map((technology, index) => (
          <TechChip key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

"use client";

import Link from "next/link";
import Image from "next/image";
import useHoverImage from "@hooks/useHoverImage";
import { useState, useEffect } from "react";

const Nav = ({ pathName }) => {
  const [selectedPage, setSelectedPage] = useState("");

  // Function to update selectedPage based on the current route
  const updateSelectedPage = () => {
    if (pathName === "/") {
      setSelectedPage("home");
    } else if (pathName === "/projects") {
      setSelectedPage("projects");
    } else if (pathName === "/workschool") {
      setSelectedPage("workschool");
    } else if (pathName === "/about") {
      setSelectedPage("about");
    }
  };

  // Listen for route changes and update selectedPage accordingly
  useEffect(() => {
    setSelectedPage(pathName);
    updateSelectedPage();
  }, [pathName]);

  const [titleImageSrc, setTitleImageHover, setTitleImageUnselect] =
    useHoverImage(
      "/assets/JohnErwinUnselected.svg",
      "/assets/JohnErwinSelected.svg",
      selectedPage === "home"
    );

  const [projectsImageSrc, setProjectsImageHover, setProjectsImageUnselect] =
    useHoverImage(
      "/assets/ProjectsUnselected.svg",
      "/assets/ProjectsSelected.svg",
      selectedPage === "projects"
    );

  const [
    workSchoolImageSrc,
    setWorkSchoolImageHover,
    setWorkSchoolImageUnselect,
  ] = useHoverImage(
    "/assets/ExperienceUnselected.svg",
    "/assets/ExperienceSelected.svg",
    selectedPage === "workschool"
  );

  const [aboutImageSrc, setAboutImageHover, setAboutImageUnselect] =
    useHoverImage(
      "/assets/AboutUnselected.svg",
      "/assets/AboutSelected.svg",
      selectedPage === "about"
    );

  const handleLinkClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <nav className="flex justify-between w-full mb-2 pt-3">
        <div className="">
          <Link
            href="/"
            className="flex gap-2 flex-center ml-2"
            onClick={() => handleLinkClick("home")}
          >
            <Image
              src={titleImageSrc}
              alt="John Erwin"
              width={250}
              height={20}
              onMouseEnter={setTitleImageHover}
              onMouseLeave={setTitleImageUnselect}
            />
          </Link>
        </div>

        <div className="flex ml-auto gap-2 mr-2 items-center">
          <Link href="/projects" onClick={() => handleLinkClick("projects")}>
            <Image
              src={projectsImageSrc}
              alt="Projects"
              width={150}
              height={20}
              onMouseEnter={setProjectsImageHover}
              onMouseLeave={setProjectsImageUnselect}
            />
          </Link>
          <Link
            href="/workschool"
            onClick={() => handleLinkClick("workschool")}
          >
            <Image
              src={workSchoolImageSrc}
              alt="Work and School"
              width={150}
              height={20}
              onMouseEnter={setWorkSchoolImageHover}
              onMouseLeave={setWorkSchoolImageUnselect}
            />
          </Link>
          <Link href="/about" onClick={() => handleLinkClick("about")}>
            <Image
              src={aboutImageSrc}
              alt="About"
              width={150}
              height={20}
              onMouseEnter={setAboutImageHover}
              onMouseLeave={setAboutImageUnselect}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="pt-4">
      <div className="hidden sm:flex justify-center gap-10 container">
        <a
          href={"https://github.com/jerwin21"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/GithubLink.svg"
            width={75}
            height={75}
            alt="Github link"
          />
        </a>
        <a
          href={"https://instagram.com/jerwizzle"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/instagramlogo.svg"
            width={75}
            height={75}
            alt="Instagram link"
          />
        </a>
        <a
          href={"https://linkedin.com/in/john-erwin-6b494917b/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/linkedinlogo.svg"
            width={75}
            height={75}
            alt="LinkedIn link"
          />
        </a>
      </div>

      <div className="sm:hidden flex justify-center gap-10 container">
        <a
          href={"https://github.com/jerwin21"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/GithubLink.svg"
            width={40}
            height={40}
            alt="Github link"
          />
        </a>
        <a
          href={"https://instagram.com/jim_ervins"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/instagramlogo.svg"
            width={40}
            height={40}
            alt="Instagram link"
          />
        </a>
        <a
          href={"https://linkedin.com/in/john-erwin-6b494917b/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/images/linkedinlogo.svg"
            width={40}
            height={40}
            alt="LinkedIn link"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;

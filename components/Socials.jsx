import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex justify-center gap-10 container">
      <a
        href={"https://github.com/jerwin21"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/GithubLink.svg" width={75} height={75} />
      </a>
      <a
        href={"https://instagram.com/jim_ervins"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/InstagramLogo.svg" width={75} height={75} />
      </a>
      <a
        href={"https://linkedin.com/in/john-erwin-6b494917b/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/LinkedInLogo.svg"
          width={75}
          height={75}
          className="hover:fill-slate-300"
        />
      </a>
    </div>
  );
};

export default Socials;

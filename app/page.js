import Image from "next/image";
import Socials from "@components/Socials";
import Contact from "@components/Contact";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-center">
          <Image
            className="mb-10"
            src="/static/images/JohnErwinHello.png"
            alt="John Erwin says Hello!"
            width={700}
            height={200}
          />

          <h1 className="text-center text-2xl sm:text-4xl">
            <span className="text-6xl sm:text-8xl">John Erwin</span> <br />
            Full Stack Software Engineer <br />
            PenLink <br />
            Boulder, CO <br />
            <div className="px-10 container">
              <ul className="list-disc">
                <li className="my-5">
                  <a href="/projects" className="text-4xl">
                    {" "}
                    <span className="highlight-container">
                      <span className="highlight">projects</span>
                    </span>{" "}
                  </a>
                  I'm proud of
                </li>
                <li className="my-5">
                  <a href="/workschool" className="text-4xl">
                    work{" "}
                    <span className="highlight-container">
                      <span className="highlight">experience</span>
                    </span>
                  </a>
                </li>
                <li className="my-5">
                  <a href="/about" className="text-4xl">
                    {" "}
                    <span className="highlight-container">
                      <span className="highlight"> about</span>{" "}
                    </span>
                  </a>{" "}
                  me
                </li>
                <li>
                  <Contact />
                </li>
              </ul>
            </div>
          </h1>
        </div>
        <Socials />
      </div>
    </section>
  );
}

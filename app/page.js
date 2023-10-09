import Image from "next/image";
import gif from "@public/assets/JohnHasAnIdeaTransparent.gif";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-start items-center">
          <Image
            className="mb-10"
            src="/assets/JohnErwinHello.png"
            alt="John Erwin says Hello!"
            width={700}
            height={200}
          />

          <h1 className="text-center text-4xl">
            <span className="text-8xl">John Erwin</span> <br />
            Full Stack Software Engineer <br />
            PenLink <br />
            Boulder CO <br />
            <div className="p-10">
              <ul className="list-disc">
                <li className="my-5">
                  <a href="/projects" className="text-4xl">
                    {" "}
                    <mark className="mark1">projects</mark>{" "}
                  </a>
                  I'm proud of
                </li>
                <li className="my-5">
                  <a href="/workschool" className="text-4xl">
                    work <mark className="mark2">experience</mark>
                  </a>
                </li>
                <li className="my-5">
                  <a href="/about" className="text-4xl">
                    {" "}
                    <mark className="mark3"> about</mark>{" "}
                  </a>{" "}
                  me
                </li>
              </ul>
            </div>
          </h1>
          <div>
            <h1>whole bunch of text</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

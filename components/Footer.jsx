import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col align-middle">
      <div className="flex flex-col align-middle items-center">
        <Image
          src="/static/images/JohnHasAnIdeaTransparent.gif"
          alt="Middle Image"
          width={150}
          height={150} 
        />
        <p className="text-center">@ 2023 John Erwin All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col align-middle">
      <div className="flex flex-col align-middle items-center">
        <Image
          src="/assets/JohnHasAnIdeaTransparent.gif"
          alt="Middle Image"
          width={150} // Adjust the width based on your requirements
          height={150} // Adjust the height based on your requirements
        />
        <p className="text-center">@ 2023 John Erwin All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";

const TechChip = ({ technology }) => {
  return (
    <div className="flex">
      <div className="flex bg-yellow-200 py-1 px-1 mx-2 border-gray-400 border-b-2 border-r-2">
        <div className="mr-2">
          <Image
            className="mt-1"
            src={technology.logo}
            alt="John Erwin says Hello!"
            width={30}
            height={4}
          />
        </div>
        <div>
          <h1 className="text-sm">{technology.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TechChip;

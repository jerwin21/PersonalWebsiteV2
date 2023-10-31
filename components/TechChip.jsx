import Image from "next/image";

const TechChip = ({ technology }) => {
  return (
    <div className="flex items-center m-1">
      <div className="flex items-center bg-yellow-200 px-1 mx-2 border-gray-400 border-b-2 border-r-2">
        {technology.logo && (
          <div className="mr-2 min-w-[20px]">
            <Image
              className="mt-1"
              src={technology.logo}
              alt="John Erwin says Hello!"
              width={30}
              height={4}
            />
          </div>
        )}
        <div className="">
          <h1 className="text-lg text-center whitespace-nowrap">
            {technology.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TechChip;

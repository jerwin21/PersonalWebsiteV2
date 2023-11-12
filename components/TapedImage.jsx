import Image from "next/image";

const TapedImage = (props) => {
  const { imageUrl } = props;
  return (
    <div>
      <div className="parent">
        <div className="overlay flex justify-center align-middle px-0">
          <img
            src={imageUrl}
            className="main-image my-4 min-w-[100px] border-gray-400 border-b-2 border-r-2"
            width="100%"
          />

          <img
            src="/assets/CornerTape.png"
            className="tape-top-right hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-top-right-small sm:hidden"
            height={100}
            width={75}
          />

          <img
            src="/assets/CornerTape.png"
            className="tape-bottom-right hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-bottom-right-small sm:hidden"
            height={100}
            width={75}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-bottom-left hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-bottom-left-small sm:hidden"
            height={100}
            width={75}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-top-left hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-top-left-small sm:hidden"
            height={100}
            width={75}
          />
        </div>
      </div>
    </div>
  );
};

export default TapedImage;

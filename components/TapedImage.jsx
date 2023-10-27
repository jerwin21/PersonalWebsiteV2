import Image from "next/image";

const TapedImage = (props) => {
  const { imageUrl } = props;
  return (
    <div>
      <div className="parent border border-green-500">
        <div className="overlay flex justify-center align-middle px-0">
          <img
            src={imageUrl}
            className="main-image my-4 min-w-[100px]"
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
            className="tape-bottom-right hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-bottom-left hidden sm:block"
            height={200}
            width={150}
          />
          <img
            src="/assets/CornerTape.png"
            className="tape-top-left hidden sm:block"
            height={200}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};

export default TapedImage;

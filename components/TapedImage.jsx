import Image from "next/image";

const TapedImage = (props) => {
  const { imageUrl } = props;
  return (
    <div>
      <div className="parent">
        <div className="overlay flex justify-center align-middle">
          <Image
            className="main-image my-16 mx-16"
            src={imageUrl}
            alt="John Erwin says Hello!"
            height={100}
            width={275}
          />

          <Image
            className="tape-top-right"
            src="/assets/CornerTape.png"
            alt="John Erwin says Hello!"
            width={150}
            height={200}
          />

          <Image
            className="tape-bottom-right"
            src="/assets/CornerTape.png"
            alt="John Erwin says Hello!"
            width={150}
            height={200}
          />

          <Image
            className="tape-bottom-left"
            src="/assets/CornerTape.png"
            alt="John Erwin says Hello!"
            width={150}
            height={200}
          />

          <Image
            className="tape-top-left"
            src="/assets/CornerTape.png"
            alt="John Erwin says Hello!"
            width={150}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default TapedImage;

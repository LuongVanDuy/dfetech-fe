import Image from "next/image";

export default function Home1() {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src="/home/home-background.jpg"
          width={1920}
          height={1302}
          objectFit="cover"
          alt="Home Background"
        />
        <div className="absolute top-0 left-0 w-full h-full mix-blend-lighten">
          <Image
            src="/home/body-background.png"
            width={1920}
            height={1302}
            objectFit="cover"
            className="h-full"
            alt="Body Background"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import profile from "../assets/anitha.jpg";

export default function About() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
    height: "250px",
    objectFit: 'cover',
    objectPosition: 'top'
  }

  return (
    <div className="mt-32 mx-auto lg:mx-32">
      <div className="my-16 md:ml-32  flex flex-col md:flex-row items-center">
        <div className="profile-img">
          <Image
            src={profile}
            width={250}
            height={250}
            alt="Profile Picture"
            style={imageStyle}
          />
        </div>
        <div className="font-light text-2xl mt-4 md:my-12 text-center md:text-start tracking-wide md:ml-20 md:text-6xl">
          <h1>Hello 👋</h1>
          <h2>I'm <span className="text-rose-950 font-normal">Anitha Vinjarapu</span></h2>
        </div>
      </div>
    </div>
  );
}

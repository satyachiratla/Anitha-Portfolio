import insta from "../assets/insta.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="text-center my-8">
        <h1 className="tracking-wider text-primary font-bold text-xl leading-8">
          <span className="relative rounded transform -rotate-45 px-2 py-1 word-background ">
            <em>Contact</em>
          </span>
        </h1>
      </div>
      <div className="text-center text-lg tracking-wider text-amber-950">
        <h2>
          Would you like to work with me? -{" "}
          <a href="mailto:anithavinjarapu123@gmail.com" className="text-slate-600">anithavinjarapu123@gmail.com</a>
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center p-8">
        <a
          href="https://www.instagram.com/anitha.vinjarapu/"
          title="instagram profile"
          className="mx-2"
        >
          <Image src={insta} alt="instagram" width={30} />
        </a>
        <a
          href="https://github.com/Anitha-0001"
          title="github profile"
          className="mx-2"
        >
          <Image src={github} alt="github" width={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/anitha-vinjarapu-61484820b/"
          title="linkedin profile"
          className="mx-2"
        >
          <Image src={linkedin} alt="linkedin" width={30} />
        </a>
      </div>
      <div className="text-center mb-8">
        <p> Made with ❤️ by Vivek</p>
        <p> © {new Date().getFullYear()} Reserved</p>
      </div>
    </div>
  );
}

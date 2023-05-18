import Image from "next/image";
import img from "../assets/movie-town.jpeg";
import battery from "../assets/battery.jpg";
import rfid from "../assets/rfid.jpeg";

const projects = [
  {
    id: 1,
    title: "Movie Town",
    img: img,
    link: "",
    description:
      "Movie Town is a dynamic and responsive website that serves as an online platform for movie enthusiasts to explore and discover information about popular movies. Developed using HTML and CSS, Movie Town offers a visually appealing interface that allows users to browse through a vast collection of movies, search for specific titles, and receive personalized recommendations based on their preferences.",
  },
  {
    id: 2,
    title: "Battery Thermal Management System",
    img: battery,
    description:
      "Battery Thermal Management System (BTMS) is an essential component in modern electric vehicles (EVs) and other energy storage systems. Its primary purpose is to regulate and maintain the temperature of the battery pack within optimal operating conditions, ensuring safety, performance, and longevity of the batteries.",
  },
  {
    id: 3,
    title: "RFID based Attendance Scanning System",
    img: rfid,
    description:
      "The RFID-based Attendance Scanning System is a technology-driven solution designed to automate and streamline the process of recording attendance in various settings such as educational institutions, workplaces, events, and conferences. This system utilizes Radio Frequency Identification (RFID) technology to track and monitor attendance accurately and efficiently.",
  },
];

export default function Projects() {
  const imageStyle = {
    borderRadius: "8px",
    border: "1px solid #ccc",
    height: "220px",
    objectFit: "fill",
  };

  return (
    <div className="mt-16">
      <div className="text-center my-8">
        <h1 className="tracking-wider text-primary font-bold text-xl leading-8">
          <span className="relative rounded transform -rotate-45 px-2 py-1 word-background ">
            <em>Projects</em>
          </span>
        </h1>
      </div>
      <ul className="md:mt-16">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <div className="flex flex-col mx-4 md:flex-row md:my-8 items-center md:mx-16 lg:mx-48 transition duration-300 ease-in-out">
                <div className="my-8 shadow md:hover:shadow-xl">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={400}
                    style={imageStyle}
                  />
                </div>
                <div className="lg:w-1/2 md:w-full md:ml-8">
                  <h2 className="lg:py-4 text-xl text-rose-600 tracking-wide font-normal">
                    {project.title}
                  </h2>
                  <p className="text-base py-4 text-stone-950 tracking-tight font-normal">
                    {project.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import Link from "next/link";
import { useState } from "react";

const Navbar = ({ refs }) => {
  const [navbar, setNavbar] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const { aboutMeRef, projectRef, contactRef } = refs;

  const links = [
    { id: 0, name: "ABOUT ME", link: "#aboutme" },
    { id: 1, name: "PROJECTS", link: "#project" },
    { id: 2, name: "CONTACT", link: "#contact" },
  ];

  const onSetActiveRef = (id) => {
    setActiveId(id);
    if (id === 0) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === 1) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (id === 2) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="w-full bg-white shadow fixed top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-center py-3 md:py-5 md:block ">
            <Link href="/">
              <h2 className="text-2xl text-black font-bold">
                Anitha Vinjarapu
              </h2>
            </Link>
            {/* <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="hidden md:flex flex-row items-center justify-end text-xs" >
              {links.map((ele) => (
                <Link
                  key={ele.id}
                  href={ele.link}
                  onClick={() => onSetActiveRef(ele.id)}
                  className={activeId === ele.id ? "link-active" : ""}
                >
                  <li
                    className="cursor-pointer tracking-wider mr-8 py-1.5 px-1 relative text-primary links"
                    style={{
                      marginRight: `${ele.name === "CONTACT" ? 0 : ""}`,
                    }}
                  >
                    {ele.name}
                  </li>
                </Link>
              ))}
              {/* <li>
                <Link
                  href="/about"
                  className="text-slate-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-slate-900"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-900"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

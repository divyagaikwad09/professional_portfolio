import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "achievements",
    "contact",
  ];

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          Divya Gaikwad
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className="cursor-pointer hover:text-indigo-400 transition"
              >
                {item.charAt(0).toUpperCase() +
                  item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menu && (
        <div className="md:hidden glass">
          <ul className="flex flex-col items-center gap-5 py-5">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  onClick={() => setMenu(false)}
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
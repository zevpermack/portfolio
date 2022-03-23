import React, { useState } from "react";
import Logo from "./Logo";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 2 },
  },
};

function Nav() {
  const [navOpen, setNavOpen] = useState(true);
  const chevronClass = classNames({
    "hover:cursor-pointer hover:text-orange mt-[20px]": navOpen,
    "hover:cursor-pointer hover:text-orange mt-[20px] rotate-180": !navOpen,
  });
  return (
    <footer className="fixed flex max-h-[80px] justify-center place-self-center top-0 bg-white bg-opacity-25">
      <div className="flex justify-center w-full items-center">
        <Logo></Logo>
        <motion.nav
          className=""
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex">
            {navOpen && (
              <>
                <a href="#projects">
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className="h-[60px] w-[60px]"
                      icon={faFolder}
                    />
                  </li>
                </a>
                <a href="#contact">
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className="h-[60px] w-[60px]"
                      icon={faEnvelope}
                    />
                  </li>
                </a>
                <div
                  onClick={() => {
                    openInNewTab("https://www.github.com/rewpt");
                  }}
                >
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className="h-[60px] w-[60px]"
                      icon={faGithub}
                    />
                  </li>
                </div>
                <div
                  onClick={() => {
                    openInNewTab(
                      "https://drive.google.com/file/d/1LvfcKpNCgrGiniY0qRUgVfzDgAr626ON/view?usp=sharing"
                    );
                  }}
                >
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className="h-[60px] w-[60px]"
                      icon={faFile}
                    />
                  </li>
                </div>
              </>
            )}
            <li
              className={chevronClass}
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faAngleUp} />
            </li>
          </ul>
        </motion.nav>
      </div>
    </footer>
  );
}

export default Nav;

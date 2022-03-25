import React, { useState } from "react";
import Project from "./Project";
import catchlightHome from "../images/catchlight_home.png";
import jungleHome from "../images/jungle-home.png";
import quizAppHome from "../images/quizapp-home.png";
import { AnimatePresence } from "framer-motion";

const allProjects = [
  {
    name: "Catchlight",
    description: `A full scale social media movie app. Add friends 
    and see what they are watching. Start individual chats about 
    movies you share interest in and rate movies to share with all users.`,
    photos: [catchlightHome],
    stack: ["React", "Tailwind", "Express", "pSQL"],
    webLink: "http://catchlight-media.herokuapp.com",
    ghLink: "https://www.github.com/rewpt/catchlight",
  },
  {
    name: "Jungle",
    description: `A ruby on rails product purchasing platform. Browse
    available items, add them to your cart and checkout using Stripe. Includes
    admin restricted moderation features.`,
    photos: [jungleHome],
    ghLink: "https://www.github.com/rewpt/jungle-rails",
    stack: ["Ruby on Rails", "Stripe"],
  },
  {
    name: "Quiz-App",
    description: `An all in one quiz site allowing you to create and take quizzes.
    Take public quizzes made by all users of the site or create private quizzes
    to study by yourself.  
    `,
    photos: [quizAppHome],
    ghLink: "https://www.github.com/rewpt/quiz-app",
    stack: ["Ruby on Rails", "Stripe"],
  },
];

export default function ProjectCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showDesc, setShowDesc] = useState(false);
  const maxIndex = allProjects.length - 1;

  return (
    <div className="flex justify-center w-full py-[3rem] bg-gradient-to-r from-slate-200 to-slate-100">
      <div
        id="projects"
        className="bg-opacity-0 flex w-2/3 flex-col justify-center items-center"
      >
        <AnimatePresence exitBeforeEnter>
          {allProjects.map((project, index) => {
            if (carouselIndex === index)
              return (
                <Project
                  key={index}
                  showDesc={showDesc}
                  setShowDesc={setShowDesc}
                  maxIndex={maxIndex}
                  carouselIndex={carouselIndex}
                  setCarouselIndex={setCarouselIndex}
                  {...project}
                >
                  {project.name}
                </Project>
              );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

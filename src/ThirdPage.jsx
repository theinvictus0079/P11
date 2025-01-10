import React from "react";

import "./App.css";
import GithubButton from "./customui/GithubButton";

const ThirdPage = () => {
  const cardsData = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum mollitia at laboriosam omnis modi maxime, consequatur amet neque repudiandae minus ",
      stack: "Next, Typescript, MongoDB",
      title: "Heading",
      link: "#",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum mollitia at laboriosam omnis modi maxime, consequatur amet neque repudiandae minus ",
      stack: "Next, Typescript, MongoDB",
      title: "Heading",
      link: "#",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum mollitia at laboriosam omnis modi maxime, consequatur amet neque repudiandae minus ",
      stack: "Next, Typescript, MongoDB",
      title: "Heading",
      link: "#",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum mollitia at laboriosam omnis modi maxime, consequatur amet neque repudiandae minus ",
      stack: "Next, Typescript, MongoDB",
      title: "Heading",
      link: "#",
    },
  ];

  return (
    <div className=" py-20 px-10 md:px-40 bg-[#1e1d1d] ">
      <div className="text-red-700 font-extrabold  text-3xl md:text-5xl  md:ml-[0]">
        My Projects
      </div>

      <div className="mt-28 bg-[#1e1d1d] flex flex-wrap justify-center gap-10">
        {cardsData.map((card, index) => (
          <div key={index}>
            <div
              key={index}
              className="border border-red-600 border-b-0 overflow-hidden bg-neutral-800 rounded-xl p-4 md:w-[400px] w-[320px]  md:min-h-[240px] flex flex-col"
            >
              {/* title */}
              <div className="text-red-900 font-bold text-3xl font-serif">
                {card.title}
              </div>
              {/* stack */}
              <div className="mt-2 text-neutral-200">
                <span className="font-bold md:text-xl">Tech stack:</span>
                <span className="font-semibold ml-3">{card.stack}</span>
              </div>

              <div className="mb-4 mt-6 bg-red-900 h-[1px] w-[90%] mx-auto"></div>
              {/* description */}
              <div className="mt-2 text-neutral-300 ">{card.desc}</div>
            </div>
            {/* link */}
            <div className="mt-6 md:mb-0 mb-6 flex justify-center items-center">
              <a target="__blank" href={card.link}>
                <GithubButton />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;

import React, { useRef } from "react";
import "./App.css";
import SocialIcons from "./customui/Socialicons";
import { motion } from "motion/react"
 const FirstPage = () => {

  return (
    <div className=" pt-[35%] md:pt-0  pb-10">

      <div className=" md:min-h-screen flex flex-wrap justify-center items-center gap-20 md:gap-6">
        
        <div className="  text-center w-[90%] md:mt-20 ">
          <motion.div
         initial={{ opacity: 0, y: -120  }} // Start off-screen and invisible
         whileInView={{ opacity: 1,  y:0 }} // Fade in and move to the original position
         viewport={{ once: false }} // Ensure the animation triggers every time it enters the viewport
         transition={{ duration: 1.3, ease: "easeInOut" }} // Duration and smoothness

          className="py-4 px-3 text-xl text-red-400 font-poppins font-bold rounded-xl border-[2px]  border-red-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus 
          </motion.div>
          
        </div>

      <div  className="md:-mt-20">

      <motion.div

initial={{ x: -150   }} // Start off-screen and invisible
          whileInView={{ x:0 }} // Fade in and move to the original position
viewport={{ once: false }} // Ensure the animation triggers every time it enters the viewport
transition={{ duration: 1.1, ease: "easeInOut" }} // Duration and smoothness
      

      className="card border-red-700 group hover:border"
    >
      <div className="card-overlay"></div>
      <div className="card-inner w-[300px] md:w-[310px] md:h-[390px] px-4 py-4 text-2xl md:text-4xl font-extrabold">
        Hi 👋🏻 I'm <br />
        the invictus <br />
        <h1 className="mt-3">I'm a </h1>
        <h1 className="mt-3 group-hover:underline underline-offset-4 font-agu">
          Web Developer
        </h1>
        <h1 className="mt-2 group-hover:underline underline-offset-4 font-agu">
          Tech Enthusiast
        </h1>
        <h1 className="mt-2 group-hover:underline underline-offset-4 font-agu">
          Blogger
        </h1>
      </div>
    </motion.div>
      </div>

      <div className="md:-mt-20">
      
      
        <div className="card card border-red-700 hover:border">
          <div className="card-overlay"></div>
          <motion.div 
          initial={{ x: 150   }} // Start off-screen and invisible
          whileInView={{ x:0 }} // Fade in and move to the original position
          viewport={{ once: false }} // Ensure the animation triggers every time it enters the viewport
          transition={{ duration: 1.1, ease: "easeInOut" }} // Duration and smoothness
          className="card-inner w-[300px] md:w-[500px] md:h-[390px] py-4 px-4 text-lg md:text-2xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat possimus hic deserunt quibusdam? Doloribus, corporis in ducimus itaque nihil, tempore deleniti necessitatibus sunt nostrum eligendi nobis? Laboriosam obcaecati laudantium delectus illum accusantium a pariatur animi repellat sint porro.

          </motion.div>
        </div>
      </div>

      <div className=" md:-mt-20 card border-red-700 hover:border">
        <SocialIcons />
      </div>

    </div>
    </div>
  );
};

export default FirstPage;

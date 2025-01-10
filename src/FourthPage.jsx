import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub} from "react-icons/fa";
import "./App.css"
import { motion } from "motion/react"

const FourthPage = () => {

  
  
  return (
    <div className="py-20  bg-[#1e1d1d]">
      <div className=" ">
    

        <div>
          <h1 className="text-red-700  md:text-5xl text-3xl font-bold ml-4 md:ml-[10%]">
            Contact Me
          </h1>
        </div>

        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[25%] mt-2 "></div>
      </div>

      {/* contact page design */}

      <div className="mt-14  md:mt-36  flex flex-col justify-center items-center py-40 pt-0 gap-8">



        <motion.div 
        initial={{ x:150 }} // Start off-screen and invisible
        whileInView={{ x:0 }} // Fade in and move to the original position
        viewport={{ once: false }} // Ensure the animation triggers every time it enters the viewport
        transition={{ duration: 1.2, ease: "linear" }}
        className="md:text-5xl text-3xl text-red-700 font-bold">Any Queries ?
        </motion.div>
        <motion.div 
        initial={{ x:-150 }} // Start off-screen and invisible
        whileInView={{ x:0 }} // Fade in and move to the original position
        viewport={{ once: false }} // Ensure the animation triggers every time it enters the viewport
        transition={{ duration: 1.2, ease: "linear" }}
        className=" md:text-3xl  text-xl font-bold text-red-700 mt-6  mb-24 underline underline-offset-4">Feel Free To Contact
        </motion.div>
      
        

        <div className="md:flex justify-center items-center  gap-6 ">

          <div className="border  border-zinc-500 contact  w-[300px] md:w-[650px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-red-500  flex justify-center items-center  ">
              <MdOutlineMailOutline />
              <div className="hover:text-red-500 underline  underline-offset-4 text-base md:text-4xl ml-3 font-bold md:font-normal text-zinc-300">
                youremail@gmail.com
              </div>
            </div>
          </div>

          <div className="border  border-zinc-500 contact mt-6 md:mt-0  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
           <a target="__blank" href="#">
           <div className=" text-4xl md:text-6xl text-blue-400  flex justify-center items-center  ">
              <FaLinkedin />
              <div className="hover:text-red-500 underline underline-offset-4 text-2xl md:text-4xl ml-3 text-zinc-300">
                linkedin 
              </div>
            </div>
           </a>
          </div>
        
        </div>

        <div className="">

          <div className="mt-0 md:mt-6 border  border-zinc-500 contact  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <a target="__blank" href="#">
            <div className=" text-4xl md:text-6xl text-black   flex justify-center items-center  ">
              <FaGithub />
              <div className=" hover:text-red-500 underline underline-offset-4text-2xl md:text-4xl ml-3 text-zinc-300">
              github
              </div>
            </div>
            </a>
          </div>

        </div>


      </div>

    </div>
  );
};

export default FourthPage;


"use client";
import { useRef } from 'react';
import { FaToolbox, FaFileDownload, FaMapPin, FaHandshake } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandTypescript } from "react-icons/tb";
import { useModal } from "../context/ModalContext";
import vector1 from "../image/afro-man-standing-drinking-beverage-character.png";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import TextAnimation from "../functions/TextAnimation";
import img from "../image/freepik__the-style-is-candid-image-photography-with-natural__79076.png";
import { useRouter } from "next/navigation";
import { Hiremodal } from '../functions/modals/Hiremodal';
import { Cvmodal } from '../functions/modals/Cvmodal';

export default function Hero() {
  const { openModal } = useModal();
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const HireModal = () => {
    openModal(<Hiremodal />);
  }

  const cvModal = () => {
    openModal(<Cvmodal />);
  }

  const variants = {
    hidden: { x: -100, rotate: -6, opacity: 0 },
    visible: { 
      x: 10, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const techIcons = [
    { icon: <TbBrandTypescript size={40} />, color: "text-cyan-700", name: "TypeScript" },
    { icon: <RiNextjsLine size={40} />, color: "text-black", name: "Next.js" },
    { icon: <RiTailwindCssFill size={40} />, color: "text-cyan-600", name: "Tailwind CSS" },
    { icon: <TbBrandFramerMotion size={40} />, color: "text-pink-500", name: "Framer Motion" }
  ];

  if (isInView) {
    controls.start('visible');
  }

  return (
    <section className="flex-grow grid grid-cols-1 gap-8 justify-items-center content-center min-h-screen py-12 px-4 font-montserrat">
      {/* Main Content Card */}
      <motion.div 
        className="grid grid-cols-1 items-center justify-center max-w-4xl mx-auto"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <Image 
            className="absolute -top-16 -left-16 z-10 w-32 h-32 object-contain" 
            src={vector1} 
            alt="Man standing illustration" 
            width={128} 
            height={128} 
            priority
          />
          <div className="bg-gradient-to-br from-blue-900 to-slate-700 bg-opacity-50 grid justify-items-center shadow-bottom-dark w-60 lg:w-96 xl:w-96 p-3 h-80">
                <motion.div 
                className="relative p-1 text-xl text-gray-900 bg-gradient-to-br from-gray-400 to-slate-300 shadow-bottom-dark w-56 lg:w-96 xl:w-96 lg:h-80 backdrop-blur-sm -translate-x-1 -rotate-6 flex flex-col"
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                >
                  <Image className="w-full h-full object-cover" src={img} alt="img" width={500} height={300} priority/>
                
                
                  {/*pin*/}
                  <motion.span 
                className="absolute top-0 right-0 translate-x-3 -translate-y-3 rotate-45 z-20 hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 0 }}
              >
                <FaMapPin size={40} fill="red"/>
              </motion.span>               
               
               
                {/*text*/}
                <div className="text-[12px] absolute top-0 left-0 right-0 p-1 flex flex-col w-full h-full content-around justify-around items-center"><p className="text-xl font-bold text-slate-200">Hello There!</p>
                <span className="text-lg text-slate-300 font-bold">Welcome to my portfolio</span>
                <TextAnimation/>
                <motion.button 
                  className="mt-6 px-6 py-2 bg-gradient-to-br from-blue-600 to-slate-700 rounded-md shadow-lg text-white font-medium hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/project')}
                >
                  Explore My Work
                </motion.button>                </div>
                </motion.div>
              </div>
          
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button 
          onClick={HireModal}
          className="flex items-center justify-center gap-2 shadow-lg px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaHandshake />
          Hire Me
        </motion.button>
        
        <motion.button 
          onClick={cvModal}
          className="flex items-center justify-center gap-2 shadow-lg px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-lg hover:from-gray-800 hover:to-gray-950 transition-all"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaFileDownload size={15}/>
          Download CV
        </motion.button>
      </motion.div>

      {/* Tech Stack Footer */}
      <motion.div 
        className="sticky bottom-0 w-full max-w-4xl py-4 bg-gray-800/80 backdrop-blur-md shadow-lg rounded-t-xl grid justify-items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl text-slate-100 font-bold flex items-center gap-2 mb-3">
          <FaToolbox className="text-yellow-400"/> Crafted With
        </h2>
        <ul className="w-full grid grid-cols-4 justify-items-center gap-4 px-4">
          {techIcons.map((tech, index) => (
            <motion.li 
              key={index}
              className={`${tech.color} flex flex-col items-center`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech.icon}
              <span className="text-xs text-gray-300 mt-1">{tech.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
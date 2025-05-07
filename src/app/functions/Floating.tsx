"use client";
import { motion } from "framer-motion";
import { FaAddressBook, FaArtstation, FaBaby, FaBook, FaBuffer, FaCode, FaCreativeCommons, FaFeather, FaLightbulb, FaPaperclip, FaPen } from "react-icons/fa";
import { FaAnchor, FaAndroid, FaPencil, FaRainbow } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
//import book from '../image/open-book-7203077_1280.png';
import { BiAlarm, BiServer } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";

const icons = [
  { id: 1, Icon: <FaFeather size={30} fill="red"/>, x: -100, y: -100 },
  { id: 2, Icon: <FaPaperclip size={30} fill="blue"/>, x: 100, y: 50 },
  { id: 3, Icon: <FaLightbulb size={30} fill="orange"/>, x: -100, y: 100 },
  { id: 4, Icon: <FiSend size={30} fill="darkblue"/>, x: 200, y: 250 },
  { id: 5, Icon: <FaCode size={30} fill="gray"/>, x:  -200, y: 150 },
  { id: 6, Icon: <FiSend size={30} fill="green"/>, x: 80, y: -100 },
  { id: 7, Icon: <FaStarHalfAlt size={30} fill="blue"/>, x: 10, y: -200 },
  { id: 8, Icon: <FaBaby size={30} fill="blue"/>, x: 200, y: -50 },
  { id: 9, Icon: <FaAndroid size={30} fill="darkblue"/>, x: 200, y: -200 },
  { id: 10, Icon: <RiTailwindCssLine size={30}/>, x: -400, y: -20 },
  { id: 11, Icon: <RiReactjsLine size={30} fill="cyan"/>, x: 200, y: 200 },
  { id: 13, Icon:<FaBook size={30} fill="lightblue"/> , x: 60, y: 160 },
  { id: 14, Icon: <FaPencil size={30} fill="red"/>, x: 100, y: -100 },
  { id: 15, Icon: <FaRainbow size={30} fill="pink"/>, x: -90, y: -50 },
  { id: 16, Icon: <FaCreativeCommons size={30} fill="black"/>, x: -350, y: 200 },
  { id: 17, Icon: <FaPen size={30} fill="slate"/>, x: -150, y: -50 },
  { id: 18, Icon: <BiServer size={30} fill="blue"/>, x: -240, y: -200 },
  { id: 19, Icon: <BiAlarm size={30} fill="green"/>, x: 100, y: -200 },
  { id: 20, Icon: <FaAddressBook size={30} fill="orange"/>, x: 1, y: -200 },
  { id: 21, Icon: <FaArtstation size={30} fill="aquamarine"/>, x: -240, y: 50 },
  { id: 22, Icon: <FaBuffer size={30} fill="#5d01fd"/>, x: -350, y: 20 },
  { id: 23, Icon: <FaAnchor size={30} fill="#03a9f4"/>, x: -200, y: 5 },

];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-5]">
      {icons.map(({ id, Icon, x, y }) => (
        <motion.div
          key={id}
          className="absolute text-gray-800 opacity-50 top-4 left-3"
          initial={{ x, y }}
          animate={{ y: [y, y - 20, y] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3 + Math.random() * 2, // Randomized duration
          }}
          style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
        >
          {Icon}
        </motion.div>
      ))}
    </div>
  );
}

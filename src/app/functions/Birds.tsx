"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import birds from "../image/136947696_10348939.png";

export const Birds = ({count = 5}) => {
  const flyingBirds = Array.from({ length: count }, () => birds);

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        overflow: "hidden",
        width: "100%",
        height: "100px",
        top: 0,
      }}
    >
      {flyingBirds.map((bird, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            right: 0,
          }}
          initial={{ x: "100vw", y: 10 }}
          animate={{ x: "-200vw", y: 20 }}
          transition={{
            duration: 15,
            delay: index * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Add flapping effect */}
          <motion.div
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image className="object-cover" src={bird} alt="Flying bird" width={250} height={250} priority/>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

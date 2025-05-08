'use client'
import { BiLogoGmail, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const Cta: React.FC = () => {
    const socialLinks = [
        {
            id: 0,
            name: "Twitter",
            url: "https://twitter.com/@abdul6k",
            style: "bg-gradient-to-br from-blue-400 to-blue-600",
            icon: <FaXTwitter className="text-white" />,
         },

         {
            id: 1,
            name: "Gmail",
            url: "mailto:diltech@gmail.com",
            style: "bg-gradient-to-br from-red-500 to-red-600",
            icon: <BiLogoGmail className="text-white" />,
         },

         {
            id: 2,
            name: "WhatsApp",
            url: "https://wa.me/09032877519",
            style: "bg-gradient-to-br from-green-500 to-green-600",
            icon: <BiLogoWhatsapp className="text-white" />,
         },

         {
            id: 3,
            name: "LinkedIn",
            url: "https://linkedin.com/in/profile/abdulmumin-ibrahim-1b0a11199",
            style: "bg-gradient-to-br from-blue-600 to-blue-800",
            icon: <BiLogoLinkedin className="text-white" />,
         },
]
const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverEffect = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };
  const tapEffect = { scale: 0.9 };

    return (
        <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-gray-500 mb-4"
          >
            Let&apos;s Build Something Amazing Together!
          </motion.h2>
  
          <motion.p
            variants={item}
            className="text-xl text-gray-500 mb-8"
          >
            Get in touch through any of these channels:
          </motion.p>
  
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map(({ id, name, url, style, icon }) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                className={`${style} w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                aria-label={`Contact me on ${name}`}
                title={name}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {icon}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
};

export default Cta;
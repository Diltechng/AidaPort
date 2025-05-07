'use client';
import { useRef } from 'react';
import { FaMapPin, FaLightbulb, FaUsers, FaBrain, FaPalette, FaSyncAlt } from "react-icons/fa";
import { motion, useInView, useAnimation } from 'framer-motion';

const Why: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    if(isInView){
        controls.start('visible');
    }

    const skills = [
        {
            title: "Responsible",
            description: "I take full responsibility for every task, ensuring quality, timely delivery, and clear communication. You can trust me to handle your project with care and professionalism.",
            icon: <FaMapPin className="text-red-500" size={24} />
        },
        {
            title: "Critical Thinking",
            description: "I approach problems with a logical and analytical mindset, ensuring innovative and effective solutions for every challenge.",
            icon: <FaBrain className="text-blue-500" size={24} />
        },
        {
            title: "Smart Solutions",
            description: "I leverage my expertise to provide efficient and creative solutions tailored to your specific needs.",
            icon: <FaLightbulb className="text-yellow-500" size={24} />
        },
        {
            title: "Creative Design",
            description: "I craft visually appealing and user-friendly designs that align with your brand and goals.",
            icon: <FaPalette className="text-purple-500" size={24} />
        },
        {
            title: "Team Player",
            description: "I collaborate effectively with teams, ensuring seamless communication and shared success.",
            icon: <FaUsers className="text-green-500" size={24} />
        },
        {
            title: "Adaptability",
            description: "I thrive in dynamic environments, quickly adapting to new challenges and technologies.",
            icon: <FaSyncAlt className="text-cyan-500" size={24} />
        },
    ];

    return (
        <motion.section 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            ref={ref}
            className="flex-grow grid justify-items-center items-center py-20 px-4"
        >
            <motion.div 
                variants={itemVariants}
                className="text-center mb-16 max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-700 mb-6">
                    Why Choose Me?
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium">
                    I combine technical expertise with creative problem-solving to deliver exceptional results for your projects.
                </p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-700"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-gray-700 rounded-full">
                                {skill.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-center text-white mb-4">
                            {skill.title}
                        </h3>
                        <p className="text-gray-300 text-center">
                            {skill.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Why;
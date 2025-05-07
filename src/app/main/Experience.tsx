'use client'; // Important for client-side components in Next.js 13+

import { FaBug, FaCode, FaSyncAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
    const services = [
        {
            title: "Project Development",
            description: "Define software requirements and project scope to ensure alignment with business goals.",
            icon: <FaCode className="text-blue-400" size={24} />,
            color: "from-blue-900 to-blue-700"
        },
        {
            title: "Writing & Debugging",
            description: "Develop high-quality, user-friendly software with rigorous testing protocols.",
            icon: <FaBug className="text-green-400" size={24} />,
            color: "from-green-900 to-green-700"
        },
        {
            title: "Troubleshooting",
            description: "Resolve technical issues to maintain system reliability and peak performance.",
            icon: <FaTools className="text-yellow-400" size={24} />,
            color: "from-amber-900 to-amber-700"
        },
        {
            title: "Maintenance & Updates",
            description: "Keep existing programs current with modern standards and technologies.",
            icon: <FaSyncAlt className="text-purple-400" size={24} />,
            color: "from-purple-900 to-purple-700"
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
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

    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex-grow grid justify-items-center items-center py-20 px-4"
        >
            <motion.h2 
                variants={item}
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6"
            >
                My Services
            </motion.h2>
            
            <p className="text-xl md:text-2xl text-blue-800 font-medium mb-4">
                    Professional Software Development Services
                </p>
            
            <p className="text-lg text-gray-600">
                    I deliver comprehensive solutions from concept to deployment, ensuring robust and scalable applications.
                </p>
                

            <motion.div 
                variants={container}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full"
            >
                {services.map((service, index) => (
                    <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ 
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className={`bg-gradient-to-br ${service.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-white`}
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                            {service.icon}
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">
                        {service.title}
                    </h3>
                    <p className="text-gray-100 text-center">
                        {service.description}
                    </p>
                </motion.div>
            ))}
            </motion.div>
        </motion.section>
    );
};

export default Experience;
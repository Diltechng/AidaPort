'use client';
import { FaBoxesStacked, FaHouse } from "react-icons/fa6";
import { useSidebar } from "../context/SidebarContext";
import { motion } from 'framer-motion';
import { FaBlog, FaBook, FaComment, FaInfoCircle, FaQuestion } from "react-icons/fa";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export const Sidebar = () => {
    type SidebarType = {
        id: number;
        Icon: ReactNode;
        text: string;
        link: string;
    };

    const sidebar: SidebarType[] = [
        { id: 1, Icon: <FaHouse className="text-amber-400" size={24} />, text: 'Home', link: '/' },
        { id: 2, Icon: <FaBook className="text-emerald-400" size={24} />, text: 'History', link: '/history' },
        { id: 3, Icon: <FaBoxesStacked className="text-blue-400" size={24} />, text: 'Projects', link: '/project' },
        { id: 4, Icon: <FaBlog className="text-purple-400" size={24} />, text: 'Blog', link: '/blog' },
        { id: 5, Icon: <FaComment className="text-cyan-400" size={24} />, text: 'Contact', link: '/contact' },
        { id: 6, Icon: <FaInfoCircle className="text-yellow-400" size={24} />, text: 'About', link: '/about' },
        { id: 7, Icon: <FaQuestion className="text-red-400" size={24} />, text: 'FAQs', link: '/faqs' },
    ];

    const { openSidebar, stopPropagation, toggleSidebar } = useSidebar();
    const { theme } = useTheme();

    return (
        <>
            {openSidebar && (
                <div 
                    className="inset-0 min-h-screen fixed min-w-screen bg-black z-50 bg-opacity-50 backdrop-blur-sm" 
                    onClick={toggleSidebar}
                >
                    <motion.div 
                        initial={{ y: '100vh' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                        className="fixed top-20 z-50 left-0 w-64 flex-grow shadow-lg rounded-lg mx-4"
                        style={{
                            background: theme === "light"
                                ? "linear-gradient(to bottom right, #f5f5f4, #e7e5e4)"
                                : "linear-gradient(to bottom right, #1e293b, #0f172a)",
                        }}
                        onClick={stopPropagation}
                    >
                        <div className="grid grid-cols-2 gap-4 p-4">
                            {sidebar.map(({ id, Icon, text, link }) => (
                                <Link 
                                    href={link} 
                                    key={id} 
                                    className="group p-4 h-28 flex flex-col items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    style={{
                                        background: theme === "light"
                                            ? "linear-gradient(145deg, #ffffff, #e6e6e6)"
                                            : "radial-gradient(circle, rgba(30,41,59,1) 0%, rgba(15,23,42,1) 100%)",
                                    }}
                                >
                                    <div className="mb-2 group-hover:text-white transition-colors duration-300">
                                        {Icon}
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                                        {text}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};
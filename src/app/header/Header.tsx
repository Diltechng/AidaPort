'use client';
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export default function Header() {
    const { toggleSidebar, openSidebar } = useSidebar();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'History', path: '/history' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'About', path: '/about' }
    ];

    const headerVariants = {
        hidden: { y: -100 },
        visible: { 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className={`sticky top-0 z-50 place-items-center place-content-center w-full py-4 transition-all duration-300`}
        >
            <div className={`container mx-auto px-4 flex justify-evenly items-center w-4/5 lg:w-1/2 xl:w-1/2 rounded-xl ${
                scrolled 
                    ? 'backdrop-blur-xl bg-gray-500 bg-opacity-60 text-slate-300 shadow-sm' 
                    : 'bg-transparent'
            }`}>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link 
                        href="/" 
                        className="text-2xl font-bold dark:text-white"
                        aria-label="Home"
                    >
                        Abdul<span className="text-green-600">.</span>
                    </Link>
                </motion.div>

                <nav className="flex items-center gap-6">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-6">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.path}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                variants={navItemVariants}
                            >
                                <Link 
                                    href={link.path}
                                    className="font-medium hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    {isMounted && (
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{duration: 3, repeat: Infinity, repeatType: 'reverse'}}
                            className="p-2 rounded-full focus:outline-none"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? (
                                <span className="text-2xl">🌞</span>
                            ) : (
                                <span className="text-2xl">🌚</span>
                            )}
                        </motion.button>
                    )}

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={toggleSidebar}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 focus:outline-none"
                        aria-label={openSidebar ? "Close menu" : "Open menu"}
                    >
                        {openSidebar ? (
                            <FaTimes className="text-2xl dark:text-white" />
                        ) : (
                            <FaBars className="text-2xl dark:text-white" />
                        )}
                    </motion.button>
                </nav>
                <Sidebar/>
            </div>
        </motion.header>
    );
}
'use client';
import { ReactNode, useRef } from "react";
import { FaCode, FaCss3, FaGithub, FaHtml5, FaLeaf, FaMapPin, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNetlify, SiPostman } from "react-icons/si";
import { FaJs } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssLine, RiVercelFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import Image from "next/image";
import { motion, useAnimation, useInView } from 'framer-motion';
import img from "../image/freepik__vector-illustration-of-an-abstract-concept-vibrant__79078.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GitHubRepos from "../functions/components/styledComponents/Git";
import Link from "next/link";

export default function About() {
    type StackProps = {
        id: number,
        className: string,
        name: string,
        icon: ReactNode
    }

    const stack: StackProps[] = [
        { id: 0, className: "bg-slate-300 text-gray-700", name: "MongoDB", icon: <FaLeaf fill="green" /> },
        { id: 1, className: "bg-black text-slate-300", name: "Express", icon: <FaJs fill="yellow" size={30} /> },
        { id: 2, className: "bg-blue-600 text-slate-300", name: "React", icon: <FaReact /> },
        { id: 3, className: "bg-slate-300 text-black", name: "Node", icon: <FaNodeJs fill="green" /> },
        { id: 4, className: "bg-blue-950 text-slate-300", name: "PHP", icon: <FaPhp /> },
        { id: 5, className: "bg-blue-900 text-slate-300", name: "CSS", icon: <FaCss3 fill="#2965f1" /> },
        { id: 6, className: "bg-slate-100 text-slate-500", name: "HTML", icon: <FaHtml5 fill="#f16a2f" /> },
        { id: 7, className: "bg-black text-slate-200", name: "NextJs", icon: <RiNextjsLine /> },
        { id: 8, className: "bg-blue-500 text-slate-300", name: "TypeScript", icon: <BiLogoTypescript /> },
        { id: 9, className: "bg-cyan-700 text-slate-300", name: "TailwindCss", icon: <RiTailwindCssLine /> },
        { id: 10, className: "bg-slate-300 text-gray-700", name: "GitHub", icon: <FaGithub /> },
        { id: 11, className: "bg-slate-300 text-gray-700", name: "Vercel", icon: <RiVercelFill /> },
        { id: 12, className: "bg-slate-300 text-gray-700", name: "Netlify", icon: <SiNetlify /> },
        { id: 13, className: "bg-slate-300 text-gray-700", name: "Postman", icon: <SiPostman /> },
        { id: 14, className: "bg-slate-300 text-gray-700", name: "Three.js", icon: <TbBrandThreejs /> },
        { id: 15, className: "bg-red-500 text-gray-200", name: "Framer", icon: <TbBrandFramerMotion /> },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    const variants = {
        hidden: {
            x: -100,
            rotate: -6,
            opacity: 0
        },
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

    if (isInView) {
        controls.start('visible');
    }

    return (
        <section className="min-h-screen w-full overflow-x-hidden flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Profile Card */}
            <motion.div
                className="relative w-full max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-gradient-to-br from-blue-900 to-slate-700 bg-opacity-70 rounded-xl shadow-2xl p-4 backdrop-blur-sm">
                    <motion.div
                        className="relative p-4 bg-gradient-to-br from-gray-400 to-slate-300 shadow-xl w-full aspect-[4/3] rounded-lg overflow-hidden"
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <Image
                            className="w-full h-full object-cover absolute inset-0"
                            src={img}
                            alt="Abstract background"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Decorative Pin */}
                        <motion.span
                            className="absolute top-2 left-1/2 -translate-y-8 -translate-x-1/2 rotate-12 z-20 hover:scale-125 transition-transform duration-300"
                            whileHover={{ rotate: 0 }}
                        >
                            <FaMapPin size={24} fill="red" />
                        </motion.span>

                        {/* Profile Info */}
                        <div className="relative z-10 h-full flex flex-col justify-center p-4 bg-black/40 text-white backdrop-blur-[1px]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold text-blue-300">3+</span>
                                    <span className="text-lg">Years of Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold text-blue-300">5+</span>
                                    <span className="text-lg">Completed Projects</span>
                                </div>
                                <div>
                                    <span className="text-blue-300">Residence:</span> Nigeria 🇳🇬
                                </div>
                                <div>
                                    <span className="text-blue-300">City:</span> Minna
                                </div>
                                <div>
                                    <span className="text-blue-300">Gender:</span> Male
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
                className="w-full max-w-4xl mt-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-hidden">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <FaCode className="text-blue-400" /> Tech Stack
                    </h2>

                    <div className="px-2">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={16}
                            slidesPerView={5}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            breakpoints={{
                                320: { slidesPerView: 3 },
                                480: { slidesPerView: 4 },
                                640: { slidesPerView: 5 },
                                1024: { slidesPerView: 6 }
                            }}
                        >
                            {stack.map(({ id, className, name, icon }) => (
                                <SwiperSlide key={id} className="!h-auto">
                                    <motion.div
                                        className={`${className} p-3 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 h-full min-h-[100px] cursor-grab active:cursor-grabbing`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div className="text-2xl">{icon}</div>
                                        <span className="text-sm font-medium text-center">{name}</span>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="w-full max-w-4xl mt-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-hidden">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <FaGithub className="text-gray-700" /> My GitHub Repositories
                    </h2>

                              <GitHubRepos/>
                              <Link className="text-blue-600" href="/repositories" target="blank">See More..</Link>
                </div>
            </motion.div>
        </section>
    );
}
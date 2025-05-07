'use client';
import Link from "next/link";
import {motion} from "framer-motion";
import { useRouter } from "next/navigation";
import ContentSidebar from "../functions/components/styledComponents/ContentSidebar"
import { FaBoxesStacked } from "react-icons/fa6";

export default function ProjectSlide(){
    const router = useRouter();
    return(
        <section className="flex w-full items-center justify-center content-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl p-6 overflow-hidden">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                                    <FaBoxesStacked className="text-gray-700" /> My Projects
                                </h2>
            <ContentSidebar/>
            <motion.button 
                  className="mt-6 px-6 py-2 rounded-md shadow-lg text-white font-medium hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/project')}
                >
                  See All
                </motion.button> 
            </div>

        </section>
    )
}
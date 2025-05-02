'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import ContentSidebar from "../../functions/components/styledComponents/ContentSidebar";
import SliderBox from "../../functions/Slider";
import { FaEllipsisV, FaLink, FaTimes, FaSpinner, FaCalendarAlt, FaUserTie, FaCode } from "react-icons/fa";
import { useFilebar } from "../../context/FilebarContext";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ProjectProps = {
    title: string;
    tech: string;
    description: string;
    type: string;
    status: string;
    client: string;
    link?: string;
    images?: string[];
    completedOn?: string;
}

type ApiResponse = {
    project: ProjectProps | null;
    error?: string;
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export default function SingleProject() {
    const { toggleFileBar, openFileBar } = useFilebar();
    const [project, setProject] = useState<ProjectProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const id = params?.id as string;

    useEffect(() => {
        const fetchProject = async () => {
            if (!id) {
                setError("No project ID provided");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await fetch(`/api/project/${id}`, { 
                    cache: "no-store",
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
                
                const data: ApiResponse = await response.json();
                if (!data.project) throw new Error("Project not found");
                
                setProject(data.project);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err instanceof Error ? err.message : "Failed to load project");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 p-6"
            >
                {/* Sidebar Skeleton */}
                <div className="hidden lg:block w-64 h-full bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                
                {/* Main Content Skeleton */}
                <div className="space-y-6 overflow-hidden">
                    <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-xl w-3/4 mx-auto animate-pulse"></div>
                    
                    <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaSpinner className="text-blue-500 text-4xl animate-spin" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn}
                                className="h-32 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"
                            ></motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900"
            >
                <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg mx-4 border border-gray-200 dark:border-gray-700">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaTimes className="text-red-500 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Project</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
                    <Link 
                        href="/" 
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-grow min-h-screen dark:bg-gray-900"
        >
            <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 p-6 overflow-x-hidden">
                <button 
                    className="z-40 fixed top-30 left-4 lg:hidden bg-white p-2 rounded-full shadow-lg bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" 
                    onClick={toggleFileBar}
                    aria-label={openFileBar ? "Close sidebar" : "Open sidebar"}
                >
                    {!openFileBar ? <FaEllipsisV /> : <FaTimes />}
                </button>

                <ContentSidebar />
                
                {project ? (
                    <motion.div variants={staggerContainer} className="space-y-8 w-full overflow-x-hidden">
                        <motion.div variants={fadeIn} className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 px-4">
                                {project.title || 'Untitled Project'}
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} className="relative w-full overflow-hidden">
                            {Array.isArray(project.images) && project.images.length > 0 ? (
                                <div className="w-full aspect-video">
                                    <SliderBox images={project.images} />
                                </div>
                            ) : (
                                <div className="w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <FaCode className="text-4xl text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-500 dark:text-gray-400">No images available for this project</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                         
                        {project.link && (
                            <motion.div variants={fadeIn} className="flex justify-center px-4">
                                <Link 
                                    className="flex items-center justify-center space-x-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Live Preview</span>
                                    <FaLink className="text-sm" />
                                </Link>
                            </motion.div>
                        )}
                        
                        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 px-4">
                            {project.tech.split(',').map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-gray-400 dark:bg-gray-800 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </motion.div>
                        
                        <motion.div 
                            variants={fadeIn}
                            className="w-full p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 mx-auto max-w-4xl text-gray-700"
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <FaCode className="text-blue-500 mr-2" />
                                Project Description
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {project.description || "No description available"}
                            </p>
                        </motion.div>
                        
                        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto px-4">
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <FaUserTie className="text-purple-500 mr-2" />
                                    Project Details
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 dark:text-gray-400 w-24">Type:</span>
                                        <span className="font-medium">{project.type || 'Not specified'}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <FaCalendarAlt className="text-blue-500 mr-2" />
                                    Order Details
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 dark:text-gray-400 w-24">Status:</span>
                                        <span className={`font-medium ${
                                            project.status?.toLowerCase() === 'completed' ? 'text-green-500' : 
                                            project.status?.toLowerCase() === 'in progress' ? 'text-yellow-500' : 
                                            'text-gray-700 dark:text-gray-300'
                                        }`}>
                                            {project.status || 'Unknown'}
                                        </span>
                                    </div>
                                    {project.completedOn && (
                                        <div className="flex items-center">
                                            <span className="text-gray-500 dark:text-gray-400 w-24">Completed:</span>
                                            <span className="font-medium flex items-center">
                                                <FaCalendarAlt className="text-gray-400 mr-2 text-sm" />
                                                {project.completedOn}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <span className="text-gray-500 dark:text-gray-400 w-24">Client:</span>
                                        <span className="font-medium">{project.client || 'Unknown'}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 dark:text-gray-400">No project data available</p>
                    </div>
                )}
            </div>
        </motion.section>
    );
}
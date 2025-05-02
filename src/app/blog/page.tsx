'use client';
import Image from "next/image";
import { FaBlog, FaCalendarAlt, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import img from "../image/afro-man-standing-drinking-beverage-character.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
    type BlogProps = {
        _id: string;
        topic: string;
        article: string;
        createdAt?: string;
        images: string[];
        updatedAt?: string;
    }
    
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch("/api/blog", { cache: "no-store" });
                if (!res.ok) throw new Error(`Failed to load blogs. Status: ${res.status}`);
                const data = await res.json();
                if (!data.post) throw new Error("No blog data received");
                setBlogs(data.post);
            } catch (err) {
                console.error("Failed to fetch blogs:", err);
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                setBlogs([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const formatDate = (dateString?: string) => {
        if (!dateString) return "Unknown date";
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header with animation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6 shadow-lg"
                    >
                        <FaBlog className="text-indigo-600 text-3xl" />
                    </motion.div>
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        My Blog Posts
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore my thoughts, stories and creative ideas
                    </p>
                </motion.div>

                {/* Error state */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 flex items-center"
                    >
                        <FaExclamationTriangle className="mr-3 flex-shrink-0" />
                        <div>
                            <h3 className="font-medium">Couldn&#39;t load blogs</h3>
                            <p>{error}</p>
                        </div>
                    </motion.div>
                )}

                {/* Loading state with inline skeletons */}
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(4)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200 animate-pulse"></div>
                                <div className="p-6">
                                    <div className="h-7 bg-gray-200 rounded-full animate-pulse mb-4 w-3/4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-5/6"></div>
                                        <div className="h-4 bg-gray-200 rounded-full animate-pulse w-2/3"></div>
                                    </div>
                                    <div className="mt-6 h-4 bg-gray-200 rounded-full animate-pulse w-1/3"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!isLoading && blogs.length === 0 && !error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-2xl font-medium text-gray-700 mb-2">No articles yet</h3>
                        <p className="text-gray-500">Check back later for new posts</p>
                    </motion.div>
                )}

                {/* Blog List */}
                {!isLoading && blogs.length > 0 && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {blogs.map(({ _id, topic, article, images, createdAt }) => (
                            <motion.div 
                                key={_id}
                                variants={item}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Link 
                                    href={`/blog/${_id}`}
                                    className="group block h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={images[0] || img}
                                            alt={topic}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            placeholder="blur"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className="flex items-center text-sm text-white/90">
                                                <FaCalendarAlt className="mr-2" />
                                                <span>{formatDate(createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                                            {topic}
                                        </h2>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {article}
                                        </p>
                                        <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                                            Read more
                                            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
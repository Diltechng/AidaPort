'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCalendar, FaFolder, FaSpinner } from "react-icons/fa";
import { TbMoodEmptyFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import img from "../image/open-book-7203077_1280.png";

type IProject = {
  _id: string;
  title: string;
  tech: string;
  description?: string;
  images?: string[];
  createdAt?: string;
};

export default function ProjectPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/project", { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`Failed to fetch projects: ${res.status}`);
        }

        const data = await res.json();
        setProjects(data.project || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "No date";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex flex-col items-center p-6 min-h-screen"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        My Projects
      </motion.h1>

      {loading && (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="animate-pulse bg-gray-200 h-80 rounded-xl"
            />
          ))}
        </div>
      )}

      {error && (
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md max-w-md"
        >
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Projects</h2>
          <p className="text-gray-600 mb-6 text-center">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      )}

      {!loading && !error && projects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md"
        >
          <TbMoodEmptyFilled className="text-5xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">No Projects Found</h2>
          <p className="text-gray-600 mt-2">You haven't created any projects yet.</p>
        </motion.div>
      )}

      {!loading && projects.length > 0 && (
        <div className="w-full max-w-7xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={`/project/${project._id}`}
                  className="group relative block rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white hover:border-indigo-200"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.images?.[0] || img}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FaFolder className="absolute top-4 left-4 text-yellow-400 text-2xl drop-shadow-lg" />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900 line-clamp-1 text-lg">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tech.split(',').map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="inline-flex items-center">
                        <FaCalendar className="mr-1.5 text-gray-400" />
                        {formatDate(project.createdAt)}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
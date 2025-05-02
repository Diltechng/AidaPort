'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiAlertTriangle } from "react-icons/fi";
import Subscribe from "../../functions/components/styledComponents/Subscribe";
import Link from "next/link";

type BlogProps = {
  topic: string;
  article: string;
  images?: string[];
  createdAt?: string;
}

type ApiResponse = {
  post: BlogProps | null;
  error?: string;
}

export default function BlogPage() {
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const getBlog = async () => {
      if (!id) {
        setError("No blog ID provided");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`/api/blog/${id}`, { 
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          }
        });
        
        if (!res.ok) throw new Error(`Failed to fetch blog: ${res.status}`);
        
        const data: ApiResponse = await res.json();
        if (!data.post) throw new Error("Blog post not found");

        setBlog(data.post);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    
    getBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Header skeleton */}
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/3 animate-pulse"></div>
            </div>
            
            {/* Content skeleton */}
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" 
                  style={{ width: `${Math.random() * 30 + 70}%` }}></div>
              ))}
            </div>
            
            {/* Image skeleton */}
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl mt-8 animate-pulse"></div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 text-red-700 dark:text-red-200 p-6 rounded-lg">
            <div className="flex items-start">
              <FiAlertTriangle className="flex-shrink-0 h-5 w-5 mt-0.5 mr-3" />
              <div>
                <h3 className="text-lg font-medium">Error loading blog post</h3>
                <p className="mt-2">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-200 p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Blog post not found</h1>
            <p className="mb-4">The requested blog post could not be found.</p>
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto bg-white backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
      >
        {blog.images && blog.images.length > 0 && (
          <div className="relative h-64 w-full">
            <Image
              src={blog.images[0]}
              alt={blog.topic || 'Blog header image'}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          <header className="mb-8">
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4"
            >
              {blog.topic || 'Untitled Post'}
            </motion.h1>
            
            {blog.createdAt && (
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <FiCalendar className="mr-2" />
                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            )}
          </header>

          <div className="prose dark:prose-invert max-w-none">
            {blog.article.split('\n\n').map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3 }}
                className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {blog.images && blog.images.length > 1 && (
            <div className="mt-12 grid gap-6">
              {blog.images.slice(1).map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <Image 
                    src={image} 
                    alt={`Blog image ${index + 2}`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.article>
      <div className="mb-12 mt-8 place-items-center">
        <Subscribe/>
    </div>
    </section>

    </>
  );
}
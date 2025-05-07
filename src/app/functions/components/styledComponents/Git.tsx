"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/diltechng/repos");
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      }
    }
    fetchRepos();
  }, []);

  if (!repos.length) return <p className="text-center py-4">Loading repositories...</p>;

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={'auto'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true

        }}
        speed={5000}
        loop={true}
        freeMode={true}
        className="py-2"
      >
        {[...repos, ...repos].map((repo, index) => (
          <SwiperSlide key={`${repo.id}-${index}`} className="!w-[280px]">
            <div className="border p-4 rounded-lg shadow-sm h-full bg-white">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline line-clamp-1"
              >
                {repo.name}
              </a>
              <p className="text-gray-700 mt-1 line-clamp-2 text-sm">
                {repo.description || "No description"}
              </p>
              <div className="flex space-x-4 text-sm text-gray-500 mt-2">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🔀 {repo.forks_count}</span>
                {repo.language && <span>{repo.language}</span>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
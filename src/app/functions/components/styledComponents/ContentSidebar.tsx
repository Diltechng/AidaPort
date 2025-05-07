import { FaFolder, FaReact, FaNodeJs, FaPython, FaJs, FaPhp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useFilebar } from "../../../context/FilebarContext";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

type IProject = {
  _id: string;
  title: string;
  tech: string;
  description?: string;
  images?: string[];
};

export default function ContentSidebar() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { openFileBar } = useFilebar();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/project", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProjects(data.project);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    switch (true) {
      case techLower.includes('php'):
        return <FaPhp className="text-purple-500" size={24} />;
      case techLower.includes('react'):
        return <FaReact className="text-blue-400" size={24} />;
      case techLower.includes('node'):
        return <FaNodeJs className="text-green-500" size={24} />;
      case techLower.includes('python'):
        return <FaPython className="text-yellow-400" size={24} />;
      case techLower.includes('javascript'):
        return <FaJs className="text-yellow-300" size={24} />;
      default:
        return <FaFolder className="text-gray-400" size={24} />;
    }
  };

  return (
    <>
      {openFileBar && (
        <div className="p-4 overflow-y-auto scrollbar-hide">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            autoplay={{ 
              delay: 1000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 }
            }}
            className="project-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id} className="!h-auto !w-[200px]">
                <Link
                  href={`/project/${project._id}`}
                  className="block transition-all duration-200 hover:scale-105 group"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 h-full flex flex-col">
                    {/* Image/Icon Container */}
                    <div className="relative h-32 bg-gray-900 flex items-center justify-center flex-shrink-0">
                      {project.images?.[0] ? (
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} thumbnail`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                          priority={false}
                        />
                      ) : (
                        <div className="text-4xl">
                          {getTechIcon(project.tech)}
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-3 flex-grow">
                      <h3 className="font-medium text-white truncate">
                        {project.title}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-400 truncate">
                          {project.tech}
                        </span>
                        {!project.images?.[0] && (
                          <span className="text-xs px-2 py-1 bg-gray-700 rounded-full whitespace-nowrap">
                            {project.tech.split(',')[0].trim()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
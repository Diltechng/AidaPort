import { FaDownload, FaLinkedin, FaPhone, FaEnvelope} from "react-icons/fa";
import { FiAward, FiBook, FiCode, FiGlobe, FiHeart, FiLink } from "react-icons/fi";
import { btn } from "../components/styledComponents/styled";

export const Cvmodal: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = "/Abdulmumin_Ibrahim.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Abdulmumin_Ibrahim_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col max-h-[90vh]">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white sticky top-0 z-10">
          <h1 className="text-3xl font-bold">Abdulmumin Ibrahim</h1>
          <p className="text-blue-100 mt-2">Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>09032877519</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Abdulmumin6060@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="mr-2" />
              <a 
                href="http://www.linkedin.com/in/abdulmumin-ibrahim-1b0a11199" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-8 flex-grow">
          {/* Career Goals */}
          <section className="space-y-2">
            <div className="flex items-center text-xl font-bold text-blue-700">
              <FiAward className="mr-2" />
              <h2>Career Goals</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To leverage my skills in full-stack development to build innovative, scalable, and user-friendly web applications. 
              I aim to contribute to a dynamic team where I can grow as a developer, solve complex problems, and deliver 
              high-quality solutions that meet user needs.
            </p>
          </section>

          {/* Education */}
          <section className="space-y-2">
            <div className="flex items-center text-xl font-bold text-blue-700">
              <FiBook className="mr-2" />
              <h2>Education</h2>
            </div>
            <div className="pl-8 border-l-4 border-blue-200">
              <h3 className="font-semibold text-gray-800">Bachelor of Science (BSc) in Computer Science</h3>
              <p className="text-gray-600">Federal University Birnin Kebbi, Kebbi State</p>
              <p className="text-gray-500 text-sm">Graduated: November 2023</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <div className="flex items-center text-xl font-bold text-blue-700">
              <FiCode className="mr-2" />
              <h2>Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• React (Next.js)</li>
                  <li>• TypeScript</li>
                  <li>• HTML/CSS</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Node.js, Express</li>
                  <li>• PHP</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• MongoDB</li>
                  <li>• MySQL</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Tools & Languages</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Git, REST APIs</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• PHP</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-2">
            <div className="flex items-center text-xl font-bold text-blue-700">
              <FiLink className="mr-2" />
              <h2>Projects</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Carpay: Car Financing Landing Page</h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                  <li>Developed a responsive landing page using React, TypeScript and TailwindCSS</li>
                  <li>Integrated interactive UI components to enhance user experience</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Naijadealers: Car Listing Site</h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                  <li>Built a full-stack platform using Node.js, Express, and MongoDB</li>
                  <li>Implemented user authentication and CRUD operations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Certificate System</h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                  <li>Created a system for generating certificates using PHP and MySQL</li>
                  <li>Integrated payment gateway for transactions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Kidnapping Report System</h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                  <li>Developed a web-based reporting system using PHP and MySQL</li>
                  <li>Designed admin dashboard for managing reports</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-2">
              <div className="flex items-center text-xl font-bold text-blue-700">
                <FiGlobe className="mr-2" />
                <h2>Languages</h2>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• English (Fluent)</li>
                <li>• Nupe (Native)</li>
                <li>• Hausa (Fluent)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <div className="flex items-center text-xl font-bold text-blue-700">
                <FiHeart className="mr-2" />
                <h2>Interests</h2>
              </div>
              <ul className="space-y-1 text-gray-700">
                <li>• Writing clean and efficient code</li>
                <li>• Bicycle riding</li>
                <li>• Reading the Quran</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Download Button - Sticky Bottom */}
        <div className="p-6 bg-white border-t border-gray-200 sticky bottom-0">
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ background: btn.gradient }}
          >
            <FaDownload />
            Download Full CV (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
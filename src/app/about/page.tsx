'use client';

import { btn } from "../functions/components/styledComponents/styled";

export default function About() {
    return (
        <section className="flex-grow  flex min-h-screen flex-col items-center">
        <div className="p-6 backdrop-blur-md place-items-center font-montserrat">
            <h1 className="text-4xl font-bold text-center mb-6">About me</h1>
            <p className="text-lg leading-relaxed mb-4">
                Hello! I’m Abdulmumin Ibrahim, a passionate full-stack web developer with a strong foundation in computer science and a deep love for building powerful, user-friendly web applications with:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-lg">MERN Stack (MongoDB, Express, React, Node.js)</li>
                <li className="text-lg">PHP & MySQL</li>
                <li className="text-lg">TypeScript</li>
                <li className="text-lg">Next.js</li>
                <li className="text-lg">Bootstrap & Tailwind CSS</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
                I’m passionate about crafting efficient, responsive, and visually appealing websites and applications — whether its a sleek frontend UI, a robust backend API, or a full-scale dynamic project.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                I believe every project tells a story, and I’m here to help bring that story to life — through clean code, creative design, and seamless functionality.
            </p>
            <p className="text-lg leading-relaxed">
                Let’s create something extraordinary together!
            </p>
                    <button
                        className="px-4 py-2 text-white rounded hover:bg-blue-600 mt-2"
                        onClick={() => alert('Let’s work together!')}
                        style={{background: `${btn.gradient}`}}
                    >
                        Contact Me
                    </button>
        </div>
        </section>
    );
}

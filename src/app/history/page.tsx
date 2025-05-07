import Image from 'next/image';
import { FaSchool, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import img from "../image/freepik__vector-illustration-of-an-abstract-concept-vibrant__79078.png"
export default function History() {
    return (
        <section className="flex-grow  flex min-h-screen flex-col items-center">
        <div className="text-center p-5 backdrop-blur-md font-montserrat">
            <h1 className="text-2xl font-bold">History Page</h1>
            <Image 
                src={img} 
                width={500}
                height={500}
                alt="Profile" 
                className="rounded-full my-5 mx-auto" 
            />
            <h2 className="text-xl font-semibold"> Name</h2>
            <p>
                Abdulmumin Ibrahim
            </p>
            <div className="text-left mt-5 space-y-4">
                <p>
                    Abdulmumin Ibrahim is a passionate and dedicated software developer with a strong academic and professional background in computer science. His journey began at Mypa Primary School, where his curiosity for technology first took root. He later advanced to Hillcrest Secondary School, where he honed his analytical and problem-solving skills, setting the stage for his future in the tech industry.
                </p>
                <p>
                    Pursuing his ambition further, Abdulmumin earned a Bachelor’s degree in Computer Science from Federal University Birnin Kebbi. His time at the university deepened his understanding of software development, algorithms, and modern web technologies — shaping him into a versatile and skilled developer.
                </p>
                <p>
                    After completing his studies, Abdulmumin successfully fulfilled his National Youth Service Corps (NYSC), gaining practical experience and contributing to the community.
                </p>
                <p>
                    Currently residing in Minna, Abdulmumin is driven by his passion for programming and technology innovation. He specializes in MERN stack development, PHP & MySQL, TypeScript, Node.js, Express, and modern frontend libraries like React, alongside expertise in Bootstrap and Tailwind CSS for responsive, dynamic user interfaces.
                </p>
                <p>
                    Beyond coding, Abdulmumin enjoys driving, finding it a refreshing way to clear his mind and stay energized for his next big project.
                </p>
                <p>
                    With a vision to continuously grow and make an impact, Abdulmumin remains committed to creating intuitive, high-performance web applications while pursuing advanced studies in Information Technology and Computer Science.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-5">
                <div className="flex flex-col items-center text-center">
                    <FaSchool size={40} className="text-blue-500" />
                    <p className="mt-2 text-lg font-semibold">Primary School</p>
                    <p>Brighter Intl Schools & Mypa Schools</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaSchool size={40} className="text-green-500" />
                    <p className="mt-2 text-lg font-semibold">Secondary School</p>
                    <p>Mypa Colledge, Himma Intl Schools & Hill Crest Intl Schools</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaMapMarkerAlt size={40} className="text-red-500" />
                    <p className="mt-2 text-lg font-semibold">Where I Live</p>
                    <p>Minna, Niger State</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <FaHeart size={40} className="text-pink-500" />
                    <p className="mt-2 text-lg font-semibold">Hobbies</p>
                    <p>Writing Codes & Driving</p>
                </div>
            </div>
        </div>
        </section>
    );
}

import Image, { StaticImageData } from "next/image";
import { FaBlog, FaCalendarAlt } from "react-icons/fa";
import img from "../image/afro-man-standing-drinking-beverage-character.png";
import Link from "next/link";

export default function BlogPage() {
    type BlogProps = {
        id: number;
        title: string;
        content: string;
        date: string;
        img: StaticImageData;
    }

    const blogs: BlogProps[] = [
        { id: 0, title: 'The Art of Mindful Productivity', content: 'Discover how mindfulness can transform your work habits and boost efficiency without burnout.', date: 'May 15, 2023', img: img },
        { id: 1, title: 'Sustainable Living in Urban Spaces', content: 'Practical tips for reducing your carbon footprint while living in the heart of the city.', date: 'June 2, 2023', img: img },
        { id: 2, title: 'The Future of Remote Work', content: 'Exploring how distributed teams are reshaping company cultures and work-life balance.', date: 'June 18, 2023', img: img },
        { id: 3, title: 'Culinary Adventures: Street Food Edition', content: 'A gastronomic journey through the vibrant street food scenes of Southeast Asia.', date: 'July 5, 2023', img: img },
        { id: 4, title: 'Minimalism: More Than Just Aesthetic', content: 'How embracing minimalism can lead to greater mental clarity and financial freedom.', date: 'August 12, 2023', img: img },
        { id: 5, title: 'Digital Detox: Reclaiming Your Attention', content: 'Strategies for breaking free from constant digital stimulation and rediscovering focus.', date: 'September 3, 2023', img: img },
        { id: 6, title: 'Urban Gardening for Beginners', content: 'Turn your balcony into a thriving garden with these easy-to-follow tips and tricks.', date: 'September 22, 2023', img: img },
        { id: 7, title: 'The Psychology of Color in Marketing', content: 'How color choices influence consumer behavior and brand perception.', date: 'October 10, 2023', img: img },
        { id: 8, title: 'Financial Independence for Creatives', content: 'Building sustainable income streams while pursuing your artistic passions.', date: 'November 5, 2023', img: img },
        { id: 9, title: 'Travel Hacks: Packing Light Edition', content: 'How to travel anywhere for any duration with just a carry-on bag.', date: 'December 1, 2023', img: img },
    ]

    return (
        <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                        <FaBlog className="text-indigo-600 text-2xl" />
                    </div>
                    <h1 className="text-4xl font-bold mb-2">My Blog Posts</h1>
                    <p className="text-lg text-gray-600">Thoughts, stories and ideas</p>
                </div>

                {/* Blog List */}
                <div className="space-y-8">
                    {blogs.map(({ id, title, content, date, img }) => (
                        <Link 
                            href={`/blog/${id}`}
                            key={id}
                            className="group block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                        >
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 md:w-48 relative h-48 md:h-auto">
                                    <Image
                                        src={img}
                                        alt={title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 20vw"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <FaCalendarAlt className="mr-1.5" />
                                        <span>{date}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                                        {title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {content}
                                    </p>
                                    <div className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                                        Read more →
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination would go here */}
            </div>
        </section>
    )
}
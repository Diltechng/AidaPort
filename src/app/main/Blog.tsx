'use client';
import Image, { StaticImageData } from "next/image";
import { FaBlog } from "react-icons/fa";
import img from "../image/afro-man-standing-drinking-beverage-character.png";

export const Blog = () => {
    type BlogProps ={
        id: number;
        title: string;
        content: string;
        date: string;
        img?: string | StaticImageData
    }
    const blog: BlogProps[] = [
        { id:0, title: 'Blog 1', content: 'This is the first blog', date: new Date().toLocaleDateString(), img: img},
        { id:1, title: 'Blog 2', content: 'This is the second blog', date: new Date().toLocaleDateString(), img: img },
        { id:2, title: 'Blog 3', content: 'This is the third blog', date: new Date().toLocaleDateString(), img: img },
        { id:3, title: 'Blog 4', content: 'This is the fourth blog', date: new Date().toLocaleDateString(), img: img },
        { id:4, title: 'Blog 5', content: 'This is the fifth blog', date: new Date().toLocaleDateString(), img: img },
        { id:5, title: 'Blog 6', content: 'This is the sixth blog', date: new Date().toLocaleDateString(), img: img },,
        { id:6, title: 'Blog 7', content: 'This is the seventh blog', date: new Date().toLocaleDateString(), img: img },
        { id:7, title: 'Blog 8', content: 'This is the eighth blog', date: new Date().toLocaleDateString(), img: img },
        { id:8, title: 'Blog 9', content: 'This is the ninth blog', date: new Date().toLocaleDateString(), img: img },
        { id:9, title: 'Blog 10', content: 'This is the tenth blog', date: new Date().toLocaleDateString(), img: img },
    ]
    return (
        <section className="grid justify-center flex-grow">
        <div className="w-full h-full">
            <div className="flex flex-wrap justify-between items-center p-4 flex-col">
              <h1 className="text-md font-bold text-blue-900">Subscribe to my Newsletter</h1>
                <form className="px-3 flex flex-wrap justify-between content-between space-x-3">
                <input className="text-xl focus:border-blue-900 border-2 text-gray-500 rounded-md shadow-bottom-dark" type="text"></input>
                <button className="p-3 bg-gradient-to-tr bg-blue-900 to-slate-500 rounded-md shadow-bottom-dark text-slate-100 text-sm place-self-end" type="submit">Subscribe</button>
                </form>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <div className="h-full w-full p-2 bg-blue-900 bg-opacity-20 shadow-bottom-dark">
                <h2 className="text-bold text-xl text-slate-500 text-bold flex p-2 items-center">My Post<FaBlog/></h2>
                <div className="w-full grid grid-cols-1 gap-3 justify-items-start">
                {blog.map(({ id, title, content, date, img }) => (
                            <div key={id} className="w-full bg-slate-300 text-gray-700 p-4 rounded-md shadow-bottom-dark flex items-center space-x-2">
                                <Image src={img} alt="thumb" width={50} height={50} priority placeholder="blur" blurDataURL="data:image/png;base64,..."/>
                                <span>{title}</span>
                                <span>{content}</span>
                                <span>{date}</span>
                            </div>
                      ))}

                  </div>

        </div>
        </div>
        </div>
        </section>
    )
}

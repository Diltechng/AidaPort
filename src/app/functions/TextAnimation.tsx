"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TextAnimation = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "My Name is Abdulmumin Ibrahim",
        "I am a MERN stack Developer",
        "I am a PHP & MySQL Developer",
        "I use TailwindCSS, BootstrapCss and CSS3 for styling",
        "I use Framer Motion for animations",
        "I use Typescript for type checking",
        "I hope you find me worthy for collaborations and your projects",
      ],
      typeSpeed: 90,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-1/2 flex flex-wrap items-center justify-center text-center text-lg lg:text-3xl xl:text-4xl font-mono p-1 text-slate-300">
           <span ref={typedElement} />
    </div>
  );
};

export default TextAnimation;

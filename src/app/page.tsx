import About from "./main/About";
import Why from "./main/Why";
import Hero from "./main/Hero";
import Experience from "./main/Experience";
import Cta from "./main/Cta";
import ProjectSlide from "./main/ProjectSlide";

export default function Home(){
    return(
        <>
        <main className="w-full">
                        <Hero />
                        <About />
                        <Why/>
                        <Experience/>
                        <ProjectSlide/>
                         <Cta/>
                      </main>
        </>
    )
}
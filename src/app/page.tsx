'use client'
import About from "./components/About";
import Footer from "./components/footer/Footer";
// import Contact from "./components/contact/Contact";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import dynamic from 'next/dynamic'

const Contact = dynamic(() => import('./components/contact/Contact'), {
  ssr: false
})


export default function Home() {
  return (
    <main id="top" className="flex flex-col bg-black overflow-hidden">
      <nav className="w-full fixed z-50 transition-all duration-200 ease-in-out">
        <Navbar />
      </nav>
      
      <section className="pb-10 w-full overflow-x-hidden">
        <HeroSec />
      </section>
      
      <section 
        id='about' 
        className='w-full flex justify-center md:py-20'
      >
        <About />
      </section>
      
      <section id='projects' className="w-full h-[800px] py-50">
        <Projects />
      </section>

      <section id='contact' className="w-full pt-50 ">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

import MainLayout from "../layout/MainLayout";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <MainLayout>
      {/* HERO / HOME */}
      <section id="home" className="bg-gray-100 pb-10">
        
        {/* 🔥 SEO H1  */}
        <h1 className="text-3xl md:text-4xl font-bold text-center pt-6">
          Md Samiulla Hossen - MERN Stack Developer
        </h1>

        {/* About Section (with image + intro) */}
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* RESUME */}
      <section id="resume" className="scroll-mt-20">
        <Resume />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </MainLayout>
  );
}
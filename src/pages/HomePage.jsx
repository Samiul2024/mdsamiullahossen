import MainLayout from "../layout/MainLayout";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import { Link } from "react-router-dom";

// ✅ REAL FEATURED PROJECTS (no placeholder)
import FeaturedProjectCard from "../components/FeaturedProjectCard";


const featuredProjects = [
    {
        id: "samshift",
        name: "SamShift – Parcel Delivery System",
        live: "https://sam-shift-client.vercel.app/",
        desc: "Advanced MERN logistics system with payments, tracking & analytics.",
    },
    {
        id: "careercode",
        name: "CareerCode MERN Platform",
        live: "https://career-code-dd759.web.app/",
        desc: "Secure full-stack platform with authentication & protected APIs.",
    },
    {
        id: "aambari",
        name: "AamBari Mango Platform",
        live: "https://aam-bari.vercel.app/",
        desc: "SEO optimized business platform with conversion-focused UI.",
    },
];
export default function HomePage() {
    return (
        <>


            <MainLayout>
                <main>

                    {/* ================= HERO ================= */}
                    <header className="bg-gray-100 px-6 py-12 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Md Samiulla Hossen - MERN Stack Developer
                        </h1>

                        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                            MERN Stack Developer from Bangladesh specializing in React.js,
                            Node.js, Express.js, and MongoDB. I build scalable,
                            SEO-optimized, and production-ready web applications.
                        </p>

                        {/* CTA */}
                        <div className="flex justify-center gap-4 mt-6 flex-wrap">
                            <Link
                                to="/projects"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-300"
                            >
                                View Projects
                            </Link>

                            <a
                                href="#contact"
                                className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </header>

                    {/* ================= ABOUT ================= */}
                    <section id="about" className="scroll-mt-20">
                        <About />
                    </section>

                    {/* ================= FEATURED PROJECTS ================= */}
                    <section className="p-6 bg-white">
                        <h2 className="text-2xl font-bold text-center mb-8">
                            Featured Projects
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredProjects.map((proj) => (
                                <FeaturedProjectCard key={proj.id} proj={proj} />
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                to="/projects"
                                className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition"
                            >
                                View All Projects →
                            </Link>
                        </div>
                    </section>

                    {/* ================= SKILLS ================= */}
                    <section id="skills" className="scroll-mt-20">
                        <Skills />
                    </section>

                    {/* ================= RESUME ================= */}
                    <section id="resume" className="scroll-mt-20">
                        <Resume />
                    </section>

                    {/* ================= CONTACT ================= */}
                    <section id="contact" className="scroll-mt-20">
                        <Contact />
                    </section>

                </main>
            </MainLayout>
            
        </>
    );
}
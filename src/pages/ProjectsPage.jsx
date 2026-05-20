import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen p-6 mt-16 max-w-6xl mx-auto">
        {/* 🔥 TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          All Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* 🔥 LIVE PREVIEW */}
              <div className="h-52 overflow-hidden border-b">
                <iframe
                  src={proj.liveLink}
                  title={proj.name}
                  className="w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">
                  {proj.name}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {proj.desc}
                </p>

                {/* 🔥 TECH STACK */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {proj.techStack?.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔥 FEATURES (SHORT PREVIEW) */}
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {proj.features?.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* 🔥 BUTTONS */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/project/${proj.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition"
                  >
                    Details →
                  </Link>

                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:scale-105 hover:bg-green-700 transition"
                  >
                    Live
                  </a>

                  {/* GitHub handling */}
                  {typeof proj.github === "string" && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:scale-105 hover:bg-black transition"
                    >
                      GitHub
                    </a>
                  )}

                  {typeof proj.github === "object" && (
                    <>
                      <a
                        href={proj.github.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg shadow hover:scale-105 hover:bg-gray-800 transition text-sm"
                      >
                        Client
                      </a>

                      <a
                        href={proj.github.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-black text-white rounded-lg shadow hover:scale-105 hover:bg-gray-900 transition text-sm"
                      >
                        Server
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
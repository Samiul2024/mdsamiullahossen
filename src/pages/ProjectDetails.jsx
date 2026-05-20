import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <h2 className="text-center mt-20 text-xl">Project Not Found</h2>;

  return (
    <div className="p-6 mt-10 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        {project.name}
      </motion.h1>

      {/* LIVE PREVIEW */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8 border">
        <iframe
          src={project.live}
          className="w-full h-[500px]"
        ></iframe>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
        {project.desc}
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href={project.live}
          target="_blank"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:scale-105 transition"
        >
          Live Site
        </a>

        {typeof project.github === "string" && (
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:scale-105"
          >
            GitHub
          </a>
        )}

        {project.github?.client && (
          <a
            href={project.github.client}
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:scale-105"
          >
            Client Code
          </a>
        )}

        {project.github?.server && (
          <a
            href={project.github.server}
            target="_blank"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:scale-105"
          >
            Server Code
          </a>
        )}
      </div>

      {/* GRID SECTION */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* TECH STACK */}
        <div className="p-6 rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="p-6 rounded-xl shadow bg-white">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2 text-gray-700">
            {project.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="px-6 py-2 bg-black text-white rounded hover:scale-105 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
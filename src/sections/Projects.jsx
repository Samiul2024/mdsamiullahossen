import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        🚀 Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((proj) => (
          <div
            key={proj.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{proj.desc}</p>

            <div className="w-full h-52 mb-3 border rounded overflow-hidden">
              <iframe
                src={proj.live}
                className="w-full h-full"
              />
            </div>

            <Link
              to={`/project/${proj.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/projects"
          className="text-blue-600 hover:underline"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
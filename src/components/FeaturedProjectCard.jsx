import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FeaturedProjectCard({ proj }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative p-5 rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-2xl border border-gray-200 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-lg font-bold mb-2">{proj.name}</h3>

        <p className="text-sm text-gray-600 mb-4">{proj.desc}</p>

        <div className="flex justify-between mt-auto">
          <a
            href={proj.live}
            target="_blank"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Live
          </a>

          <Link
            to={`/project/${proj.id}`}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-200 transition"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
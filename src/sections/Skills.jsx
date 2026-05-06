import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaWordpress, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFramer, SiFirebase, SiAxios, SiMongodb,
  SiExpress, SiVercel, SiNetlify, SiNotion, SiReactrouter,
} from "react-icons/si";
import { TbTools } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
    { name: "Framer", icon: <SiFramer className="text-black" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-500" /> },
    { name: "TanStack", icon: <TbTools className="text-gray-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-800" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Notion", icon: <SiNotion className="text-black" /> },
    // { name: "Productivity", icon: <TbTools className="text-gray-600" /> },
  ];

  return (
    <section id="skills" className="p-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6"> My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <a
            key={i}
            href={`https://www.google.com/search?q=${encodeURIComponent(
              skill.name + " documentation"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-sm shadow hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-blue-50 hover:scale-105"
          >
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

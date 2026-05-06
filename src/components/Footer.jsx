export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
      <div className="mb-2">
        <p className="text-sm">Developed by Md. Samiulla Hossen</p>
        <p className="text-sm">
          📞 <a href="tel:+8801766768546" className="hover:underline">+8801766768546</a> |
          📧 <a href="mailto:mdsamiullahossen@gmail.com" className="hover:underline ml-1">mdsamiullahossen@gmail.com</a>
        </p>
      </div>

      <div className="flex justify-center gap-4 text-sm mt-2">
        <a
          href="https://github.com/Samiul2024"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/md-samiulla-hossen-308218204"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-xs mt-3 text-gray-400">
        &copy; {new Date().getFullYear()} Samiulla Hossen. All rights reserved.
      </p>
    </footer>
  );
}

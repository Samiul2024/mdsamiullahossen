import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll handler (SPA safe)
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", type: "scroll", id: "home" },
    { label: "Skills", type: "scroll", id: "skills" },
    { label: "Projects", type: "route", path: "/projects" },
    { label: "Resume", type: "scroll", id: "resume" },
    { label: "Contact", type: "scroll", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔥 LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 tracking-wide hover:scale-105 transition"
        >
          Samiul.dev
        </Link>

        {/* 🔥 DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.type === "route" ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className="text-gray-700 transition"
                >
                  {item.label}
                </button>
              )}

              {/* 🔥 Hover underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔥 MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* 🔥 MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-b-xl px-6 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === "route" ? (
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
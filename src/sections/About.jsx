import { useState, useEffect } from "react";

export default function About() {
  const [showImage, setShowImage] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState("");

  const profileImg =
    "https://res.cloudinary.com/dejhl0l7a/image/upload/q_auto/f_auto/v1778990598/COmpressedfavProfImg_zp6zl5.jpg";

  const bannerImg =
    "https://res.cloudinary.com/dejhl0l7a/image/upload/q_auto/f_auto/v1778990472/portfolio-cover2_ycghpv.png"; 

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowImage(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openFullscreen = (src) => {
    setFullscreenSrc(src);
    setShowImage(true);
  };

  return (
    <section className="bg-gray-100 pb-10">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="Banner"
          onClick={() => openFullscreen(bannerImg)}
          className="w-full h-48 md:h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        />

        {/* Profile Image (Overlapping Banner) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <img
            src={profileImg}
            alt="Md Samiulla Hossen MERN Stack Developer" onClick={() => openFullscreen(profileImg)}
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-20 px-6">
        <h2 className="text-3xl font-bold">Hi,</h2>
        <h4 className="text-xs mt-1">I'm</h4>
        <h3 className="text-2xl font-semibold mt-2">MD. Samiulla Hossen</h3>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          MERN Stack Developer passionate about building fast,
          accessible, and beautiful web applications.
        </p>
      </div>

      {/* Fullscreen Modal */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={fullscreenSrc}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
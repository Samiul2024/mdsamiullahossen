import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
// import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-white transition-colors duration-300">
      
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-20 md:px-6">
        {children}
      </main>
<FloatingButtons />
      {/* FOOTER */}
      <Footer />

      {/* FLOATING THEME BUTTON */}
      {/* <ThemeToggle /> */}
    </div>
  );
}
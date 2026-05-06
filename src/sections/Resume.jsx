import { useState } from "react";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);
  const resumeId = "1YwYYwlFuTsxo4CvOnKzrrkRtHDTF9d-A";

  return (
    <section className="text-center p-6 bg-blue-50">
      <h2 className="text-2xl font-bold mb-6">Resume</h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        <button
          onClick={() => setShowResume(!showResume)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          {showResume ? " Hide Resume" : "View Resume"}
        </button>

        <a
          href={`https://drive.google.com/uc?export=download&id=${resumeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Download PDF
        </a>
      </div>

      {/* Resume Viewer */}
      {showResume && (
        <div className="w-full max-w-4xl mx-auto h-[600px] border rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`https://drive.google.com/file/d/${resumeId}/preview`}
            className="w-full h-full"
            allow="autoplay"
            title="Resume Preview"
          ></iframe>
        </div>
      )}
    </section>
  );
}
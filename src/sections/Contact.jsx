import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k9ahu1p",
        "template_ejb7c6o",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        "ilXsZX4CEKhHYXI0j"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Message failed. Check console for details.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <form
      action="https://formspree.io/f/mqedwnnq"
      method="POST"
      className="max-w-lg mx-auto p-6"
    >
      <h2>Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full p-3 mb-4 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 mb-4 border rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full p-3 mb-4 border rounded h-32"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}

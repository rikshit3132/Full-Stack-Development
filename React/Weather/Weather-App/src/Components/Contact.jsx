
import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    type: "General Feedback",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // later you can send to backend

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      type: "General Feedback",
      message: ""
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-500 text-center mb-2">
            Contact Me
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Have feedback, suggestions, or found an issue in the weather data?
            Send us a message.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-6">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-medium">
                <User size={16} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 font-medium">
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Feedback Type */}
            <div>
              <label className="font-medium">Feedback Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option>General Feedback</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Weather Data Issue</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-medium">
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Write your message..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <User size={18} className="text-sky-500" />
          <span className="font-bold">Developer: Rikshit Narseth</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-700">
          <Mail size={18} className="text-sky-500" />
          <span className="font-bold">Email: narsethrikshit@gmail.com</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-700">
          <Github size={18} className="text-sky-500" />
          <a
            href="https://github.com/rikshit3132"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 underline"
          >
            <span className="font-bold"> github</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;


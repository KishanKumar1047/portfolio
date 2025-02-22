import React from "react";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-center text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <p>kishankumar12345a@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <p>+91 7782996755</p>
            </div>
            <div className="flex items-center space-x-4">
              <p>Bihar, India</p>
            </div>
            <div className="flex space-x-6 mt-4">
              <a href="https://github.com/kishankumar1047" target="_blank" className="hover:text-teal-400">
                <RiGithubFill className="inline-block" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kishan-kumar-14a7802b1/" target="_blank" className="hover:text-teal-400">
                <RiLinkedinFill className="inline-block" /> LinkedIn
              </a>
              <a href="https://twitter.com/kishankumar1047" target="_blank" className="hover:text-teal-400">
                <RiTwitterXFill className="inline-block" /> Twitter
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white rounded-lg bg-[#1a3c34] hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
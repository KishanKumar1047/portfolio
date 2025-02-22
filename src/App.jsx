import Navbar from "./components/Navbar"
import photo from "./assets/image.png"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import CV from "./assets/CV(KISh).pdf"

function App() {
  return (
    <div className="max-w-full m-0 p-0 text-left">
      <Navbar />
      {/* Hero Section */}


      <div id="home" className="min-h-screen bg-gradient-to-br from-[#1a3c34] to-[#2d5a4e] text-white relative">
        <div className="container pl-40 mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-screen">
          <div className="md:max-w-xl text-center md:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-6">Welcome to my portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Hi, I'm <span className="text-[#4CAF50]">Kishan</span></h1>
            <h2 className="text-3xl text-[#4CAF50] mb-6 font-semibold">Web Developer & Software Engineer</h2>
            <p className="text-lg leading-relaxed opacity-90 mb-10">
              I'm a web developer and software engineer specializing in HTML, CSS, and JavaScript. I am also interested in AI and Machine Learning.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href={CV} download className="px-8 py-3 rounded-full bg-[#4CAF50] text-white font-medium hover:bg-[#3d8b40] transition-all hover:shadow-lg">Download CV</a>
              <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all">Contacts</button>
            </div>
          </div>
          <div className="hidden md:block w-1/2">
            <div className=" w-[60%] overflow-hidden flex justify-center items-center aspect-square rounded-full bg-white/10 backdrop-blur-sm"><img src={photo} alt="" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <h3 className="text-4xl font-bold mb-8 text-[#1a3c34]">Basically an AI and Web Developer</h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          With over 1 year of experience in AI learning and web development, 
          I specialize in creating intelligent and engaging digital solutions 
          that drive results for businesses worldwide.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-5xl font-bold text-[#4CAF50] mb-2">10+</h4>
            <p className="text-gray-600">AI Models Trained</p>
          </div>
          <div>
            <h4 className="text-5xl font-bold text-[#4CAF50] mb-2">10+</h4>
            <p className="text-gray-600">Successful Web Solutions Delivered</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
          <h5 className="text-xl text-[#4CAF50] font-bold mb-4">AI Research</h5>
          <p className="text-gray-600">Exploring advanced machine learning and AI innovations</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
          <h5 className="text-xl text-[#4CAF50] font-bold mb-4">Development</h5>
          <p className="text-gray-600">Building robust, scalable, and AI-integrated applications</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
          <h5 className="text-xl text-[#4CAF50] font-bold mb-4">Data Strategy</h5>
          <p className="text-gray-600">Planning data-driven, effective digital solutions</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
          <h5 className="text-xl text-[#4CAF50] font-bold mb-4">Web Design</h5>
          <p className="text-gray-600">Creating intuitive and engaging user experiences</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-[#1a3c34] text-center">My Skills</h3>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed text-center">
            I possess a diverse set of skills that enable me to tackle various challenges in the fields of AI and web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">HTML</h5>
              <p className="text-gray-600">Proficient in building dynamic web applications using HTML.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">CSS</h5>
              <p className="text-gray-600">Experienced in developing user interfaces with CSS and managing state effectively.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">JavaScript</h5>
              <p className="text-gray-600">Proficient in building dynamic web applications using JavaScript.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">Python</h5>
              <p className="text-gray-600">Proficient in building and deploying machine learning models.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">C++</h5>
                <p className="text-gray-600">Proficient in building and deploying machine learning models.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all">
              <h5 className="text-xl text-[#4CAF50] font-bold mb-4">Data Visualization</h5>
              <p className="text-gray-600">Proficient in using libraries like D3.js and Chart.js to create insightful visualizations.</p>
            </div>
          </div>
        </div>
      </section>




      {/* Portfolio Section */}
     
     <Projects />
     <Contact />


      {/* Footer */}
      <footer id="contact" className="bg-[#1a3c34] w-full text-white py-16">
  <div className="container mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Brand Section */}
      <div className="space-y-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-4 hover:text-[#4CAF50] transition-colors duration-300 cursor-pointer">
          UI Portfolio
        </div>
        <p className="text-gray-300 leading-relaxed">
          Creating digital experiences that make a difference
        </p>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Arjun Kishan. All rights reserved.
        </p>

        <div className="space-y-4 flex flex-col items-center">
        <h5 className="font-bold mb-4 text-lg hover:text-[#4CAF50] transition-colors duration-300">
          Connect
        </h5>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.643 4.937a10.004 10.004 0 01-2.828.775 4.935 4.935 0 002.164-2.724 9.97 9.97 0 01-3.127 1.184A4.925 4.925 0 0016.616 4c-2.724 0-4.93 2.206-4.93 4.93 0 .386.043.762.127 1.124-4.094-.205-7.72-2.166-10.148-5.144a4.93 4.93 0 00-.666 2.477c0 1.71.87 3.213 2.188 4.094a4.903 4.903 0 01-2.23-.616v.062c0 2.384 1.693 4.373 3.946 4.826a4.935 4.935 0 01-2.224.084c.628 1.956 2.448 3.384 4.6 3.426A9.867 9.867 0 010 19.54a13.93 13.93 0 007.548 2.211c9.056 0 14.003-7.496 14.003-13.986 0-.213-.005-.426-.014-.637A10.003 10.003 0 0024 4.59a9.935 9.935 0 01-2.357.646 4.93 4.93 0 002.164-2.724z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.539v-5.569c0-1.327-.027-3.034-1.848-3.034-1.848 0-2.131 1.44-2.131 2.93v5.673H10.47V9h3.404v1.563h.049c.475-.898 1.637-1.843 3.367-1.843 3.6 0 4.26 2.37 4.26 5.45v5.282zM5.337 7.5c-1.14 0-2.063.923-2.063 2.063 0 1.14.923 2.063 2.063 2.063 1.14 0 2.063-.923 2.063-2.063 0-1.14-.923-2.063-2.063-2.063zm1.5 12.952H3.837V9h3.999v11.452zM22.225 0H1.775C.794 0 0 .794 0 1.775v20.45C0 23.206.794 24 1.775 24h20.45C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.388.6.111.82-.26.82-.577 0-.285-.01-1.237-.015-2.25-3.338.724-4.043-1.607-4.043-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.237 1.838 1.237 1.07 1.83 2.805 1.303 3.49.996.108-.775.418-1.303.76-1.603-2.665-.303-5.467-1.332-5.467-5.93 0-1.313.469-2.386 1.236-3.227-.124-.303-.535-1.53.117-3.193 0 0 1.008-.322 3.303 1.227.957-.266 1.986-.399 3.006-.404 1.02.005 2.049.138 3.006.404 2.295-1.549 3.303-1.227 3.303-1.227.653 1.663.241 2.89.118 3.193.77.841 1.236 1.914 1.236 3.227 0 4.608-2.805 5.623-5.475 5.92.43.372.815 1.103.815 2.224 0 1.606-.015 2.903-.015 3.293 0 .319.218.694.825.577A11.963 11.963 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      </div>

      {/* Quick Links Section */}
      <div className="space-y-4 flex flex-col items-center">
        <h5 className="font-bold mb-4 text-lg hover:text-[#4CAF50] transition-colors duration-300">
          Quick Links
        </h5>
        <div className="flex flex-col gap-3">
          <a
            href="#home"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 hover:pl-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 hover:pl-2"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 hover:pl-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-[#4CAF50] transition-colors duration-300 hover:pl-2"
          >
            Contact
          </a>
        </div>
      </div>

    
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default App

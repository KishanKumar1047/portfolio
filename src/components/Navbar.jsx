import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/50 shadow-lg">
          <div className="container mx-auto px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-white decoration-none">Home</a>
              <a href="#about" className="text-white decoration-none">About</a>
              <a href="#skills" className="text-white decoration-none">Skills</a>
              <a href="#projects" className="text-white decoration-none">Projects</a>
              <a href="#contact" className="text-white decoration-none">Contact</a>
              <button className="px-6 py-2 rounded-full bg-[#4CAF50] text-white font-medium hover:bg-[#3d8b40] transition-all hover:shadow-lg">Hire Me</button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar

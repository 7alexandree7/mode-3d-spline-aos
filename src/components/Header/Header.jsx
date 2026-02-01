import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <header className='flex justify-between items-center p-4 lg:px-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>MCODE</h1>

      <nav className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">COMPANY</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">FEATURES</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RESOURCES</a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOCS</a>
      </nav>

      <button
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer">
        Sign in
      </button>

      <button className="md:hidden text-2xl p-2 z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
      </button>

      {menuOpen && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
          <nav className="flex flex-col items-center gap-6">
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">COMPANY</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">FEATURES</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RESOURCES</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOCS</a>
          </nav>
        </div>
      )}

    </header>
  )
}

export default Header

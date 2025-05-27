import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-gray-900">
      <div className="logo text-4xl font-bold text-orange-500">
        Food<span className="text-white">Bites</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
          {menuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        <a href="#home" className="px-4 py-2 text-lg font-medium hover:text-orange-500 transition-colors">Home</a>
        <a href="#about" className="px-4 py-2 text-lg font-medium hover:text-orange-500 transition-colors">About</a>
        <a href="#menu" className="px-4 py-2 text-lg font-medium hover:text-orange-500 transition-colors">Menu</a>
        <a href="#services" className="px-4 py-2 text-lg font-medium hover:text-orange-500 transition-colors">Services</a>
        <a href="#contact" className="px-4 py-2 text-lg font-medium hover:text-orange-500 transition-colors">Contact</a>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-40 pt-24 md:hidden">
          <div className="flex flex-col items-center">
            <a href="#home" onClick={toggleMenu} className="px-4 py-3 text-xl font-medium hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" onClick={toggleMenu} className="px-4 py-3 text-xl font-medium hover:text-orange-500 transition-colors">About</a>
            <a href="#menu" onClick={toggleMenu} className="px-4 py-3 text-xl font-medium hover:text-orange-500 transition-colors">Menu</a>
            <a href="#services" onClick={toggleMenu} className="px-4 py-3 text-xl font-medium hover:text-orange-500 transition-colors">Services</a>
            <a href="#contact" onClick={toggleMenu} className="px-4 py-3 text-xl font-medium hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="sticky top-0 inset-x-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md flex justify-between items-center w-full px-8 py-4 lg:px-16 my-0 md:my-10 mx-auto">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;

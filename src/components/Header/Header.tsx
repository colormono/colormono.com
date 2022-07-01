import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="sticky-nav flex justify-between items-center w-full px-8 py-4 lg:px-16 my-0 md:my-10 mx-auto">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;

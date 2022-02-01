import React from 'react';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className="sticky-nav flex justify-between items-center w-full px-8 py-4 lg:px-16 my-0 md:my-10 mx-auto max-w-[1280px]">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;

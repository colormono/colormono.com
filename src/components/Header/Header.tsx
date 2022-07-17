import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { Container } from '@components/ui/Container';

function Header() {
  return (
    <header className="sticky top-0 inset-x-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md w-full my-0 md:my-10">
      <Container className="flex w-full justify-between items-center md:py-3">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;

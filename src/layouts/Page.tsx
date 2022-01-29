import { ReactNode } from 'react';
import { Logo, Navbar } from '@/components/common';
import Footer from '@/components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title = '' }: Props) {
  return (
    <div className="min-h-screen">
      <nav className="sticky-nav flex justify-between items-center w-full p-4 lg:px-16 my-0 md:my-8 mx-auto bg-opacity-60 max-w-[1280px]">
        <div className="">
          <Logo />
        </div>

        <Navbar />
      </nav>

      <main className="flex flex-col px-8 lg:px-16 pb-16 w-full max-w-[1280px] mx-auto">{children}</main>

      <Footer />
    </div>
  );
}

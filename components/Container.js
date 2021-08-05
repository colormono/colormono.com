import { Logo, Navbar } from '@/components/common';
import Footer from '@/components/Footer';

export default function Container({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="sticky-nav flex justify-between items-center w-full p-8 lg:px-16 my-0 md:my-8 mx-auto bg-opacity-60 max-w-[1280px]">
        <div className="">
          <Logo />
        </div>

        <Navbar />
      </nav>

      <main className="flex flex-col px-8 lg:px-16 pb-16 w-full max-w-[1280px] mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}

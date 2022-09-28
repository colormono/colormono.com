import { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col w-full mx-auto flex-grow relative">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

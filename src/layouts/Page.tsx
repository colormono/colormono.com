import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title = '' }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col px-8 lg:px-16 pb-16 w-full max-w-[1280px] mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

import { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  title?: string;
  variant?: string;
};

export default function Layout({ children, title = '', variant = 'contained' }: Props) {
  const cn = classNames('flex flex-col w-full mx-auto flex-grow', variant === 'contained' && 'px-8 lg:px-16');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn}>{children}</main>
      <Footer />
    </div>
  );
}

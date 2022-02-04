import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        title="404 – COLORMONO"
        canonical="https://colormono.com/404"
        openGraph={{
          url: 'https://colormono.com/404',
          title: '404 – COLORMONO',
        }}
      />

      <div className="relative">
        <img src="/static/images/404.jpg" alt="404" className="w-full" />
        <div className="flex flex-col items-center justify-center text-white absolute inset-0">
          <h1 className="text-3xl md:text-5xl tracking-tight mb-10">404 – PAGE NOT FOUND</h1>
          <Link href="/">
            <a className="p-1 sm:p-4 w-64 mx-auto bg-black text-white text-center rounded-md">RETURN HOME</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

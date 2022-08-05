import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicSketch = dynamic(() => import('@components/SketchWelcome'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mb-16">
      <DynamicSketch />
      <h1>Try, Try, Try again.</h1>
    </div>
  );
};

export default Page;

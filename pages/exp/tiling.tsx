import type { NextPage } from 'next';
import { Tag } from '@components/ui';
import Layout from '@components/Layout';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('@sketches/tiling/tiling'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="w-full overflow-hidden relative">
          <div className="relative z-30">
            <Sketch />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="inline-flex items-center px-4 py-2 font-sans font-semibold leading-6 text-sm shadow rounded-md text-white bg-neutral-900 transition ease-in-out duration-150 cursor-not-allowed">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mb-16 mt-16 w-full mx-auto p-16 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        {/* This text should be taken from @sketches/tiling/Readme.md */}
        <h1 className="text-6xl mb-4">Tiling</h1>
        <h2 className="text-xl mb-12 text-gray-500 dark:text-gray-400">Like Throwing dice or Flipping a coin</h2>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Recursive. Quidem officiis ut totam laborum libero pariatur quia voluptatem ducimus. Voluptatibus sapiente
            tempore qui et velit. Nesciunt et eaque. Eaque quidem sit assumenda ipsam debitis odit. A aut distinctio
            tempore vel id ex doloremque minus.
          </p>
          <p>
            Qui quidem est omnis alias maiores et ipsum occaecati. Et consequatur sunt perspiciatis corporis nobis
            dolore beatae accusamus. Sit placeat inventore possimus odio. Minus non veritatis.
          </p>
          <p>
            Impedit nesciunt ab laboriosam inventore. Dolores placeat blanditiis libero inventore maxime sed. Dolores
            quasi quis sequi corrupti ipsum. Qui harum est minus ipsa natus eaque assumenda et.
          </p>

          <div className="mt-8 mb-4 block">Keywords</div>
          <div className="flex flex-wrap gap-2">
            <Tag>Random</Tag>
            <Tag>Disorder</Tag>
            <Tag>Noise</Tag>
            <Tag>Recursive</Tag>
            <Tag>Chaos</Tag>
            <Tag>Seed</Tag>
          </div>
        </div>
      </div>
    </>
  );
};

Page.layout = Layout;

export default Page;

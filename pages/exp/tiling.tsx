import type { NextPage } from 'next';
import { Tag } from '@components/ui';
import Layout from '@components/Layout';
import dynamic from 'next/dynamic';
import SketchContainer from '@components/Sketch/SketchContainer';
import Article from '@components/Article';

const Sketch = dynamic(() => import('@sketches/tiling/tiling'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <Layout>
      <SketchContainer>
        <Sketch />
      </SketchContainer>

      <div className="flex flex-col justify-center items-start mb-16 mt-16 w-full mx-auto p-16 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        {/* This text should be taken from @sketches/tiling/Readme.md */}
        <Article>
          <h1>Tiling</h1>
          <h2>Like Throwing dice or Flipping a coin</h2>
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
        </Article>
      </div>
    </Layout>
  );
};

export default Page;

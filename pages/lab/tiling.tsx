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
          <h3>Recursive grids</h3>

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

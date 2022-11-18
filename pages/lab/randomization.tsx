import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Button, Tag } from '@components/ui';
import { Layout } from '@components';
import SketchContainer from '@components/Sketch/SketchContainer';
import Article from '@components/Article';
import { CodeBlock } from '@components/CodeBlock';

const Sketch: any = dynamic(() => import('@sketches/randomization'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <Layout>
      <SketchContainer>
        <Sketch />
      </SketchContainer>

      <div className="flex flex-col justify-center items-start mb-16 mt-16 w-full mx-auto p-16 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        {/* This text should be taken from @sketches/randomization/Readme.md */}
        <Article>
          <h1>Randomization</h1>
          <h2>Like flipping a coin, or throwing a dice.</h2>
          <p>
            Randomization is the process of making something random. Randomization is not haphazard; instead, a random
            process is a sequence of random variables describing a process whose outcomes do not follow a deterministic
            pattern, but follow an evolution described by probability distributions.
          </p>

          <h3>Flipping a coin</h3>
          <CodeBlock data-language="java">
            {`
            // flipping a coin (pick a color)
            if (p.random(1, 10) > 5) {
              p.fill('white');
            } else {
              p.fill('blue');
            }`}
          </CodeBlock>

          <h3>Throwing dice</h3>
          <CodeBlock data-language="java">
            {`
            // throwing dice (pick a shape)
            const dice = p.int(p.floor(p.random(1, 7)));
            switch (dice) {
              case 1:
                p.letterM(x, y);
                break;
              case 2:
                p.letterO(x, y);
                break;
              case 3:
                p.letterN(x, y);
                break;
              case 4:
                p.letterOo(x, y);
                break;
              default:
              // silence, silencio
            }`}
          </CodeBlock>

          <Button href="#">Source code</Button>

          <div className="flex flex-wrap gap-2 mt-16">
            <Tag>Random</Tag>
            <Tag>Disorder</Tag>
            <Tag>Noise</Tag>
            <Tag>Gambling</Tag>
            <Tag>Chaos</Tag>
            <Tag>Seed</Tag>
          </div>
        </Article>
      </div>
    </Layout>
  );
};

export default Page;

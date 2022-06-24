import type { NextPage } from 'next';
import { Tag } from '@/components/ui';
import PageLayout from '@/layouts/Page';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('@/sketches/randomization'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <>
      <div className="-mx-8 lg:-mx-16 sticky top-0">
        <Sketch />
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mb-16 -mt-48 p-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-6xl mb-4">Randomization</h1>
        <h2 className="text-xl mb-12 text-gray-500">Like Throwing dice or Flipping a coin.</h2>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Quidem officiis ut totam laborum libero pariatur quia voluptatem ducimus. Voluptatibus sapiente tempore qui
            et velit. Nesciunt et eaque. Eaque quidem sit assumenda ipsam debitis odit. A aut distinctio tempore vel id
            ex doloremque minus.
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
            <Tag>Gambling</Tag>
            <Tag>Chaos</Tag>
            <Tag>Seed</Tag>
          </div>

          {/* <h3>Skills</h3>
          <ul>
            <li>Creative thinking, Inductive reasoning.</li>
            <li>Agile team player, collaborationist and good listener.</li>
            <li>
              Software engineering best practices, up-to-date with JavaScript.
            </li>
            <li>Functional, objet-oriented, maintainable and reusable code.</li>
            <li>Project design, planning and execution. </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Page;

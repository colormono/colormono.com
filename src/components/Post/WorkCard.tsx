import Link from 'next/link';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export type CardType = {
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  category?: string;
  featuredImage: string;
  featuredImageW?: number;
  featuredImageH?: number;
};

const WorkCard = ({
  title,
  subtitle,
  href,
  category = 'notes',
  featuredImage,
  featuredImageW = 1280,
  featuredImageH = 720,
}: CardType) => {
  return (
    <Link href={`/${category}/${href}`}>
      <a className="w-full group relative">
        <div className="w-full bg-black">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt="Render"
              width={featuredImageW}
              height={featuredImageH}
              layout="responsive"
              // className="transform transition duration-700 ease-in-out scale-100 group-hover:scale-110"
              className="transform transition duration-300 ease-in-out scale-100 grayscale group-hover:grayscale-0 group-hover:scale-100 mix-blend-screen group-hover:mix-blend-normal"
            />
          ) : (
            <div className="flex w-[640px] h-[201px]">Render in progres...</div>
          )}
        </div>
        <div className="flex flex-col mt-4 mr-12">
          <h4 className="text-lg font-semibold text-neutral-700 underline-offset-2 dark:text-neutral-100 md:text-2xl">
            {title}
          </h4>
          <div className="text-neutral-400">{subtitle}</div>
        </div>
        <div className="absolute bottom-4 right-4 transition-all duration-300 ease-in-out opacity-0 group-hover:right-0 group-hover:opacity-100">
          <ArrowNarrowRightIcon className="w-6 h-6 text-neutral-400" />
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;

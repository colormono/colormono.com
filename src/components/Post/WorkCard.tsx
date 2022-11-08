import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export type CardType = {
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  category?: string;
  featuredImage: StaticImageData;
  featuredImageW?: number;
  featuredImageH?: number;
};

const WorkCard = ({ title, subtitle, href, featuredImage, featuredImageW = 640, featuredImageH = 360 }: CardType) => {
  return (
    <Link href={`/${href}`}>
      <a className="w-full group relative">
        <div className="w-full bg-black">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt="Render"
              width={featuredImageW}
              height={featuredImageH}
              layout="responsive"
              placeholder="blur"
              // className="transform transition duration-700 ease-in-out scale-100 group-hover:scale-110"
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

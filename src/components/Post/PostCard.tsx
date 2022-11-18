import Link from 'next/link';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const PostCard = ({
  title,
  subtitle,
  slug,
  category = 'notes',
  featuredImage,
  featuredImageW = 960,
  featuredImageH = 640,
}) => {
  return (
    <Link href={`/${category}/${slug}`}>
      <a className="w-full group relative">
        <div className="w-full">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={`${title} render`}
              width={featuredImageW}
              height={featuredImageH}
              layout="responsive"
              placeholder="blur"
              className="transform transition duration-300 ease-in-out scale-95 group-hover:scale-100"
            />
          ) : (
            <div className="flex w-[640px] h-[201px]">Render in progres...</div>
          )}
          <div className="flex flex-col mt-4 mx-8 relative">
            <h4 className="text-lg font-semibold text-neutral-700 underline-offset-2 dark:text-neutral-100 md:text-2xl">
              {title}
            </h4>
            <div className="text-neutral-400 mr-8 leading-tight mt-2">{subtitle}</div>
            <div className="absolute top-1 right-4 transition-all duration-300 ease-in-out opacity-0 group-hover:right-0 group-hover:opacity-100">
              <ArrowNarrowRightIcon className="w-6 h-6 text-neutral-400" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;

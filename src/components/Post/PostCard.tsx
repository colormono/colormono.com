import Link from 'next/link';
import Image from 'next/image';

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
      <a className="w-full group">
        <div className="w-full">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt="Render"
              width={featuredImageW}
              height={featuredImageH}
              layout="responsive"
              className="transform transition duration-300 ease-in-out scale-95 grayscale group-hover:grayscale-0 group-hover:scale-100"
            />
          ) : (
            <div className="flex w-[640px] h-[201px]">Render in progres...</div>
          )}
          <div className="flex flex-col mt-4">
            <h4 className="text-lg font-semibold text-neutral-900 underline-offset-2 dark:text-neutral-100 group-hover:underline md:text-2xl">
              {title}
            </h4>
            <div className="text-neutral-500">{subtitle}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;

import Link from 'next/link';
import Image from 'next/image';

const WorkCard = ({
  title,
  subtitle,
  slug,
  category = 'notes',
  featuredImage,
  featuredImageW = 1280,
  featuredImageH = 720,
}) => {
  return (
    <Link href={`/${category}/${slug}`}>
      <a className="w-full group">
        <div className="w-full bg-black">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt="Render"
              width={featuredImageW}
              height={featuredImageH}
              layout="responsive"
              className="transform transition duration-300 ease-in-out scale-100 grayscale group-hover:grayscale-0 group-hover:scale-100 mix-blend-screen group-hover:mix-blend-normal"
            />
          ) : (
            <div className="flex w-[640px] h-[201px]">Render in progres...</div>
          )}
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg font-semibold text-neutral-900 underline-offset-2 dark:text-neutral-100 group-hover:underline md:text-2xl">
            {title}
          </h4>
          <div className="text-neutral-500">{subtitle}</div>
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;

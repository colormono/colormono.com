import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import Image from 'next/image';

import fetcher from '@utils/fetcher';

const PostCard = ({ title, subtitle, slug, category = 'notes', featuredImage }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/${category}/${slug}`}>
      <a className="w-full group">
        <div className="w-full">
          <Image src={featuredImage} alt="Picture of the author" width={640} height={201} />
          <div className="flex flex-col mt-4">
            <h4 className="text-lg md:text-3xl font-medium w-full text-gray-900 dark:text-gray-100 group-hover:underline underline-offset-2 mb-1">
              {title}
            </h4>
            <p className="text-gray-500">{subtitle}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;

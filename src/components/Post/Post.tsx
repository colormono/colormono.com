import Link from 'next/link';

const Post = ({ title, summary, slug }) => {
  return (
    <Link href={`/notes/${slug}`}>
      <a className="w-full group">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100 group-hover:underline underline-offset-2">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;

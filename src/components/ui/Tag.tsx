import Link from 'next/link';
import classNames from 'classnames';

const Tag = ({ children, href, external = true }: { children: any; href?: string; external?: boolean }) => {
  const base = 'inline-block px-3 bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400 rounded-full';
  const link =
    'cursor-pointer hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-colors ease-in-out duration-300';

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <span className={classNames(base, link)}>{children}</span>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} passHref>
        <span className={classNames(base, link)}>{children}</span>
      </Link>
    );
  }

  return <span className={classNames(base)}>{children}</span>;
};

export default Tag;

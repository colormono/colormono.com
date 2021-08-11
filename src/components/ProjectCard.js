import Link from 'next/link';

export default function ProjectCard({ title, description, href, thumb }) {
  return (
    <Link href={href}>
      <a
        aria-label={title}
        className="block mb-4 hover:shadow border bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-900 rounded overflow-hidden"
      >
        {thumb && (
          <div className="w-full">
            <img src={thumb} alt={title} />
          </div>
        )}
        <div className="p-4">
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}

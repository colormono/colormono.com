import Link from 'next/link';
// import * as Fathom from 'fathom-client';

// const trackGoal = (title) => {
//   const goalCodes = {
//     'React 2025': '5WGDOKV0',
//     'Mastering Next.js': 'HV9HDL0O'
//   };

//   Fathom.trackGoal(goalCodes[title], 0);
// };

export default function ProjectCard({ title, description, href, thumb }) {
  return (
    <Link href={href}>
      <a
        aria-label={title}
        className="block mb-4 hover:shadow border border-gray-200 dark:border-gray-800 rounded overflow-hidden"
        // onClick={() => trackGoal(title)}
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

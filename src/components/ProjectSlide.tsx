import Link from 'next/link';
import { Button } from '@/components/ui';

type ProjectSlideProps = {
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  thumb: string;
  date: string;
};

const ProjectSlide = ({ title, subtitle, description, href, thumb, date }: ProjectSlideProps) => {
  return (
    <article className="md:flex w-full flex-grow mb-8 border bg-white border-gray-200 dark:bg-black dark:border-gray-800">
      <div className="w-full md:w-2/3 md:order-last">
        {thumb && href && (
          <Link href={href}>
            <a aria-label={title}>
              <img src={thumb} alt={title} className="object-cover w-full h-full" />
            </a>
          </Link>
        )}

        {thumb && !href && <img src={thumb} alt={title} className="object-cover w-full h-full" />}
      </div>
      <div className="w-full md:w-1/3">
        <div className="p-6 md:p-10 text-gray-700 dark:text-gray-300">
          <h4 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 my-2">
            {title}
          </h4>

          <p className="my-2">
            {subtitle}
            <br />
            {date}
          </p>

          <p className="my-8 text-sm">{description}</p>

          {href && <Button href={href}>View more</Button>}
        </div>
      </div>
    </article>
  );
};

export default ProjectSlide;

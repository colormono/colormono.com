import Link from 'next/link';
import { Button } from '@components/ui';

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
    <article className="md:flex w-full flex-grow mb-10">
      <div className="w-full md:w-3/5">
        {thumb && href && (
          <Link href={href}>
            <a aria-label={title}>
              <img src={thumb} alt={title} className="object-cover w-full h-full" />
            </a>
          </Link>
        )}

        {thumb && !href && <img src={thumb} alt={title} className="object-cover w-full h-full" />}
      </div>
      <div className="w-full md:w-2/5 self-start">
        <div className="p-10 max-w-lg">
          <h4 className="text-xl md:text-4xl tracking-tight">{title}</h4>
          <span className="text-gray-600 dark:text-gray-400">
            {subtitle}, {date}.
          </span>
          <p className="my-6">{description}</p>
          {href && <Button href={href}>View more</Button>}
        </div>
      </div>
    </article>
  );
};

export default ProjectSlide;

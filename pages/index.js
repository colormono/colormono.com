import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-xl">
        <h1 className="font-bold text-3xl md:text-7xl tracking-tight my-4 text-black dark:text-white">
          Hello, World!
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 text-lg">
          This the house of Mariano Rivas, a new media artist, and software
          developer. I work at{' '}
          <a
            href="https://truenorth.co"
            target="_blank"
            role="norel noreferral"
            className="border-b dark:border-gray-800"
          >
            TrueNorth
          </a>{' '}
          as Head of Front-end. By having a generalist technical skill set, I'm
          able to participate in a variety of projects in different stages of
          the creative process, from conception to execution.
        </h2>

        <h3 className="font-bold text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
          Selected Works
        </h3>
        <ProjectCard
          title="Hasta Las Estrellas"
          description="Augmented Illustration"
          href="/work/hasta-las-estrellas"
          thumb="/static/images/hasta-las-estrellas/thumb.jpg"
        />
      </div>
    </Container>
  );
}

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-xl">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-4 text-black dark:text-white">
          Hello, World!
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400">
          I’m Mariano Rivas, new media artist and software developer. I work at
          TrueNorth as a Front-end Tech Lead. By having a generalist technical
          skill set, I'm able to participate in a variety of projects in
          different stages of the creative process, from conception to
          execution.
        </h2>

        <h3 className="font-bold text-2xl tracking-tight mt-12 mb-6 text-black dark:text-white">
          Selected Projects
        </h3>
        <ProjectCard
          title="Hasta Las Estrellas"
          description="Augmented Illustration"
          href="/work/hasta-las-estrellas"
          thumb="/static/images/hasta-las-estrellas/thumb.jpg"
        />

        {/*
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Most Popular
        </h3>         
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
        />
        */}
      </div>
    </Container>
  );
}

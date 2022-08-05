import React, { ReactNode } from 'react';
import { Container } from '@components/ui';

type TitleType = {
  children?: ReactNode;
  displayName: string;
};

type BodyType = {
  children?: ReactNode;
  displayName: string;
};

type CoverType = {
  children?: ReactNode;
  className?: string;
  Title?: TitleType;
  Body?: BodyType;
};

export const Cover: React.FC<CoverType> & { Title } & { Body } = ({ children }) => {
  const title = getChildrenOnDisplayName(children, 'Title');
  const body = getChildrenOnDisplayName(children, 'Body');
  return (
    <section className="w-full">
      <Container className="py-12 lg:pt-24 lg:pb-32 2xl:pt-40 2xl:pb-56">
        {title}
        {body}
      </Container>
    </section>
  );
};

const Title: TitleType = ({ children, ...other }) => (
  <h1 className="text-4xl md:text-8xl tracking-tight mb-6" {...other}>
    {children}
  </h1>
);

Title.displayName = 'Title';
Cover.Title = Title;

const Body: BodyType = ({ children, ...other }) => (
  <div className="max-w-3xl text-2xl leading-relaxed" {...other}>
    {children}
  </div>
);

Body.displayName = 'Body';
Cover.Body = Body;

const getChildrenOnDisplayName = (children, displayName) =>
  React.Children.map(children, (child) => (child.type?.displayName === displayName ? child : null));

export default Cover;

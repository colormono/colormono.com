import React, { FC, ReactElement, ReactNode } from 'react';
import { Container } from '@components/ui';

type CoverProps = {
  children?: ReactNode;
  className?: string;
  Title?: ReactNode;
  Body?: ReactNode;
};

export const Cover: FC<CoverProps> = ({ children }) => {
  const title = getChildrenOnDisplayName(children, 'Title');
  const body = getChildrenOnDisplayName(children, 'Body');
  return (
    <section className="w-full">
      <Container className="pt-24 pb-32">
        {title}
        {body}
      </Container>
    </section>
  );
};

const Title = ({ children, ...other }) => (
  <h1 className="text-4xl md:text-8xl tracking-tight mb-6" {...other}>
    {children}
  </h1>
);
Title.displayName = 'Title';
Cover.Title = Title;

const Body = ({ children, ...other }) => (
  <div className="max-w-3xl text-2xl leading-relaxed" {...other}>
    {children}
  </div>
);
Body.displayName = 'Body';
Cover.Body = Body;

const getChildrenOnDisplayName = (children, displayName) =>
  React.Children.map(children, (child) => (child.type?.displayName === displayName ? child : null));

export default Cover;

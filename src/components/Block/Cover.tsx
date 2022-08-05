import React, { ReactNode } from 'react';
import { getChildrenOnDisplayName } from '@utils/getChildrenOnDisplayName';
import classNames from 'classnames';
import { Container } from '@components/ui';

type CoverType = {
  children?: ReactNode;
  className?: string;
};

export const Cover: React.FC<CoverType> & { Title: React.FC } & { Body: React.FC } = ({ children, className }) => {
  const title = getChildrenOnDisplayName(children, 'Title');
  const body = getChildrenOnDisplayName(children, 'Body');
  return (
    <section className="w-full">
      <Container className={classNames(className, 'py-12 lg:pt-24 lg:pb-32 2xl:pt-40 2xl:pb-56')}>
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

export default Cover;

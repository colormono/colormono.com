import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const cn = classNames(className, 'w-full max-w-2xl px-8 md:px-16 mx-auto lg:max-w-[1600px]');
  return <div className={cn}>{children}</div>;
};

export default Container;

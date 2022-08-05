import React from 'react';

export default function Article(props) {
  const { children } = props;

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      {React.Children.map(children, (child) => React.cloneElement(child, {}))}
    </article>
  );
}

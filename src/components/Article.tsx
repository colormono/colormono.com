import React from 'react';

export default function Article(props) {
  const { children } = props;

  return (
    <article className="prose prose-xl dark:prose-invert max-w-4xl mx-auto">
      {React.Children.map(children, (child) => React.cloneElement(child, {}))}
    </article>
  );
}

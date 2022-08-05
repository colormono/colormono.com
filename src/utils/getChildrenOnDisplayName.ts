import React from 'react';

export const getChildrenOnDisplayName = (children, displayName) => {
  return React.Children.map(children, (child) => (child.type?.displayName === displayName ? child : null));
};

import { Children } from 'react';

const allowedChildren = (...types) => {
  return (propValue, key, componentName) => {
    let error = null;

    Children.forEach(propValue[key], (child) => {
      if (!types.includes(child.type)) {
        error = new Error(
          `${componentName} component only accepts the following components as children: ${types
            .map((element) => element.displayName || element)
            .join(', ')}.`,
        );
      }
    });

    return error;
  };
};

export default {
  allowedChildren,
};

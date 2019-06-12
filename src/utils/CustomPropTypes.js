import { Children } from 'react';

const getUnstyledComponentName = (displayName) => {
  if (!displayName) {
    return null;
  }

  const isStyledComponent = displayName.match(/^Styled\((.*)\)$/);

  return isStyledComponent ? isStyledComponent[1] : displayName;
};

const allowedChildren = (...types) => {
  return (propValue, key, componentName) => {
    let error = null;

    Children.forEach(propValue[key], (child) => {
      if (!types.includes(child.type)) {
        error = new Error(
          `${componentName} component only accepts the following components as children: ${types
            .map(
              (element) =>
                getUnstyledComponentName(element.displayName) || element,
            )
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

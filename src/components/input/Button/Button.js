import PropTypes from 'prop-types';
import React from 'react';

import { StyledButton, buttonProminences, buttonBehaviours, buttonSizes } from './Button.styles';

export const Button = ({ children, prominence, behaviour, onClick, size }) => (
  <StyledButton
    onClick={onClick}
    prominence={prominence}
    behaviour={behaviour}
    size={size}
  >
    {children}
  </StyledButton>
);

export const ButtonProminences = Object.keys(buttonProminences);
export const ButtonBehaviours = Object.keys(buttonBehaviours);
export const ButtonSizes = Object.keys(buttonSizes);

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Visual prominence. Options are 'primary', 'default, and 'minimal' */
  prominence: PropTypes.oneOf(ButtonProminences),
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Size of the button. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ButtonSizes),
  /** Behaviour. Options are 'navigation' or 'link' */
  behaviour: PropTypes.oneOf(ButtonBehaviours),
};

Button.defaultProps = {
  prominence: 'default',
  onClick: () => {},
  size: 'medium',
  behaviour: 'action',
};

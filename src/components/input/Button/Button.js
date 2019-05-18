import PropTypes from 'prop-types';
import React from 'react';

import { StyledButton, buttonProminences, buttonBehaviours, buttonIntents } from './Button.styles';

export const Button = ({ children, prominence, behaviour, onClick, intent }) => (
  <StyledButton
    onClick={onClick}
    prominence={prominence}
    behaviour={behaviour}
    intent={intent}
  >
    {children}
  </StyledButton>
);

export const ButtonProminences = Object.keys(buttonProminences);
export const ButtonBehaviours = Object.keys(buttonBehaviours);
export const ButtonIntents = Object.keys(buttonIntents);

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Visual prominence. Options are 'primary', 'default, and 'minimal' */
  prominence: PropTypes.oneOf(ButtonProminences),
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Behaviour. Options are 'navigation' or 'link' */
  behaviour: PropTypes.oneOf(ButtonBehaviours),
  /** Intent. Options are 'none', 'danger', 'warning', and 'success'. */
  intent: PropTypes.oneOf(ButtonIntents),
};

Button.defaultProps = {
  prominence: 'default',
  onClick: () => {},
  behaviour: 'action',
  intent: 'none',
};

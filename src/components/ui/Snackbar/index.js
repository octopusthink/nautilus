import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import Button from '../Button';
import Paragraph from '../Paragraph';

const Snackbar = (props) => {
  const theme = useTheme();
  const { action, actionLabel, children, inverse, onDismiss, unstyled, ...otherProps } = props;

  return (
    <div
      css={
        unstyled
          ? undefined
          : css`
              margin: 0;
              background-color: ${theme.colors.neutral.grey800};
              color: ${theme.colors.text.inverseLight};
              padding: ${toUnits(theme.spacing.padding.small)};
              //border-radius: ${toUnits(theme.radii.small)};
              //box-shadow: ${theme.shadows.small};
              border-radius: ${toUnits(theme.spacing.padding.xSmall)};
              //box-shadow: 0 0 0 0.4rem ${theme.colors.text.dark};
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: ${toUnits(theme.spacing.padding.small)};

              ${inverse &&
              css`
                background-color: ${theme.colors.text.inverse};
                color: ${theme.colors.text.inverseDark};
              `}
            `
      }
      {...otherProps}
    >
      <Paragraph inverse noMargin>
        {children}
      </Paragraph>

      {action && (
        <Button minimal inverse unstyled onClick={action}>
          {actionLabel}
        </Button>
      )}
      <Button minimal unstyled iconOnly="x" onClick={onDismiss} />
    </div>
  );
};

Snackbar.defaultProps = {
  action: undefined,
  actionLabel: undefined,
  children: undefined,
  inverse: false,
  onDismiss: undefined,
  unstyled: false,
};

Snackbar.propTypes = {
  /** Callback action to run when the action button is clicked. */
  action: PropTypes.func,
  /** Label for the (optional) action button. */
  actionLabel: PropTypes.string,
  /** @ignore */
  children: PropTypes.node,
  /** Inverse container and text colour. Used for dark backgrounds. */
  inverse: PropTypes.bool,
  /** Callback action to run when the Snackbar is dismissed */
  onDismiss: PropTypes.func,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export default Snackbar;

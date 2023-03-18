import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { bodyStyles, toUnits } from '../../../styles';
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
              background-color: ${theme.components.Snackbar.backgroundColor};
              color: ${theme.components.Snackbar.textColor};
              padding: ${toUnits(theme.spacing.padding.medium)}
                ${toUnits(theme.spacing.padding.large)};
              //border-radius: ${toUnits(theme.radii.small)};
              //box-shadow: ${theme.shadows.small};
              border-radius: ${toUnits(theme.spacing.padding.small)};
              //box-shadow: 0 0 0 0.4rem ${theme.colors.text.dark};
              display: flex;
              align-items: center;
              justify-content: space-between;
              //position: absolute;
              //flex-wrap: wrap;
              max-width: 100%;
              position: absolute;
              top: ${toUnits(theme.spacing.margin.medium)};
              left: ${toUnits(theme.spacing.margin.medium)};
              margin-bottom: 40px;

              ${inverse &&
              css`
                background-color: ${theme.components.Snackbar.backgroundColorInverse};
                color: ${theme.components.Snackbar.textColorInverse};
              `}
            `
      }
      {...otherProps}
    >
      <Paragraph
        unstyled={unstyled}
        noMargin
        css={
          unstyled
            ? undefined
            : css`
                color: ${theme.components.Snackbar.textColor};
                ${inverse &&
                css`
                  color: ${theme.components.Snackbar.textColorInverse};
                `}
              `
        }
      >
        {children}
      </Paragraph>

      {action && (
        <Button
          unstyled={unstyled}
          minimal
          inverse
          noMargin
          onClick={action}
          css={
            unstyled
              ? undefined
              : css`
                  color: ${theme.components.Snackbar.actionLinkColor};
                  padding-left: ${toUnits(theme.spacing.padding.small)};
                  padding-right: ${toUnits(theme.spacing.padding.medium)};
                  text-decoration: underline;

                  ${inverse &&
                  css`
                    color: ${theme.components.Snackbar.actionLinkColorInverse};
                  `}
                `
          }
        >
          {actionLabel}
        </Button>
      )}
      <Button
        minimal
        inverse
        unstyled={unstyled}
        iconOnly="x"
        onClick={onDismiss}
        css={
          unstyled
            ? undefined
            : css`
                color: ${theme.components.Snackbar.textColor};
                padding: 0;
                margin: 0;
                position: absolute;
                top: ${toUnits(theme.spacing.padding.small)};
                right: ${toUnits(theme.spacing.padding.small)};

                ${inverse &&
                css`
                  color: ${theme.components.Snackbar.textColorInverse};
                `}
              `
        }
      />
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

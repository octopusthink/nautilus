// Define our font styles here, then pull them into the theme.
export const interfaceSmall = (theme) => {
  return {
    fontFamily: theme.typography.fonts.interface,
    fontSize: theme.typography.styles.fontSizes.small,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.59,
  };
};

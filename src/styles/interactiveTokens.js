// Outline: used to highlight the element in focus.
const focusOutline = (theme) => ({
  boxShadow: `0 0 0 0.4rem ${theme.colors.state.focusOutline}`,
  outline: 0,
});

const focusOutlineLight = (theme) => ({
  boxShadow: `0 0 0 0.2rem ${theme.colors.state.focusOutline}`,
  outline: 0,
});

const focusText = (theme) => ({
  color: theme.colors.state.focusText,
});

export const focusStyle = {
  outlineLight: focusOutlineLight,
  outline: focusOutline,
  text: focusText,
};

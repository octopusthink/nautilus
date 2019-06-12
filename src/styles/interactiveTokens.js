// Outline: used to highlight the element in focus.
const focusOutline = (theme) => {
  return {
    boxShadow: `0 0 0.1rem 0.4rem ${theme.colors.state.focusOutline}`,
    outline: 0,
  };
};

const focusText = (theme) => {
  return {
    color: theme.colors.state.focusText,
  };
};

export const focusStyle = {
  outline: focusOutline,
  text: focusText,
};

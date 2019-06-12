// Outline: used to highlight the element in focus.
const focusOutline = (theme) => {
  return {
    boxShadow: 0 0 1px 4px theme.colors.intent.focusOutline,
    outline: 0;
  };
};

cons focusText = (theme) => {
  return {
    color: theme.colors.intent.focusText,
  }
}

export const focus = {
  outline: focusOutline,
  text: focusText,
};

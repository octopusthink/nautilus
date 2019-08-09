import chroma from 'chroma-js';
import invariant from 'invariant';

// Check a colour for contrast against the theme's black and white values.
// Return whichever has the most contrast, and error if neither does.

// We need to throw an error with invariant, but eslint doesn't care for this approach. Let's not write harder to read code just to appease the linter gods.
// eslint-disable-next-line consistent-return
export const getContrastingTextColor = ({ color, theme }) => {
  const white = theme.colors.text.inverseLight;
  const black = theme.colors.text.dark;
  const contrastAgainstWhite = chroma.contrast(color, white);
  const contrastAgainstBlack = chroma.contrast(color, black);

  // Optimise for the most contrast.
  if (contrastAgainstWhite > contrastAgainstBlack) {
    if (contrastAgainstWhite >= 4.5) {
      return white;
    }
  }

  if (contrastAgainstBlack >= 4.5) {
    return black;
  }

  invariant(
    !(contrastAgainstWhite < 4.5 && contrastAgainstBlack < 4.5),
    `Your colour value ${color} lacks sufficient contrast against your theme's white (${white}) and black (${black}) values. Change the values in your theme or pass a new colour to ensure your text is readable.`,
  );
};

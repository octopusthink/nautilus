// ----------------------------------------
// Absolute Horizontal and Vertical Spacing
//
// https://ether.thescenery.co/spacing/
//
//
// Ether used the core typeface to generate sizes for the system spacing.
// fontCapHeight is defined as the x-height of the base0 font size
// ----------------------------------------

// Create spacing sizes tied to typography

const fontCapHeight = 0.9; // Cap-height of the base0 font size
const sizeModifier = fontCapHeight * 10; // used to convert to px in the end

// Calculate individual spacer heights/widths
const spacerNone = 0;
const spacer2xs = Math.round(sizeModifier * 0.5); // 5px
const spacerXs = sizeModifier; // 9px
const spacerSm = Math.round(sizeModifier * 1.5); // 14px
const spacerMd = Math.round(sizeModifier * 2.5); // 23px
const spacerLg = Math.round(sizeModifier * 4); // 36px
const spacerXl = Math.round(sizeModifier * 6.5); // 59px
const spacer2xl = Math.round(sizeModifier * 10.5); // 95px

// Spacer Options
const spacerSizes = {
  'none': `${spacerNone}px`,
  '2xsmall': `${spacer2xs}px`,
  'xsmall': `${spacerXs}px`,
  'small': `${spacerSm}px`,
  'medium': `${spacerMd}px`,
  'large': `${spacerLg}px`,
  'xlarge': `${spacerXl}px`,
  '2xlarge': `${spacer2xl}px`,
};

export default spacerSizes;

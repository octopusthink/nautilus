// ----------------------------------------
// Absolute Horizontal and Vertical Spacing
//
// https://ether.thescenery.co/spacing/
//
//
// Ether used the core typeface to generate sizes for the system spacing.
// fontCapHeight is defined as the x-height of the base0 font size
// ----------------------------------------

// Spacers follow a geometric pattern based on a grid of 8pt
const spacerNone = 0;
const spacerxxs = 4;
const spacerXs = 8;
const spacerSm = 16;
const spacerMd = 32;
const spacerLg = 48;
const spacerXl = 64;
const spacerxxl = 80;

// Output spacing in rem units so as to scale with type
const spacerSizes = {
  'none': `${spacerNone}rem`,
  'xxsmall': `${spacerxxs/10}rem`,
  'xsmall': `${spacerXs/10}rem`,
  'small': `${spacerSm/10}rem`,
  'medium': `${spacerMd/10}rem`,
  'large': `${spacerLg/10}rem`,
  'xlarge': `${spacerXl/10}rem`,
  'xxlarge': `${spacerxxl/10}rem`,
};

export default spacerSizes;

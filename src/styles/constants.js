// Allows lookup of font types without magic constants, eg:
// `{ fontType: FONT_TYPES.body }` instead of `{ fontType: 'body' }`.
export const FONT_TYPES = ['body', 'headings', 'interface'].reduce(
  (accumulator, type) => {
    return { ...accumulator, [type]: type };
  },
  {},
);

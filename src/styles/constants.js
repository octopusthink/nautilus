// Allows lookup of font types without magic constants, eg:
// `{ fontType: FONT_TYPES.body }` instead of `{ fontType: 'body' }`.
export const FONT_TYPES = ['body', 'heading', 'interfaceUI'].reduce(
  (accumulator, type) => ({ ...accumulator, [type]: type }),
  {},
);

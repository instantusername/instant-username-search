/**
 * @param s - String that its first letter to be capitalized
 * @returns the input string with first letter capitalized.
 *
 */
export const capitalizeFirstChar = s => {
  if (typeof s !== 'string') return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
};

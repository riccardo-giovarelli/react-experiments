/**
 * @function capitalizeAllWords
 *
 * @param {string} string String to capitalize
 * @returns {string} String capitalized
 */
export const capitalizeAllWords = (string: string): string =>
  string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

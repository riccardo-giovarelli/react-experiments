/**
 * @function capitalizeAllWords
 *
 * @param {String} string String to capitalize
 * @returns {String} String capitalized
 */
export const capitalizeAllWords = (string: String): String =>
  string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

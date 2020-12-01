const removePossibleExtraZeroFromStart = (datePart: string) => {
  return datePart.slice(-2);
};

/**
 * Formats date to `YYYY-MM-DD`
 */
export const formatDate = (dateObject: Date): string => {
  const date = removePossibleExtraZeroFromStart('0' + dateObject.getDate());
  const month = removePossibleExtraZeroFromStart('0' + dateObject.getMonth());
  const year = dateObject.getFullYear();

  return `${year}-${month}-${date}`;
};

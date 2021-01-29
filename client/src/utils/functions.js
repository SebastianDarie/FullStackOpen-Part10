export const convertThousands = (num) => {
  return num >= 1000 ? `${Math.round(num / 100) / 10}k` : num;
};

export const extractOnlyNumbers = (str) => {
  return str.replace(/[^-?0-9]/g, " ");
};

export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

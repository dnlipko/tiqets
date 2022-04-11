export const getPreDiscountPrice = (price: number, percent: number) => ((price * (percent+100)) / 100);

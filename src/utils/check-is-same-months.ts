export const checkIsSameMonths = (date1: string, date2: string) => {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  return parsedDate1.getMonth() === parsedDate2.getMonth();
};

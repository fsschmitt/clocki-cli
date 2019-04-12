const getDateString = (
  date: Date,
  monthTimeFormat: boolean = false
): string => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();
  return monthTimeFormat ? `${mm}-${dd}-${yyyy}` : `${dd}-${mm}-${yyyy}`;
};

const getDateObject = (date: string): Date => {
  const dArr = date.split("-");
  return new Date(Number(dArr[2]), Number(dArr[1]) - 1, Number(dArr[0]) + 1);
};

const getMonday = (date: Date): Date => {
  const day = date.getDay(),
    diff = date.getDate() - day + (day == 1 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
};

export const today = (monthTimeFormat: boolean = false) => {
  return getDateString(new Date());
};

export const now = () => {
  const today = new Date();
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0");
  const ss = String(today.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
};

export const getDaysOfWeek = (date: string): string[] => {
  const dateObj = getDateObject(date);
  const monday = getMonday(dateObj);
  const daysOfWeek = [];
  for (let i = 0; i < 5; i += 1) {
    let d = new Date(monday);
    d.setDate(d.getDate() + i);
    daysOfWeek.push(getDateString(d));
  }
  return daysOfWeek;
};

module.exports = { today, now, getDaysOfWeek };

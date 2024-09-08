import path from 'path';

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const toTitleCase = (str) => str.replace(/\w\S*/g, function(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
const getMonthName = (date) => MONTHS[new Date(date).getMonth()];
const getSlugFromPathname = (pathname) => path.basename(pathname, path.extname(pathname));

export { getMonthName as a, getSlugFromPathname as g, toTitleCase as t };

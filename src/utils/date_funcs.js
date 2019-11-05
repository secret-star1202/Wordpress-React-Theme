export default function parseDate(str) {
  if (navigator.userAgent.indexOf('Safari') > -1) {
    let [date, time] = str.split('T'),
      [year, mo, dom] = date.split('-');
    return new Date(`${[
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(mo, 10) - 1]
    } ${dom} ${year} ${time}`);
  }
  return new Date(str);
}

export const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'
];

export function toLocalStr(date) {
  return date.toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }).replace(':00 ', ' ');
}

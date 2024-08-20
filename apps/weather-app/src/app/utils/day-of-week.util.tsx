export const getDayOfWeek = (date: Date | string = new Date(), shorthand = false) => {
  const dayOfWeekNumber = typeof date === 'string' ?
    new Date(date).getDay() :
    date.getDay();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const shorthandDaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  return (shorthand ? shorthandDaysOfWeek : daysOfWeek)[dayOfWeekNumber];
}

// receives a day index 0-6 and returns the string as saved in the database.
const getDayName = (dayOfWeek) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return days[dayOfWeek];
};

module.exports = {
  getDayName
};

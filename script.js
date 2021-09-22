const solution = (day, daysShifted) => {
  //days of the week
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //find index of input day "day"
  const dayIndex = daysOfWeek.indexOf(day);
  //dayIndex added to daysShifted divided by 7(length of daysOfWeek), remainder is new day number
  const newDayIndex = (dayIndex + daysShifted) % daysOfWeek.length
  //find day associated with newDayIndex
  const newDay = daysOfWeek[newDayIndex];
  console.log(newDay);
  return newDay;
}

solution('Wed', 2);
solution('Sat', 5);

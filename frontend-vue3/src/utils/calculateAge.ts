export function getAge(dateString: string) {
  const today = new Date();
  const birthday = new Date(dateString);
  let years = today.getFullYear();
  let months = today.getMonth();
  let days = today.getDate();
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (today.getDate() < birthday.getDate()) {
    days = days + monthDays[months - 1];
    months = months - 1;
  }
  if (today.getMonth() < birthday.getMonth()) {
    months = months + 12;
    years = years - 1;
  }

  const d = days - birthday.getDate();
  const m = months - birthday.getMonth();
  const y = years - birthday.getFullYear();

  let birthdayString = `${y} years ${m} months ${d} days`;
  if (y < 1) {
    birthdayString = `${m} months ${d} days`;
  }
  if (m < 1) {
    birthdayString = `${d} days`;
  }

  return birthdayString;
}

function checkLeapYear() {
  const yearInput = document.getElementById('yearInput');
  const year = parseInt(yearInput.value);

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    document.getElementById('result').innerText = `${year} is a leap year.`;
  } else {
    document.getElementById('result').innerText = `${year} is not a leap year.`;
  }
}
const invalidEntry = "Invalid Entry, Try again.";
const exitDaily = "You exited the survey.";
const dailyInputMsg = "İptal: Exist\n\nEnter your daily note:";
const dateInputMsg = "İptal: Exist\n\nEnter date information:";
const successfullyAdded = "Successfully added"
let daily = [];

if (localStorage.daily) {
  daily = JSON.parse(localStorage.daily)
}

function dailyInput() {
  let value = prompt(dailyInputMsg);

  if (value === null) {
    return false;
  }

  value = value.trim();

  if (!value) {
    alert(invalidEntry);
    return dailyInput();
  }

  return value;
}

function dateInput() {
  let value = prompt(dateInputMsg);

  if (value === null) {
    return false;
  }
  value = value.trim();

  const date = new Date(value)

  if (isNaN(date.getTime())) {
    alert(invalidEntry);
    return dateInput();
  }

  if (!value) {
    alert(invalidEntry);
    return dateInput();
  }

  return value;
}

function mainMenu() {

  if (daily.length > 0) {
    const dailyList = daily.map((d, index) => `${index + 1} - Daily: ${d.dailyValue}, Date ${d.dateValue}`).join("\n");
    alert(dailyList);
  }

  let dailyValue = dailyInput();
  if (dailyValue === false) {
    alert(exitDaily);
    return;
  }

  let dateValue = dateInput();
  if (dateValue === false) {
    alert(exitDaily);
    return;
  }

  daily.push({ dailyValue, dateValue });

  localStorage.daily = JSON.stringify([]);

  alert(successfullyAdded);
}

mainMenu();
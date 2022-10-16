// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...
let x = new Date();
if (x instanceof Date) {
  console.log("It is a date!");
}

// 2. Create today's date
var now = new Date();
console.log(now);

// 3. Get the current timestamp (using a static method of Date)
console.log(now.getTime());

// 4. Create a date to represent next Christmas Day
var nextChristmasDay = new Date(2022, 11, 25);
console.log(nextChristmasDay);

// 5. Work out how many days it is until christmas

var now = new Date();
var christmasCountDown = new Date(now.getFullYear(), 11, 25);
if (now.getMonth() == 11 && now.getDate() > 25) {
  christmasCountDown.setFullYear(christmasCountDown.getFullYear() + 1);
}
var aDay = 1000 * 60 * 60 * 24;
console.log(
  Math.floor((christmasCountDown.getTime() - now.getTime()) / aDay) +
    " days until Christmas."
);
var aDay = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((christmasCountDown.getTime() - now.getTime()) / aDay) +
    " days until Christmas."
);

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);
console.log("Date 1 is earlier.");

// 7. How do I test if a date is valid? ****
var date = " ";
if (date instanceof Date && isFinite(date.getTime())) {
  console.log("Date is valid.");
} else {
  console.log("Date is not valid.");
}

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
var now = new Date();

var mm = now.getMonth() + 1;
var dd = now.getDate();
var yyyy = now.getFullYear();

if (mm < 10) mm = 0 + mm;
if (dd < 10) dd = 0 + dd;

var dateNewFormat = mm + "-" + dd + "-" + yyyy;
console.log(dateNewFormat);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
var now = new Date();
let localDate = now.toLocaleDateString("en-GB");
console.log(localDate);

let GermanDate = now.toLocaleDateString("de-DE");
console.log(GermanDate);

// 10. Output the current time in hours, mins & seconds
var theTime = new Date();
console.log(theTime.toLocaleTimeString());

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

setInterval(timer, 1000);
function timer() {
  var countOn = new Date();
  console.log(countOn.toLocaleTimeString());
}
// 12. Create a copy of today

var d = new Date();
console.log(d);

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
var futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 1);
console.log(futureDate);

futureDate.setMonth(futureDate.getMonth() + 2);
console.log(futureDate);

futureDate.setFullYear(futureDate.getFullYear() + 3);
console.log(futureDate);

// Tried to use function chaining but it kept saying there was an error. It works when I did it seperatly, as above.

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
var time = new Date();
var timezone = time.getTimezoneOffset();
console.log(timezone);
//(We are 60 minutes ahead because we are in BST)

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
var options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var theDate = new Date();

var dateInSydney = new Intl.DateTimeFormat(
  "en-AU",
  { timeZone: "Australia/Sydney" },
  options1
);

console.log(dateInSydney.format(theDate));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.
var milliseconds = (years, months, days, hrs, mins, secs) =>
  (years * 12 * 30 * 24 * 60 * 60 +
    months * 30 * 24 * 60 * 60 +
    days * 24 * 60 * 60 +
    hrs * 60 * 60 +
    mins * 60 +
    secs) *
  1000;
console.log(milliseconds(1, 1, 1, 1, 1, 1));
console.log(`Milliseconds in a second: ${milliseconds(0, 0, 0, 0, 0, 1)}`);
console.log(`Milliseconds in a minute: ${milliseconds(0, 0, 0, 0, 1, 0)}`);
console.log(`Milliseconds in an hour: ${milliseconds(0, 0, 0, 1, 0, 0)} `);
console.log(`Milliseconds in a day: ${milliseconds(0, 0, 1, 0, 0, 0)}`);
console.log(
  `Milliseconds in a 30 day month: ${milliseconds(0, 1, 0, 0, 0, 0)}`
);
console.log(`Milliseconds in a year: ${milliseconds(1, 0, 0, 0, 0, 0)}`);

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates
var oldDate = new Date(1990, 00, 23);
var newDate = new Date(2022, 10, 16);
var diff = newDate - oldDate;
console.log(diff);

var seconds = (newDate - oldDate) / 1000;
var minutes = (newDate - oldDate) / (60 * 1000);
var hours = (newDate - oldDate) / (60 * 60 * 1000);
var days = (newDate - oldDate) / (60 * 60 * 24 * 1000);
var months = (newDate - oldDate) / (30.4 * 60 * 60 * 24 * 1000);
var years = (newDate - oldDate) / (12 * 30.4 * 60 * 60 * 24 * 1000);

console.log(`There are ${diff} milliseconds between the two dates.`);

console.log(`There are ${seconds} seconds bewteen the two dates.`);
console.log(`There are ${minutes} minutes between the two dates.`);
console.log(`There are ${hours} hours between the two dates.`);
console.log(`There are ${days} days between the two dates.`);
console.log(`There are ${months} months between the two dates.`);
console.log(`There are ${years} years between the two dates.`);

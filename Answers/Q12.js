// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();

console.log(date);

//     - What is the year today?
console.log(date.getFullYear());

//     - What is the month today as a number?

console.log(date.getMonth());

//     - What is the date today?

console.log(date.getDate());

// //     - What is the day today as a number?

console.log(date.getDay());

//     - What is the hours now?

console.log(date.getHours());

//     - What is the minutes now?

console.log(date.getMinutes());

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let past = new Date('1970-01-01');

let now = new Date();

let elapsed = (now - past);

console.log(elapsed / 1000);




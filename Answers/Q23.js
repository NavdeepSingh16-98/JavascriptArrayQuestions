// 23. Write a program which tells the number of days in a month, now consider leap year.


const prompt = require('prompt-sync')();

const year = prompt('enter leap year: ');

const month = prompt('enter month: ');

function getDaysInMonth(year,month){


    return new Date(year,month,0).getDate();

}


console.log(`Days in ${year} and  ${month} are ${getDaysInMonth(year,month)}`)
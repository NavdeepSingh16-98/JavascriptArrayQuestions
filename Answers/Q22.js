// 22. Write a program which tells the number of days in a month.


const prompt = require('prompt-sync')();

const year = prompt('enter full year: ');

const month = prompt('enter month: ');

function getDaysInMonth(year,month){


    return new Date(year,month,0).getDate();

}


console.log(`Days in ${year} and  ${month} are ${getDaysInMonth(year,month)}`)

//console.log(new Date(2016,2,0).getDate());
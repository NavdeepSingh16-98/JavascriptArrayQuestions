// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).



const prompt = require('prompt-sync')();

const base = prompt('Enter Base');

const height = prompt('Enter Height');

console.log('area is ',0.5*base*height);
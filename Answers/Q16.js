// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const prompt = require('prompt-sync')();

const radius = prompt('Enter Radius ');

const area = 3.14*radius*radius;

const cicumference = 2*3.14*radius;

console.log(`area is ${area}, circumference is ${cicumference}`);


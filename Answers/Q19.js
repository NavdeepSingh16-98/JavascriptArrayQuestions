// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


const prompt = require('prompt-sync')();


let number = prompt('Enter the number ');

if(number%2 == 0){

    console.log('number is even');
}else{

    console.log('number is odd');
}
// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let sampleStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let arr = sampleStr.split(',');

arr.forEach((a)=>{

    console.log(a);
})
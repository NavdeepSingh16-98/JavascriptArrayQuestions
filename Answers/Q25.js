//  25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea' 


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(shoppingCart);

console.log('now adding meat at beginning');


shoppingCart.unshift('Meat');
console.log(shoppingCart);


console.log('now adding sugar at end');

shoppingCart.push('Sugar');

console.log(shoppingCart);


console.log('now removing Honey');

let index = shoppingCart.indexOf('Honey');

shoppingCart.splice(index,1);

console.log(shoppingCart);

console.log('now changing tea to green tea');

let index1 = shoppingCart.indexOf('Tea');

shoppingCart.splice(index1,1,'Green Tea');

console.log(shoppingCart);

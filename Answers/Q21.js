// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const prompt = require('prompt-sync')();


let season = {
    Autumn:['September', 'October' ,'November'],
     Winter:[ 'December', 'January', 'February'],
      Spring:['March', 'April' , 'May'] ,
       Summer:['June', 'July' , 'August']

}

let name = prompt('Enter Season name: ');

if(season['Autumn'].includes(name)){

    console.log('Autumn');
}else if(season['Winter'].includes(name)){
    console.log('Winter');

}else if(season['Spring'].includes(name)){

    console.log('Spring');
}else if(season['Summer'].includes(name)){
    console.log('Summer');

}else{
    console.log('Enter valid name');
}

// switch(name){

//     case season['Autumn'].includes(name):
//         console.log('Autumn');
//         break;
//     case season['Winter'].includes(name):
//         console.log('Winter');
//         break;
//     case season['Spring'].includes(name):
//         console.log('Spring');
//         break;
//     case season['Summer'].includes(name):
//         console.log('Summer');
//         break;
//     default:
//         console.log('Enter valid name');
// }


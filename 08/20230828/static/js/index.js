// import {sum as mySum} from './mymodule.js'; 
// import sum from './mymodule.js';
import {default as sum, makeTable} from './mymodule.js';

console.log(sum(15,15));
// console.log(mySum(10,20)) -> default 제외, 단일 export시 문제

window.onload=function(){
    makeTable("box",4,5);
    makeTable("box2",7,10);
}

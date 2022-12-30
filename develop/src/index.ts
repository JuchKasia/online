// console.log("Hello World!");

import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";

import {list} from '../list';

//  function getRandomArray -------------------------------------------------
// eslint-disable-next-line prefer-const
let randomArray: number[] = [];
function getRandomArray(m:number,max:number) {
  for(let i = 0;i<m;i++){
    const num:number = Math.floor(Math.random() * max);
    if(!randomArray.includes(num)){
      randomArray.push(num);
    } else {
      m--;
    }
  }
return randomArray;
}
let arrayForCards:Array<number>=[];
arrayForCards= getRandomArray(20,99);
console.log(arrayForCards);


// function getRandomArray finish -----------------------------------------

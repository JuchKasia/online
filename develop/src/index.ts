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


//  function buildCards -------------------------------------------------
const productDetailText = document.querySelectorAll('.product-detail-text');
const cardsStock = document.querySelectorAll('.stock');
const priceProduct = document.querySelectorAll('.price');
const productTitle = document.querySelectorAll('.product-title');

// console.log("card " +priceProduct.length);
// console.log("card " +cardsStock.length);
// console.log(productTitle.length);

for(let i = 0;i<productDetailText.length;i++){
    productDetailText[i].innerHTML = list[arrayForCards[i]].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+list[arrayForCards[i]].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + "" + list[arrayForCards[i]].price;
    productTitle[i].innerHTML = list[arrayForCards[i]].title;
}


//  function getRandomArrayBest -------------------------------------------------

const randomArrayBest: number[] = [];
function getRandomArrayBest(m: number, max: number) {
  for(let i = 0; i < m; i++) {
    const num: number = Math.floor(Math.random() * max);
    if(!randomArrayBest.includes(num)) {
      randomArrayBest.push(num);
    } else {
      m--;
    }
  }
return randomArrayBest;
}
let arrayForCardsBest: Array<number> = [];
arrayForCardsBest = getRandomArrayBest(3, 99);
console.log(arrayForCardsBest);

// function buildBestsellerCards -----------------------------------------
const productTitleBest = document.querySelectorAll('.product-title-aside');

for (let j = 0; j < productTitleBest.length; j++) {
    productTitleBest[j].innerHTML = list[arrayForCardsBest[j]].title;
}
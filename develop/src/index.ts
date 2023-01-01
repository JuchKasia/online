// console.log("Hello World!");

import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";


import {list} from '../list';

const forLocal = {"category": ""}; 
let listCategory = list;
// function getCategoryArray start ------------------------------------------
function getCategoryArray(){
  listCategory = [];
for(let i = 0;i<list.length;i++){
// console.log('list[i].category ' +list[i].category+" : "+" forLocal.category " +forLocal.category);
  if (list[i].category == forLocal.category){
    listCategory.push(list[i]);
  }
  
}
console.log('listCategory '+listCategory.length);
}

//  function getRandomArray -------------------------------------------------
// eslint-disable-next-line prefer-const
let randomArray: number[] = [];
function getRandomArray(m:number,max:number) {
  randomArray = [];
  for(let i = 0;i<m;i++){
    const num:number = Math.floor(Math.random() * max);
    if(!randomArray.includes(num)){
      randomArray.push(num);
    } else {
      i--;
    }
  }
return randomArray;
}
let arrayForCards:Array<number>=[];
arrayForCards= getRandomArray(18,99);
console.log(arrayForCards);

// function getRandomArray finish -----------------------------------------


//  function buildCards -------------------------------------------------
const productDetailText = document.querySelectorAll('.product-detail-text');
const cardsStock = document.querySelectorAll('.stock');
const priceProduct = document.querySelectorAll('.price');
const productTitle = document.querySelectorAll('.product-title');
const mainCardImg = document.querySelectorAll('.img-prod1');
const secondCardImg = document.querySelectorAll('.img-prod2');

// console.log("card " +priceProduct.length);
// console.log("card " +cardsStock.length);
// console.log(productTitle.length);
function buildCards(){
for(let i = 0;i<productDetailText.length; i++){
    productDetailText[i].innerHTML = list[arrayForCards[i]].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+list[arrayForCards[i]].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + list[arrayForCards[i]].price;
    productTitle[i].innerHTML = list[arrayForCards[i]].title;
    mainCardImg[i].setAttribute('src',`${list[arrayForCards[i]].images[0]}`);
    secondCardImg[i].classList.add("non");
}
}
buildCards();
function buildCardsCategory(){
  for(let i = 0;i<listCategory.length;i++){
    productDetailText[i].innerHTML = listCategory[i].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+listCategory[i].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i].price;
    productTitle[i].innerHTML = listCategory[i].title;
    mainCardImg[i].setAttribute('src',`${listCategory[i].images[0]}`);
    secondCardImg[i].classList.add("non");
  }
  
}
//  function getRandomArrayBest -------------------------------------------------
let arrayForCardsBest: Array<number> = [];
arrayForCardsBest = getRandomArray(3, 99);
// console.log('arrayForCardsBest '+arrayForCardsBest);

// function buildBestsellerCards -----------------------------------------
const productTitleBest = document.querySelectorAll('.product-title-best');
const priceProductBest = document.querySelectorAll('.price-best');

for (let j = 0; j < productTitleBest.length; j++) {
    productTitleBest[j].innerHTML = list[arrayForCardsBest[j]].title;
    priceProductBest[j].innerHTML = priceProductBest[j].innerHTML[0] + " " + list[arrayForCardsBest[j]].price;
}


//  function getRandomArraySpec -------------------------------------------------
let arrayForCardsSpec: Array<number> = [];
arrayForCardsSpec = getRandomArray(3, 99);
// console.log('arrayForCardsSpec '+arrayForCardsSpec);

// function buildSpecialCards -----------------------------------------
const productTitleSpec = document.querySelectorAll('.product-title-spec');
const productWithDisc = document.querySelectorAll('.price-spec');
const priceProductSpec = document.querySelectorAll('.regular-price');
const discountProductSpec = document.querySelectorAll('.discount-spec');


for (let k = 0; k < productTitleSpec.length; k++) {
    productTitleSpec[k].innerHTML = list[arrayForCardsSpec[k]].title;
    productWithDisc[k].innerHTML =productWithDisc[k].innerHTML[0]+" "+(list[arrayForCardsSpec[k]].price - list[arrayForCardsSpec[k]].price/100*list[arrayForCardsSpec[k]].discount);
    priceProductSpec[k].innerHTML = priceProductSpec[k].innerHTML[0] + " " + list[arrayForCardsSpec[k]].price;
    discountProductSpec[k].innerHTML ="% " + list[arrayForCardsSpec[k]].discount;
}

// category selection  ------------------------------------------------------------
const mainCategory = document.querySelectorAll('.category');

 for(let i = 0;i<mainCategory.length;i++){
   mainCategory[i].addEventListener('click', function(){
  (i==0) ? forLocal.category = 'men' : forLocal.category='women';
  console.log(forLocal.category);
  getCategoryArray();
  buildCardsCategory()
   });
 }
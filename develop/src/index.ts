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
  // const way = document.querySelector('.way');
  // console.log('way.innerHTML '+way.innerHTML);
  // console.log('forLocal '+forLocal.category)
  for(let i = 0;i<listCategory.length;i++){
    productDetailText[i].innerHTML = listCategory[i].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+listCategory[i].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i].price;
    productTitle[i].innerHTML = listCategory[i].title;
    mainCardImg[i].setAttribute('src',`${listCategory[i].images[0]}`);
    secondCardImg[i].classList.add("non");
  }
  // way.innerHTML = forLocal.category;
}
//  function getRandomArrayBest -------------------------------------------------
let arrayForCardsBest: Array<number> = [];
arrayForCardsBest = getRandomArray(3, 99);
// console.log('arrayForCardsBest '+arrayForCardsBest);

// function buildBestsellerCards -----------------------------------------
const productTitleBest = document.querySelectorAll('.product-title-best');
const priceProductBest = document.querySelectorAll('.price-best');
const imgBest = document.querySelectorAll('.product-bestseller-img');


for (let j = 0; j < productTitleBest.length; j++) {
  // let img = document.createAttribute('img')
    productTitleBest[j].innerHTML = list[arrayForCardsBest[j]].title;
    priceProductBest[j].innerHTML = priceProductBest[j].innerHTML[0] + " " + list[arrayForCardsBest[j]].price;
    imgBest[j].setAttribute('src', `${list[arrayForCardsBest[j]].images[0]}`);
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
const imgSpec = document.querySelectorAll('.product-special-img');


for (let k = 0; k < productTitleSpec.length; k++) {
    productTitleSpec[k].innerHTML = list[arrayForCardsSpec[k]].title;
    productWithDisc[k].innerHTML =productWithDisc[k].innerHTML[0]+" "+(list[arrayForCardsSpec[k]].price - list[arrayForCardsSpec[k]].price/100*list[arrayForCardsSpec[k]].discount);
    priceProductSpec[k].innerHTML = priceProductSpec[k].innerHTML[0] + " " + list[arrayForCardsSpec[k]].price;
    discountProductSpec[k].innerHTML ="% " + list[arrayForCardsSpec[k]].discount;
    imgSpec[k].setAttribute('src', `${list[arrayForCardsSpec[k]].images[0]}`);
}

// category selection  ------------------------------------------------------------
const mainCategory = document.querySelectorAll('.category');
const textCategoryMen = document.querySelector('.text-main-category-men');
const textCategoryWomen = document.querySelector('.text-main-category-women');

 for(let i = 0;i<mainCategory.length;i++){
const way = document.querySelector('.way');
   mainCategory[i].addEventListener('click', function(){
  // (i==0) ? forLocal.category = 'men' : forLocal.category='women';
  if(i==0){
    forLocal.category = 'men';
    textCategoryWomen.classList.add('non');
    textCategoryMen.classList.remove('non');
  }else if(i==1) {
    forLocal.category = 'women';
    textCategoryWomen.classList.remove('non');
    textCategoryMen.classList.add('non');
  }
  way.innerHTML="Category : "+ forLocal.category;
  console.log(forLocal.category);

  getCategoryArray();
  buildCardsCategory()
   });
 }


// size filter left-aside ----------------------------------------------------------
let count:number;
const sizeLabel = document.querySelectorAll('.size-label');
const sizeInput = document.querySelectorAll('.size-input');
// const sizeInputItem = document.querySelector('.size-input');
// console.log(list[1].size);
// sizeInputItem.addEventListener('click', (e) => sizeInputItem.chec)

for (let i=0; i < sizeLabel.length; i++) {
 count = 0;
 sizeInput[i].addEventListener('click', () => {
  sizeLabel[i].classList.toggle('checked');
 })
  for (let j = 0; j < list.length; j++) {
    if (sizeLabel[i].innerHTML == list[j].size) {
      count++;
    }
  }
  sizeLabel[i].innerHTML = sizeLabel[i].innerHTML.slice(0, 2) + ` (` + `${count}` + ')';
}

// for (let i = 0; i < sizeInput.length; i++) {
//   console.log(sizeInput[i]);
// }


// color filter left-aside ----------------------------------------------------------
let countColor: number;
const colorLabel = document.querySelectorAll('.color-label');
const colorInput = document.querySelectorAll('.color-input');

for (let i=0; i < colorLabel.length; i++) {
  countColor = 0;
  colorInput[i].addEventListener('click', () => {
    colorLabel[i].classList.toggle('checked');
  })
  for (let j = 0; j < list.length; j++) {
    if (colorLabel[i].innerHTML == list[j].color) {
      countColor++;
    }
  }
  colorLabel[i].innerHTML = colorLabel[i].innerHTML.slice(0, 7) + ` (` + `${countColor}` + ')';
}


// dual range slider for search filter ----------------------------------------------------------


// sort product by grid and list----------------------------------------------------------
const showGrid = document.querySelector('.show-grid');
const showList = document.querySelector('.show-list');
const productWrapper = document.querySelector('.product-wrapper');

showGrid.addEventListener('click', () => {
  productWrapper.classList.add('product-wrapper-grid');
  productWrapper.classList.remove('product-wrapper-list');
})

showList.addEventListener('click', () => {
  productWrapper.classList.remove('product-wrapper-grid');
  productWrapper.classList.add('product-wrapper-list');
})


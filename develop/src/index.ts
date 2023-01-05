// console.log("Hello World!");

import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";


import {list} from '../list';

const category = new Set<string>(["men","women"]);
const size = new Set<string>([]);
const color = new Set<string>([]);

const forLocal = {
  category,
  size,
  color
} 
let listCategory = list;
// forLocal.category('men');
// forLocal.category.add('women');
// console.log(forLocal.size.size)
// console.log(listCategory[0].price)

// function getCategoryArray start ------------------------------------------
// аналитика доступных карточек на основе выбранных пунктов
function getCategoryArray(){
  listCategory = [];
for(let i = 0;i<list.length;i++){
// здесь выбор по men \ women
  // if (list[i].category == forLocal.category){
    if(forLocal.category.has(list[i].category)){
    
    // если размер какой-нибудь активирован -------------------------------------
if(forLocal.size.size>0){
  if(forLocal.color.size>0){
    if(forLocal.color.has(list[i].color)&&forLocal.size.has(list[i].size)){
      listCategory.push(list[i]);
    }
  }else {
    if(forLocal.size.has(list[i].size)){
    
    listCategory.push(list[i]);
    }
  }
  
    //  добавляем эти карточки в listCategory -------------------------------------
} else {
  // здесь происходит когда нет размеров
  if(forLocal.color.size>0){
    // здесь происходит когда есть цвета
    if(forLocal.color.has(list[i].color)){
      listCategory.push(list[i]);
    }

  } else {
    listCategory.push(list[i]);
  }
   
}
    
   
  }
  
}
localStorage.setItem('listCategory',JSON.stringify(listCategory));
// let poluchitObj = JSON.parse(localStorage.getItem('listCategory'));
console.log('listCategory '+listCategory.length);
}

//  function getRandomArray -------------------------------------------------
// eslint-disable-next-line prefer-const
let randomArray: number[] = [];
let arrayForCardsSpec: Array<number> = [];
let arrayForCardsBest: Array<number> = [];

function getRandomArray(m:number,max:number) {
  randomArray = [];
  // arrayForCardsSpec = [];
  // arrayForCardsBest = [];
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
arrayForCardsSpec = getRandomArray(3, 99);
arrayForCardsBest = getRandomArray(3, 99);
console.log(arrayForCards);
console.log(arrayForCardsBest);
console.log(arrayForCardsSpec);
// function getRandomArray finish -----------------------------------------


//  function buildCards -------------------------------------------------
const productDetailText = document.querySelectorAll('.product-detail-text');
const cardsStock = document.querySelectorAll('.stock');
const priceProduct = document.querySelectorAll('.price');
const productTitle = document.querySelectorAll('.product-title');
const mainCardImg = document.querySelectorAll('.img-prod1');
const secondCardImg = document.querySelectorAll('.img-prod2');
const productMiniature = document.querySelectorAll('.product-miniature');
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
(!JSON.parse(localStorage.getItem('listCategory')))?buildCardsCategory:
buildCards();
function buildCardsCategory(){
  clearCards();
  for(let i = 0;i<listCategory.length;i++){
    productMiniature[i].classList.remove('non');
    productDetailText[i].innerHTML = listCategory[i].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+listCategory[i].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i].price;
    productTitle[i].innerHTML = listCategory[i].title;
    mainCardImg[i].setAttribute('src',`${listCategory[i].images[0]}`);
    secondCardImg[i].classList.add("non");
  }
}
function clearCards(){
  for(let i = 0;i<productMiniature.length;i++){
   if(i<listCategory.length){
    continue;
   } else {
    productMiniature[i].classList.add('non');
   }

  }
  
}
//  function getRandomArrayBest -------------------------------------------------

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
    forLocal.category.delete('women');
    forLocal.category.add('men');
    textCategoryWomen.classList.add('non');
    mainCategory[0].classList.add('checked');
    textCategoryMen.classList.remove('non');
    mainCategory[1].classList.remove('checked');
    // нужно добавить функцию перебора форлокал и достать результат
    way.innerHTML="Category : "+ mainCategory[0].innerHTML;
  }else if(i==1) {
    forLocal.category.delete('men');
    forLocal.category.add('women');
    textCategoryWomen.classList.remove('non');
    mainCategory[0].classList.remove('checked');
    textCategoryMen.classList.add('non');
    mainCategory[1].classList.add('checked');
    way.innerHTML="Category : "+  mainCategory[1].innerHTML;
  }
  
  console.log(forLocal.category);
  // localStorage.setItem('category',forLocal.category);
  getCategoryArray();
  buildCardsCategory();
   });
 }

//  finish category selection ----------------------------------------------------


// size filter left-aside ----------------------------------------------------------
let count:number;
const sizeLabel = document.querySelectorAll('.size-label');
const sizeInput = document.querySelectorAll('.size-input');

for (let i=0; i < sizeLabel.length; i++) {
 count = 0;

 sizeInput[i].addEventListener('click', () => {
  sizeLabel[i].classList.toggle('checked');
    if(!forLocal.size.has(sizeLabel[i].innerHTML.split(' ')[0])){
    forLocal.size.add(sizeLabel[i].innerHTML.split(' ')[0])
  } else 
  if(forLocal.size.has(sizeLabel[i].innerHTML.split(' ')[0])){
    forLocal.size.delete(sizeLabel[i].innerHTML.split(' ')[0])
  }
  console.log(forLocal.size)
getCategoryArray();
buildCardsCategory();
console.log(listCategory);
 });
  for (let j = 0; j < listCategory.length; j++) {
    if (sizeLabel[i].innerHTML == listCategory[j].size) {
      count++;
    }
  }
  sizeLabel[i].innerHTML = sizeLabel[i].innerHTML.slice(0, 2) + ` (` + `${count}` + ')';
  
}

// color filter left-aside ----------------------------------------------------------
let countColor: number;
const colorLabel = document.querySelectorAll('.color-label');
const colorInput = document.querySelectorAll('.color-input');

for (let i=0; i < colorLabel.length; i++) {
  countColor = 0;
  colorInput[i].addEventListener('click', () => {
    colorLabel[i].classList.toggle('checked');
    if(!forLocal.color.has(colorLabel[i].innerHTML.split(' ')[0])){
      forLocal.color.add(colorLabel[i].innerHTML.split(' ')[0])
    } else if(forLocal.color.has(colorLabel[i].innerHTML.split(" ")[0])){
      forLocal.color.delete(colorLabel[i].innerHTML.split(' ')[0])
    }
    getCategoryArray();
buildCardsCategory();
  });
  for (let j = 0; j < listCategory.length; j++) {
    if (colorLabel[i].innerHTML == listCategory[j].color) {
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

// sort product by price in main menu-----------------------------------------------------

// const dropLowToHigh = document.querySelector('.drop-low-to-high');
// const dropHighToLow = document.querySelector('.drop-high to low');
// const dropAZ = document.querySelector('.drop-AZ');
// const dropZA = document.querySelector('.drop-ZA');

// Этот пример массива я прописывала, когда писала код 

// const listCategory  =
//  [
//   {
//     "id": 1,
//     "title" : "shirt",
//   "brand":"Gucci",
//   "category": "women",
//   "price":26,
//   },
//   {
//     "id":2,
//     "title":"shirt",
//   "brand":"Prada",
//   "category":"women",
//   "price":48,
//   },
//   {
//     "id":3,
//     "title":"shirt",
//   "brand":"Dior",
//   "category":"women",
//   "price":38, 
//   }];

// КОД В JS, который работает.

// const sortDropDownMenu = function() {
//   const dropDownMenu = document.querySelector('.drop-down-menu');
//   dropDownMenu.addEventListener("change", function() {
//     function sortLowToHigh(listCategory) {
//       listCategory.sort((a, b) => a.price > b.price ? 1 : -1);
//     }
//     sortLowToHigh(listCategory);
//     console.log(listCategory);
//   });
// }
// sortDropDownMenu()


// Этот же код с поправленными данными в TS


// const sortDropDownMenu = function() {
  const dropDownMenu = document.querySelector('.drop-down-menu');
  dropDownMenu.addEventListener("change", function() {
    if(this.value=='high'){
      sortLowToHigh(listCategory);
      buildCardsCategory();
    }

    if(this.value=='low') {
      sortHighToLow(listCategory);
      buildCardsCategory();
    }

    // if(this.value=='az') {
    //   // listCategory.sort(sortAZ);
    //   sortAZ(listCategory);
    //   // SortArray(listCategory, listCategory);
    //   buildCardsCategory();
    // }

    function sortLowToHigh(listCategory: { price: number; }[]) {
      listCategory.sort((a : {price: number}, b: {price: number}): number => a.price > b.price ? 1 : -1);
    }
    function sortHighToLow(listCategory: { price: number; }[]) {
      listCategory.sort((a : {price: number}, b: {price: number}): number => a.price > b.price ? 1 : -1).reverse();
    }
    // function sortAZ(listCategory: { title: string; }[]) {
    //   listCategory.sort((a : {title: string}, b: {title: string}): string => a.title > b.title ? 1 : -1);
      // if (a.title < b.title) {return -1;}
      // if (a.title > b.title) {return 1;}
      // return 0;
    // }
  })
  //   function SortArray(x, y){
  //     return x.title.localeCompare(y.title);
  //   }
  //   listCategory.sort(SortArray);
  // });

// }
// sortDropDownMenu()

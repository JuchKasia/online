// console.log("Hello World!");
// 6,7,14,23,27
import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";

// import {Product} from './assets/types';
import {list} from '../list';
import {sizeFilter,colorFilter} from './category';

const category = new Set<string>(["men","women"]);
const size = new Set<string>([]);
const color = new Set<string>([]);

export const forLocal = {
  category,
  size,
  color
} 
// export const basket = [];
//  listCategory: Product;
// console.log(localStorage.getItem('listCategory'))
export let  listCategory = list;
// forLocal.category('men');
// forLocal.category.add('women');
// console.log(forLocal.size.size)
// console.log(listCategory[0].price)

// function getCategoryArray start ------------------------------------------
const sortText = document.querySelector('.sort-text');
// аналитика доступных карточек на основе выбранных пунктов
export function getCategoryArray(){

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
sizeFilter();
colorFilter();
if(listCategory.length<19){
  sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join(" ")} ${listCategory.length} ${sortText.innerHTML.split(" ").slice(-1)}`
}else {
  sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join(" ")} 18 ${sortText.innerHTML.split(" ").slice(-1)}`
}
console.log(listCategory)
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

const cartProductsCount = document.querySelector('.cart-products-count');
console.log( Number(cartProductsCount.innerHTML));
export function buildCardsCategory(){
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
  // sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join("")} ${listCategory.length} ${sortText.innerHTML.split(" ").slice(-1)}`

      
    
}
// const addcards = document.querySelectorAll('.btn-add-to-cart');
//       for(let i = 0;i<addcards.length;i++){
//         addcards[i].addEventListener('click',function(){
//         // cartProductsCount.innerHTML = +cartProductsCount.innerHTML++
//     console.log(listCategory[i]);
//     console.log(addcards[i])
//         });
//       }




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
export const mainCategory = document.querySelectorAll('.category');
export const textCategoryMen = document.querySelector('.text-main-category-men');
export const textCategoryWomen = document.querySelector('.text-main-category-women');


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
    way.innerHTML="Category : Men";
  }else if(i==1) {
    forLocal.category.delete('men');
    forLocal.category.add('women');
    textCategoryWomen.classList.remove('non');
    mainCategory[0].classList.remove('checked');
    textCategoryMen.classList.add('non');
    mainCategory[1].classList.add('checked');
    way.innerHTML="Category : Women";
  }
  
  // console.log(forLocal.category);
  // localStorage.setItem('category',forLocal.category);
  getCategoryArray();
  buildCardsCategory();
   });
 }

//  finish category selection ----------------------------------------------------


// size filter left-aside ----------------------------------------------------------
let count:number;
export const sizeLabel = document.querySelectorAll('.size-label');
export const sizeInput = document.querySelectorAll('.size-input');

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
  // console.log(forLocal.size)
getCategoryArray();
buildCardsCategory();
// console.log(listCategory);
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
export const colorLabel = document.querySelectorAll('.color-label');
export const colorInput = document.querySelectorAll('.color-input');

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
const productMiniatures = document.querySelectorAll('.product-miniature');

showGrid.addEventListener('click', () => {
  productWrapper.classList.add('product-wrapper-grid');
  productWrapper.classList.remove('product-wrapper-list');
  showGrid.classList.add('background-color');
  showList.classList.remove('background-color');
  for (let i=0; i< productMiniatures.length; i++) {
    productMiniatures[i].classList.remove('flex-row');
  }

})

showList.addEventListener('click', () => {
  productWrapper.classList.remove('product-wrapper-grid');
  productWrapper.classList.add('product-wrapper-list');
  showList.classList.add('background-color');
  showGrid.classList.remove('background-color');
  for (let i=0; i< productMiniatures.length; i++) {
    productMiniatures[i].classList.add('flex-row');
  }
  
  // showGrid.classList.remove('flex-row');
})

// sort product by price in main menu-----------------------------------------------------

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

    if(this.value=='az') {
      sortAZ(listCategory);
      console.log(listCategory);
      buildCardsCategory();
    }
    
    if(this.value=='za') {
      sortZA(listCategory);
      console.log(listCategory);
      buildCardsCategory();
    }


    function sortLowToHigh(listCategory: { price: number; }[]) {
      listCategory.sort((a : {price: number}, b: {price: number}): number => a.price > b.price ? 1 : -1);
    }
    function sortHighToLow(listCategory: { price: number; }[]) {
      listCategory.sort((a : {price: number}, b: {price: number}): number => a.price > b.price ? 1 : -1).reverse();
    }

    function sortAZ(listCategory: { title: string; }[]) {
      listCategory.sort(function(a: {title: string}, b: {title: string}): number {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
         //сортируем строки по возрастанию
        if (titleA < titleB) {
          return -1
        } 
        if (titleA > titleB) {
          return 1
        }
        return 0 
      })
    }

    function sortZA(listCategory: { title: string; }[]) {
      listCategory.sort(function(a: {title: string}, b: {title: string}): number {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        //сортируем строки по уыванию
        if (titleA < titleB) {
          return -1
        } 
        if (titleA > titleB) {
          return 1
        }
        return 0 
       }).reverse();
    }
  });




  // list category img -----------------------------------------------
const listCategoryImg = ['https://img.freepik.com/free-photo/portrait-handsome-man_158595-3414.jpg?w=1060&t=st=1673293770~exp=1673294370~hmac=59a4bda47004f4bbd3d261b05ca193e50021cc2dc4eb19102d674646825e9578', 'https://img.freepik.com/free-photo/shallow-focus-shot-posing-handsome-smiling-european-guy-hat_181624-61284.jpg?w=1060&t=st=1673293793~exp=1673294393~hmac=0a76c438833d9d01a23c5d064703e4d13c40dd4ab64f1de6ef7687b42c52ebe4', 'https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26582.jpg?w=1060&t=st=1673294250~exp=1673294850~hmac=c95ac2d51f54372698969fba827480816b14e4c2cdd93ed83466a786a393cc0b', 'https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?w=1060&t=st=1673294269~exp=1673294869~hmac=17ed82fb7efa83890f41a1e1c7756786a1df0a8840fa58348318f5cfcec673b4', 'https://img.freepik.com/free-photo/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall_197531-24462.jpg?w=1060&t=st=1673294271~exp=1673294871~hmac=9c114b52890ff1a1c7e1a914e66a1af5fc4b4bfe81aae4b1b5b45343fa470484', 'https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4636.jpg?w=1060&t=st=1673294275~exp=1673294875~hmac=4f680379b04c021c9e5732c86dad1fe876fad7156491a1753bcc02fd48feb904'];
const coverProduct = document.querySelector('.cover-product');

coverProduct.setAttribute('src',`${listCategoryImg[0]}`);
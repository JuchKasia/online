// console.log("Hello World!");
// 6,7,14,23,27
import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";

// import {Product} from './assets/types';
import {list} from '../list';
import {sizeFilter,colorFilter,addToCarts, basket} from './category';
// import {proso} from './modalPuchase';
// import { fstat } from "fs";
// import {} from './desc';

const category = new Set<string>(["men","women"]);
const size = new Set<string>([]);
const color = new Set<string>([]);

export const forLocal = {
  category,
  size,
  color
} 
export let countRandom = 0;
export let  listCategory = [...list];
listCategory.length = 0;

//  function getRandomArray -------------------------------------------------
// eslint-disable-next-line prefer-const
let randomArray: number[] = [];
let arrayForCardsSpec: Array<number> = [];
let arrayForCardsBest: Array<number> = [];
export let arrayForCardsDesc: Array<number> = [];

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

export let arrayForCards:Array<number>=[];
arrayForCards= getRandomArray(99,99);
arrayForCardsSpec = getRandomArray(3, 100);
arrayForCardsBest = getRandomArray(3, 100);
arrayForCardsDesc = getRandomArray(4,100);
// console.log(arrayForCards);
// console.log(arrayForCardsBest);
// console.log(arrayForCardsSpec);
// function getRandomArray finish -----------------------------------------



for(let j = 0;j<arrayForCards.length;j++){
  for(let i = 0;i<arrayForCards.length;i++){
      if(list[i].id===arrayForCards[j]){
        listCategory.push(list[i]);
        break;
      }
  }
}
// console.log((localStorage));
document.addEventListener("DOMContentLoaded",function(){
console.log('произошла перезагрузка');
// console.log(JSON.parse(localStorage.getItem('listCategory')));
// console.log(JSON.parse(localStorage.getItem('forLocal')));
});
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
  localStorage.setItem('forLocal',JSON.stringify(forLocal));
  console.log("79 forLocal "+forLocal);
  console.log(forLocal);
  // let poluchitObj = JSON.parse(localStorage.getItem('listCategory'));
  // console.log('listCategory '+listCategory.length);
  sizeFilter();
  colorFilter();
  if(listCategory.length<19){
    sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join(" ")} ${listCategory.length} ${sortText.innerHTML.split(" ").slice(-1)}`
  }else {
    sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join(" ")} 18 ${sortText.innerHTML.split(" ").slice(-1)}`
  }
  paginationText();
  console.log(listCategory);
  console.log(forLocal);
  countRandom++;

}


//  function buildCards -------------------------------------------------
const productDetailText = document.querySelectorAll('.product-detail-text');
const cardsStock = document.querySelectorAll('.stock');
const priceProduct = document.querySelectorAll('.price');
const productTitle = document.querySelectorAll('.product-title');
export const mainCardImg = document.querySelectorAll('.img-prod1');
const secondCardImg = document.querySelectorAll('.img-prod2');
const productMiniature = document.querySelectorAll('.product-miniature');
// console.log("card " +priceProduct.length);
// console.log("card " +cardsStock.length);
// console.log(productTitle.length);
function buildCards(){
  // console.log(listCategory);
  // console.log(arrayForCards);
for(let i = 0;i<productDetailText.length; i++){
    productDetailText[i].innerHTML = list[arrayForCards[i]].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+list[arrayForCards[i]].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + list[arrayForCards[i]].price;
    productTitle[i].innerHTML = list[arrayForCards[i]].title;
    mainCardImg[i].setAttribute('src',`${list[arrayForCards[i]].images[0]}`);
    mainCardImg[i].setAttribute('data-id',`${list[arrayForCards[i]].id}`);
    secondCardImg[i].classList.add("non");
}
}
// (!JSON.parse(localStorage.getItem('listCategory')))?buildCardsCategory:
buildCards();

// const cartProductsCount = document.querySelector('.cart-products-count');
// console.log( Number(cartProductsCount.innerHTML));
export function buildCardsCategory(){
  countRandom++;
  clearCards();
  for(let i = 0;i<listCategory.length;i++){
    productMiniature[i].classList.remove('non');
    productDetailText[i].innerHTML = listCategory[i].description;
    cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+listCategory[i].stock;
    priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i].price;
    productTitle[i].innerHTML = listCategory[i].title;
    mainCardImg[i].setAttribute('src',`${listCategory[i].images[0]}`);
    mainCardImg[i].setAttribute('data-id',`${listCategory[i].id}`);
    secondCardImg[i].classList.add("non");
  }
  // sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join("")} ${listCategory.length} ${sortText.innerHTML.split(" ").slice(-1)}`

      console.log('то что ниже должно запуститься')
  buildPaginationPage(0);
}

function clearCards(){
  for(let i = 0;i<productMiniature.length;i++){
   if(i<listCategory.length){
    continue;
   } else {
    productMiniature[i].classList.add('non');
    mainCardImg[i].setAttribute('data-id',``);
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
const listCategoryImg = ['https://img.freepik.com/free-photo/young-handsome-man-in-jacket-posing-in-the-street-in-winter-time_1303-30028.jpg?w=996&t=st=1673701238~exp=1673701838~hmac=4047426187f50c36fc3e5a82d0c5ff5de5cbeda06ca5b685985f35d74eefdb27', 'https://img.freepik.com/free-photo/sexy-guy-with-unbuttoned-fleece-shirt-posing-at-a-studio-isolated-on-a-dark-background_613910-21306.jpg?w=996&t=st=1673679617~exp=1673680217~hmac=9acd3d3b42b5f47a820ae42efae7bf1a663d833f36fe04f924a7ce578c263972', 'https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26582.jpg?w=1060&t=st=1673294250~exp=1673294850~hmac=c95ac2d51f54372698969fba827480816b14e4c2cdd93ed83466a786a393cc0b', 'https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?w=1060&t=st=1673294269~exp=1673294869~hmac=17ed82fb7efa83890f41a1e1c7756786a1df0a8840fa58348318f5cfcec673b4', 'https://img.freepik.com/free-photo/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall_197531-24462.jpg?w=1060&t=st=1673294271~exp=1673294871~hmac=9c114b52890ff1a1c7e1a914e66a1af5fc4b4bfe81aae4b1b5b45343fa470484', 'https://img.freepik.com/free-photo/stylish-european-brunette-woman-red-coat-black-hat-posing-white-wall_273443-4636.jpg?w=1060&t=st=1673294275~exp=1673294875~hmac=4f680379b04c021c9e5732c86dad1fe876fad7156491a1753bcc02fd48feb904',"https://img.freepik.com/free-photo/stylish-couple-in-love-sitting-in-street-on-romantic-trip_285396-9919.jpg?w=996&t=st=1673712712~exp=1673713312~hmac=4a6b99136bc243662dae01afb5683aae70f75f722beef80dd324a5f9bb0b438f"];
const coverProduct = document.querySelector('.cover-product');

let forInterval = 0;
coverProduct.setAttribute('src',`${listCategoryImg[listCategoryImg.length-1]}`);
setInterval(function() {
  if(forLocal.category.size==2){
    coverProduct.setAttribute('src',`${listCategoryImg[forInterval]}`);
    if(forInterval==5){
    forInterval=-1;
  }
  forInterval++;
  }else {
  if(forLocal.category.has('men')){
    if(forInterval>2){
      forInterval=0;
    }
    coverProduct.setAttribute('src',`${listCategoryImg[forInterval]}`);
  if(forInterval==3){
    forInterval=-1
  }
  forInterval++;
  } else if(forLocal.category.has('women')){
    if(forInterval<3){
      forInterval=3;
    }
    coverProduct.setAttribute('src',`${listCategoryImg[forInterval]}`);
    if(forInterval==5){
      forInterval=2
    }
    forInterval++;
  }
  }

}, 3000);


//localStorage.setItem('listCategory', JSON.stringify( listCategory));
// console.log(listCategory = JSON.parse(localStorage.getItem('listCategory')));

// PAGINATION //-----------------------------------------------------------------------
// const textPagination = document.querySelector('.col-left-pagination');
const btnPages = document.querySelectorAll('.btn-page');
const pages = document.querySelectorAll('.page');

// let stopI =18;
let stopI: number;
// console.log(5%2);
function buildPaginationPage(limiter:number) {
// stopI = listCategory.length - (Math.floor(listCategory.length/18))*18;
  // console.log("stopI ",stopI);

   if (listCategory.length < 36) {
        pages[3].classList.add('non');
        pages[4].classList.add('prev-available-page');
        btnPages[4].setAttribute('disabled', 'true');
      }if (listCategory.length < 18) {
        pages[2].classList.add('non');
        pages[3].classList.add('non');
        btnPages[4].classList.add('prev-available-page');
      }
       if (listCategory.length > 18) {
        pages[2].classList.remove('non');
      }
      if (listCategory.length > 36) {
        pages[3].classList.remove('non');
      }
      
    for(let i = 0;i<18;i++){
   
      // console.log(stopI);
      // if(stopI>i){
        if(i>=stopI){
        productMiniature[i].classList.add('non');
        continue;
      }
      // if(stopI==0&&i==1){
        if(stopI==18){
        productMiniature[i].classList.remove('non');
      }

      // console.log(limiter);
      productDetailText[i].innerHTML = listCategory[i+limiter].description;
      cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0,4)+" "+listCategory[i+limiter].stock;
      priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i+limiter].price;
      productTitle[i].innerHTML = listCategory[i+limiter].title;
      mainCardImg[i].setAttribute('src',`${listCategory[i+limiter].images[0]}`);
      mainCardImg[i].setAttribute('data-id',`${listCategory[i+limiter].id}`);
      secondCardImg[i].classList.add("non");

      // addToCarts[i].classList.remove('svgActive');
      console.log('здесь будет ')
       console.log(mainCardImg[i].getAttribute('data-id'));
       try {
        if(basket.has(mainCardImg[i].getAttribute('data-id'))){
        addToCarts[i].classList.add('svgActive');
      }
           
       } catch(err){
        console.log('it is attribute');
       }
      // basket;
    }

  // }
}

let ourBtn =0;

function clearPagination(){
  // console.log('ourBtn ', ourBtn)
  if(listCategory.length/18 > ourBtn) {
    stopI=18;
  } else {
    stopI = listCategory.length%18;
  }
  // console.log('525 stopI ',stopI);
}

btnPages[0].classList.add('prev-available-page');
btnPages[1].classList.add('cdp');
btnPages[2].classList.add('available-page');
btnPages[3].classList.add('available-page');
btnPages[4].classList.add('available-page');

for (let i =0; i < btnPages.length; i++) {
  btnPages[i].addEventListener('click',function(){
    let forOurBtn = 0;
    console.log("i",i);
    console.log(listCategory);
    ourBtn = this.innerHTML;
    const count = Math.ceil(listCategory.length/18);
  // if (i>0 && i < btnPages.length-2) {
    // console.log(btnPages[i]);
    // btnPages[i].addEventListener('click',function(){
    //   btnPages[i].classList.add('current-disabled-page');
    // });

  // }  
    // здесь добавлять класс зеленого цвета или активный
    //  так же удалять с других активный класс или менять на другой цвет
    // добавить здесь условие на длину listCategory, если надо
  if(i===0){
    btnPages[0].classList.add('prev-available-page');
    btnPages[1].classList.remove('available-page');
    btnPages[1].classList.add('cdp');
    btnPages[2].classList.add('available-page');
    btnPages[3].classList.remove('prev-available-page');
    btnPages[3].classList.add('available-page');
    btnPages[4].classList.remove('prev-available-page');
    btnPages[4].classList.add('available-page');
    btnPages[1].innerHTML ='1';
    btnPages[2].innerHTML = '2';
    btnPages[3].innerHTML = '3';
    clearPagination();
    stopI = 18;
    paginationText();
    buildPaginationPage(0);
  }else if(i===1){
    btnPages[0].classList.add('prev-available-page');
    btnPages[1].classList.remove('available-page');
    btnPages[1].classList.add('cdp');
    btnPages[2].classList.remove('cdp');
    btnPages[2].classList.add('available-page');
    btnPages[3].classList.remove('prev-available-page');
    btnPages[3].classList.add('available-page');
    //  if(listCategory.length>1)
    if (btnPages[1].innerHTML =='4') {
      btnPages[0].classList.remove('prev-available-page');
      btnPages[0].classList.add('available-page');
      btnPages[4].classList.remove('prev-available-page');
      btnPages[4].classList.add('available-page');
    }
    clearPagination();
    if(ourBtn==1){
      forOurBtn =0;
    }else {
      forOurBtn = (ourBtn-1)*18;
    }
    console.log('кнопка номер один');
    console.log(forOurBtn);
    // здесь вместо принудительной цифры надо исходить от ourBtn
    paginationText();
    buildPaginationPage(forOurBtn);
  }else if(i===2){
    btnPages[2].classList.remove('available-page');
    btnPages[2].classList.add('cdp');
    btnPages[1].classList.remove('cdp');
    btnPages[1].classList.add('available-page');
    btnPages[3].classList.remove('cdp');
    btnPages[3].classList.add('available-page');
    if (btnPages[2].innerHTML =='5') {
      btnPages[0].classList.remove('prev-available-page');
      btnPages[0].classList.add('available-page');
      btnPages[4].classList.remove('prev-available-page');
      btnPages[4].classList.add('available-page');
    }
    clearPagination();
    if(ourBtn==1){
      forOurBtn =0;
    }else {
      forOurBtn = (ourBtn-1)*18;
    }
    console.log('кнопка номер два');
    console.log(forOurBtn);
    paginationText();
    buildPaginationPage(forOurBtn);

  }else if(i===3){
    btnPages[3].classList.remove('available-page');
    btnPages[3].classList.add('cdp');
    btnPages[1].classList.remove('cdp');
    btnPages[1].classList.add('available-page');
    btnPages[2].classList.remove('cdp');
    btnPages[2].classList.add('available-page');
    btnPages[4].classList.remove('prev-available-page');
    btnPages[4].classList.add('available-page');
    stopI = 18;
    if (btnPages[3].innerHTML =='6') {
      btnPages[0].classList.remove('prev-available-page');
      btnPages[0].classList.add('available-page');
      btnPages[4].classList.remove('available-page');
      btnPages[4].classList.add('prev-available-page');
    }
    clearPagination();
    if(ourBtn==1){
      forOurBtn =0;
    }else {
      forOurBtn = (ourBtn-1)*18;
    }
    paginationText();
    buildPaginationPage(forOurBtn);
  }
  else if(i===4){
    btnPages[0].classList.remove('prev-available-page');
    btnPages[0].classList.add('available-page');
    btnPages[1].classList.remove('cdp');
    btnPages[1].classList.add('available-page');
    btnPages[2].classList.remove('cdp');
    btnPages[2].classList.add('available-page');
    // btnPages[2].classList.remove('available-page');
    // btnPages[2].classList.add('cdp');
    btnPages[3].classList.remove('available-page');
    btnPages[3].classList.add('cdp');
    btnPages[4].classList.add('prev-available-page');
    
    btnPages[1].innerHTML = count-2+"";
    btnPages[2].innerHTML = count-1+"";
    btnPages[3].innerHTML = count+"";
    // stopI = listCategory.length-18*(count-1);
    clearPagination();
    // console.log('последяя кнопка ')
    // console.log((listCategory.length-18*(count-1)));
    // console.log(listCategory.length-(listCategory.length-18*(count-1)))
    paginationText();
    buildPaginationPage(listCategory.length-(listCategory.length-18*(count-1)));

  }

  }
)}

const leftPagination = document.querySelector('.col-left-pagination');
function paginationText(){
 leftPagination.innerHTML="";
 if(listCategory.length<19){
  leftPagination.innerHTML = `Showing ${listCategory.length} of ${listCategory.length} items`;
 }else {
  leftPagination.innerHTML = `Showing 18 of ${listCategory.length} items`
 }
}

// const s
// Количество карточек для отображения на странице
// let numberOfCards = 18;

// Считает нужное количество кнопок пагинации
// function numberOfBtns(arr,num){
//   return Math.ceil(arr.length/num)
// }

// let currentDisabledPage = 1;
// let maxBtnPagesLength = 6;

// show in second image in card -------------------------------------------------------------------

// for(let i=0;i<mainCardImg.length;i++){

//   mainCardImg[i].addEventListener('mouseover',function(){
// console.log(this);
// mainCardImg[i].setAttribute('src',`${listCategory[i].images[1]}`);
//   });
//   mainCardImg[i].addEventListener('mouseout',function(){
//     console.log(this);
//     mainCardImg[i].setAttribute('src',`${listCategory[i].images[0]}`);
//       });
// }




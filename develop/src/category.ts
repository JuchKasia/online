/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cat from './index';
import '../index';

import { list } from '../list';
import { count } from 'console';
// export const cat = 'category file work';
// console.log('this is file category');
// console.log("from category file "+cat.listCategory);

export const basket = [1];//index 
basket.length = 0;
export let descrpiptQuantity = 1;
export let baskQuantity = 1;
export const desk: ({ id: number; title: string; brand: string; category: string; description: string; price: number; discount: number; stock: number; size: string; color: string; images: string[]; } | { id: number; title: string; brand: string; category: string; description: string; price: number; stock: number; size: string; color: string; images: string[]; discount?: undefined; })[] = [];

export let basketPrice = 0;
export function sizeFilter(){
  const way = document.querySelector('.way');
  for (let i=0; i < cat.sizeLabel.length; i++) {
    let count = 0;
  // console.log(cat.sizeLabel[i]);
     for (let j = 0; j < cat.listCategory.length; j++) {
      // console.log('cat.listCategory[i] '+cat.listCategory[j]==cat.sizeLabel[i].innerHTML)
       if (cat.sizeLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].size) {
         count++;
       }
     }
     cat.sizeLabel[i].innerHTML = cat.sizeLabel[i].innerHTML.slice(0, 2) + ` (` + `${count}` + ')';
  
   }
if(cat.forLocal.size.size>0&&way.innerHTML.split(" ")[way.innerHTML.split(" ").length-1]!="size"){
  way.innerHTML = way.innerHTML+' size';
} else if(cat.forLocal.size.size==0&&way.innerHTML.split(" ")[way.innerHTML.split(" ").length-1]=="size"){
  way.innerHTML = way.innerHTML.split(" ").slice(0,-1).join(' ');
}
// console.log('forlocal '+ cat.forLocal)
// localStorage.setItem('forLocal',JSON.stringify(cat.forLocal));
}

export function colorFilter(){
  // const way = document.querySelector('.way');
  for (let i=0; i < cat.colorLabel.length; i++) {
   let countColor = 0;
    
    for (let j = 0; j < cat.listCategory.length; j++) {
      if (cat.colorLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].color) {
        countColor++;
      }
    }
    
    cat.colorLabel[i].innerHTML = cat.colorLabel[i].innerHTML.split(' ')[0] + ` (` + `${countColor}` + ')';
  }
  // if(cat.forLocal.color.size>0){
  //   console.log("way.innerHTML ");
  // }
  // console.log('forlocal '+ cat.forLocal.color)
  // localStorage.setItem('forLocal',JSON.stringify(cat.forLocal));
}

const cartProductsCount = document.querySelector('.cart-products-count');
// const cartProductsCount = document.querySelector('.cart-products-count-value');
const cartProductsValue = document.querySelector('.cart-products-value');
const cpv = document.querySelector('.cart-products-value').innerHTML.split(' ')[0];
// console.log(typeof +cartProductsCount.innerHTML);


  const addcards = document.querySelectorAll('.btn-add-to-cart');
  const btnEyeCart = document.querySelectorAll('.btn-eye-cart');
export const main = document.querySelector('.main');
  const pageDescription = document.querySelector('.pageDescription');
  const descriptionPage = document.querySelector('.description');

  for(let i = 0;i<addcards.length;i++){
    
    addcards[i].addEventListener('click',function(){
      if(cat.countRandom==0){
        basket.push(cat.listCategory[cat.arrayForCards[i]].id); 
        basketPrice+=cat.listCategory[cat.arrayForCards[i]].price
      }else {
      basket.push(cat.listCategory[i].id);
      basketPrice+=cat.listCategory[i].price
      }
      cartProductsCount.innerHTML = basket.length+"";
    cartProductsValue.innerHTML = cpv+basketPrice;
    });
    btnEyeCart[i].addEventListener('click',function(){
      desk.pop();
      main.classList.add('non');
      basketPage.classList.add('non');
      pageDescription.classList.remove('non');
      descriptionPage.classList.remove('non');
      if(cat.countRandom==0){
        desk.push(cat.listCategory[cat.arrayForCards[i]]);
      }else {
        desk.push(cat.listCategory[i]);
      }
        
        buildDescription();
        buildBestDeck();
    });
  }

  //  setInterval(function(){
  //   cartProductsCount.innerHTML = basket.length+"";
  //   cartProductsValue.innerHTML = cpv+basketPrice;
  //  },500)

  const containerCart = document.querySelector('.header-cart');
 export const basketPage = document.querySelector('.basket-page');
 
// console.log(containerCart);
  containerCart.addEventListener('click',function(){
main.classList.add('non');
basketPage.classList.remove('non');
getshopCard();
  });

 const itemLink = document.querySelectorAll('.item__link')[0].addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
 })
 const itemLink4 = document.querySelectorAll('.item__link')[4].addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
 })
const logoLink = document.querySelector('.logo-link').addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
});

const deskMainImage = document.querySelector('.desk-main-image');
const mainImFirst = document.querySelector('.main-im-first');
const secondImFirst = document.querySelector('.main-im-second');
const blockInfWay=document.querySelector(".block-inf-way"); 
// const blockInfCategory=document.querySelector(".block-inf-category"); 
const blockInfPrice=document.querySelector(".block-inf-price"); 
const blockInfSize=document.querySelector(".block-inf-size"); 
const blockInfColor=document.querySelector(".block-inf-color"); 
const blockInfQuantity=document.querySelector(".block-inf-quantity"); 
// const baskBaseValue=document.querySelector(".desk-base-value"); 
const baskUp=document.querySelector(".bask-up"); 
const baskDown=document.querySelector(".bask-down"); 
const descripInf=document.querySelector(".descrip-inf");
// const descriptionCard = document.querySelector('.descriptionCard'); 
const descBaseValue = document.querySelector('.desc-base-value');
const daskUp = document.querySelector('.dask-up');
const daskDown = document.querySelector('.dask-down');
// const descripInfText = document.querySelector('.descrip-inf-text')
const descripDetal = document.querySelector('.descrip-detal');

function buildDescription(){
  const way = document.querySelector('.way');
 deskMainImage.setAttribute('src',`${desk[0].images[0]}`);
 mainImFirst.setAttribute('src',`${desk[0].images[1]}`);
 secondImFirst.setAttribute('src',`${desk[0].images[2]}`);
  blockInfWay.innerHTML= way.innerHTML;
  // blockInfCategory.innerHTML = 
  blockInfPrice.innerHTML ="$"+ desk[0].price;
  blockInfSize.innerHTML = "Size : " + desk[0].size;
  blockInfColor.innerHTML ="Color : "+ desk[0].color;
  descBaseValue.innerHTML = descrpiptQuantity+"";
  descripInf.innerHTML = desk[0].description;
  
   
}
document.querySelector('.descrip-descrip').addEventListener('click',function(){
     descripInf.innerHTML = desk[0].description;
   });
   descripDetal.addEventListener('click',function(){
    const img = document.createElement('img');
    img.classList.add('brand-logo');
    // для решения проблемы битой ссылки предлагаю сделать массив в ts с сылками 
  if(desk[0].brand=="Dior"){
    console.log('dior');
    descripInf.innerHTML = "";
    img.setAttribute('src',`../assets/svg/dior.svg`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Prada"){
    console.log('prada');
    descripInf.innerHTML = "";
    img.setAttribute('src',`../assets/svg/prada.svg`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Valentino"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`$../assets/svg/valentino.svg`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Versace"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`../assets/svg/versace.svg`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Gucci"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`../assets/svg/icons8-gucci.svg`);
    img.setAttribute('alt','image brand logo');
  }
  descripInf.append(img);
   });
daskUp.addEventListener('click', function(){
    descBaseValue.innerHTML = ++descrpiptQuantity+"";
   });
   daskDown.addEventListener('click', function(){
    if(descrpiptQuantity==1){
      descriptionPage.classList.add('non');
      pageDescription.classList.add('non');
      main.classList.remove('non');
    }
    descBaseValue.innerHTML = --descrpiptQuantity+"";
   });
const descSellIm = document.querySelectorAll('.desc-sell-im');
const descSellTxt = document.querySelectorAll('.desc-sell-txt');
const descSellPrice = document.querySelectorAll('.desc-sell-price');

function buildBestDeck(){
for(let i = 0;i<descSellIm.length;i++){
  descSellIm[i].setAttribute('src',`${list[cat.arrayForCardsDesc[i]].images}`);
  descSellTxt[i].innerHTML = list[cat.arrayForCardsDesc[i]].description;
  descSellPrice[i].innerHTML = list[cat.arrayForCardsDesc[i]].price+" $";
}
}

const descriptionButton = document.querySelector('.description-button');
// добавление в типо карзину простое отоброжение 
descriptionButton.addEventListener('click',function(){
basket.push(desk[0].id);
cartProductsCount.innerHTML = descrpiptQuantity+"";
cartProductsValue.innerHTML = cpv+desk[0].price*descrpiptQuantity;
});



// basket page --------------------------------------------------------------
const baskImage = document.querySelector('.bask-image');
const baskBlockValue = document.querySelector(".bask-block-value");
const baskBlockVal = document.querySelector(".bask-block-val");
const baskSize=document.querySelector(".bask-size");
const baskColor = document.querySelector('.bask-color');
const baskBaseValue=document.querySelector('.bask-base-value');

const baskDellImg = document.querySelector('.bask-dell-img');
const baskTotValue = document.querySelector('.bask-tot-value');
const baskTot= document.querySelector('.bask-tot-total');
document.querySelector('.back-start').addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
});

function getshopCard(){

baskDellImg.setAttribute('src',`../assets/svg/basket.svg`);//not work!!!!!!!

for(let i = 0;i<cat.listCategory.length;i++){
if(cat.listCategory[i].id==basket[0]){
  basket[0] = i;
}
}
baskImage.setAttribute('src',`${cat.listCategory[basket[0]].images[0]}`);
baskImage.classList.add('scale');
baskBlockValue.innerHTML = 'Cost : $ '+ cat.listCategory[basket[0]].price;
baskBlockVal.innerHTML = '$ '+ cat.listCategory[basket[0]].price;
baskSize.innerHTML = 'Size : '+ cat.listCategory[basket[0]].size;
baskColor.innerHTML = 'Color : '+ cat.listCategory[basket[0]].color;
 baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price;
 baskTot.innerHTML =""+cat.listCategory[basket[0]].price;
}


const baskBlockDisk = document.querySelector('.bask-block-disk');
const goodPrice = document.querySelector('.goodPrice');
const basketTotalAll = document.querySelectorAll('.basket-total-all')[1];
const baskTotDiskaunt = document.querySelector('.bask-tot-diskaunt');

document.querySelector('.bask-total-quest').addEventListener('click',function(){
baskBlockDisk.classList.remove('non');
goodPrice.classList.remove('non');
basketTotalAll.classList.remove('non');
goodPrice.innerHTML= "-"+cat.listCategory[basket[0]].discount*baskQuantity+" %";
baskBlockDisk.innerHTML ="Discount : $ "+ cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity;
baskTotDiskaunt.innerHTML ="$ "+ cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity;
baskTot.innerHTML = "$ "+ (cat.listCategory[basket[0]].price*baskQuantity - cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity);
});


// bask-block-val   
baskUp.addEventListener('click',function(){
baskBaseValue.innerHTML = ++baskQuantity+"";
baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
baskTot.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
baskBlockVal.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
});
baskDown.addEventListener('click',function(){
  if(baskQuantity>0){
    baskBaseValue.innerHTML = --baskQuantity+"";
  }
  baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
  baskTot.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
  baskBlockVal.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
  });


// для оптимизации нужно добавлять не обьекты. а индексы
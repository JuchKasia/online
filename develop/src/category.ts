/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cat from './index';
import '../index';

import { list } from '../list';
import { count } from 'console';
// export const cat = 'category file work';
// console.log('this is file category');
// console.log("from category file "+cat.listCategory);

export const basket = new Map();
export let basketDesc:number;//index 
// export const basket = [1];//index 
// basket.length = 0;
export let descrpiptQuantity = 1;
export let baskQuantity = 1;
export let basketLength = 0; 
let deskId:number;
let deskPrice;
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
// console.log( cat.forLocal)
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
  // console.log(cat.forLocal.color)
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
export const addToCarts = document.querySelectorAll('.add-to-cart');
// const idDeskCard = document.querySelector('.idDeskCard');

for(let i = 0;i<addcards.length;i++){
    
  addcards[i].addEventListener('click',function(){

    const ourId = cat.mainCardImg[i].getAttribute('data-id');

    console.log(cat.listCategory); 
    console.log(cat.arrayForCards);
    console.log(ourId);
    console.log(basket);
     if(!basket.has(ourId)){
      addToCarts[i].classList.add('svgActive');
      basket.set(ourId,1);
      basketLength++;
      basketPrice+=Number(cat.mainCardImg[i].getAttribute('data-price'));
      console.log('здесь будет суммироваться прайс ')
     } else if(basket.has(ourId)){
      addToCarts[i].classList.remove('svgActive');
      basketPrice-=Number(cat.mainCardImg[i].getAttribute('data-price'));
      basket.delete(ourId);
      basketLength--;
     }
     basketValues();
     cartProductsCount.innerHTML = String(basketLength);
     cartProductsValue.innerHTML = `$ ${basketPrice}`;

     console.log(basket);
    //  showHeaderPrice();
  });
  btnEyeCart[i].addEventListener('click',function(){

    basketDesc = +cat.mainCardImg[i].getAttribute('data-id');
    //console.log('it is')
    // console.log(cat.listCategory[i+(18*(+cdpvalue-1))]);
    console.log(cat.mainCardImg[i].getAttribute('data-id'));
    deskId =  Number(cat.mainCardImg[i].getAttribute('data-id'));
    deskPrice = cat.mainCardImg[i].getAttribute('data-price');
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
    console.log('ошибка, надо получить сперва id потом его установить')
    // idDeskCard.setAttribute('data-id',String(basketDesc));
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
  //getshopCard();
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
const blockInfCategory=document.querySelector(".block-inf-category"); 
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
  // нужно удалить все что связано с елементом desk как заработает с basketDesc ============ you can do it ===================
  for(let i=0;i<cat.listCategory.length;i++){
    //  console.log("basketDesc ",basketDesc);
    if(basketDesc===cat.listCategory[i].id){
      const way = document.querySelector('.way');
      deskMainImage.setAttribute('src',`${cat.listCategory[i].images[0]}`);
      mainImFirst.setAttribute('src',`${cat.listCategory[i].images[1]}`);
      secondImFirst.setAttribute('src',`${cat.listCategory[i].images[2]}`);
      blockInfWay.innerHTML= `Category - ${cat.listCategory[i].category} / color - ${cat.listCategory[i].color} / size - ${cat.listCategory[i].size}`;
      // console.log(cat.forLocal);
      blockInfCategory.innerHTML = cat.listCategory[i].category;
      blockInfPrice.innerHTML ="$"+ cat.listCategory[i].price;
      blockInfSize.innerHTML = "Size : " + cat.listCategory[i].size;
      blockInfColor.innerHTML ="Color : "+ cat.listCategory[i].color;
      descBaseValue.innerHTML = descrpiptQuantity+"";
      descripInf.innerHTML = cat.listCategory[i].description;
    }
    // const way = document.querySelector('.way');
    // deskMainImage.setAttribute('src',`${desk[0].images[0]}`);
    // mainImFirst.setAttribute('src',`${desk[0].images[1]}`);
    // secondImFirst.setAttribute('src',`${desk[0].images[2]}`);
    // blockInfWay.innerHTML= way.innerHTML;
    // // blockInfCategory.innerHTML = 
    //  blockInfPrice.innerHTML ="$"+ desk[0].price;
    //  blockInfSize.innerHTML = "Size : " + desk[0].size;
    //  blockInfColor.innerHTML ="Color : "+ desk[0].color;
    //  descBaseValue.innerHTML = descrpiptQuantity+"";
    //  descripInf.innerHTML = desk[0].description;
  }
}
const brandIcon = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/300px-Dior_Logo.svg.png?20100916160103","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/512px-Prada-Logo.svg.png?20200520125737","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Valentino_logo.svg/800px-Valentino_logo.svg.png?20220515071350","https://www.alamy.com/versace-medusa-logo-fashion-luxury-brand-clothes-illustration-image217740490.html","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/512px-Gucci_logo.svg.png?20180702130155"];
// dior https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/300px-Dior_Logo.svg.png?20100916160103

// valentino https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Valentino_logo.svg/800px-Valentino_logo.svg.png?20220515071350
// versace https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Versace.png/800px-Versace.png?20221205144422
document.querySelector('.descrip-descrip').addEventListener('click',function(){
     descripInf.innerHTML = desk[0].description;
   });
descripDetal.addEventListener('click',function(){
  const img = document.createElement('img');
  img.classList.add('brand-logo');
    
  if(desk[0].brand=="Dior"){
    console.log('dior');
    descripInf.innerHTML = "";
    img.setAttribute('src',`${brandIcon[0]}`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Prada"){
    console.log('prada');
    descripInf.innerHTML = "";
    img.setAttribute('src',`${brandIcon[1]}`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Valentino"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`${brandIcon[2]}`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Versace"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`${brandIcon[3]}`);
    img.setAttribute('alt','image brand logo');
  }else if(desk[0].brand=="Gucci"){
    descripInf.innerHTML = "";
    img.setAttribute('src',`${brandIcon[4]}`);
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
  basket.set(deskId,descrpiptQuantity);
  if(basket.has(deskId)&&descrpiptQuantity>1){
    // descrpiptQuantity--;
  }
  basketValues();
  cartProductsCount.innerHTML= `${basketLength}`;
  cartProductsValue.innerHTML = `$ ${basketPrice}`;
  // console.log('work button of description');
  // console.log(basketLength);
  // console.log(descrpiptQuantity);

  // basket.set(idDeskCard.getAttribute('data-id'),+descBaseValue.innerHTML);
  // basket.set(desk[0].id, 1);
  // cartProductsCount.innerHTML = descrpiptQuantity + "";
  // cartProductsValue.innerHTML = cpv + desk[0].price * descrpiptQuantity;
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

// function getshopCard(){

// baskDellImg.setAttribute('src',`../assets/svg/basket.svg`);//not work!!!!!!!

//for(let i = 0;i<cat.listCategory.length;i++){
// if(cat.listCategory[i].id==basket[0]){
//   basket[0] = i;
// }
//}
// baskImage.setAttribute('src',`${cat.listCategory[basket[0]].images[0]}`);
// baskImage.classList.add('scale');
// baskBlockValue.innerHTML = 'Cost : $ '+ cat.listCategory[basket[0]].price;
// baskBlockVal.innerHTML = '$ '+ cat.listCategory[basket[0]].price;
// baskSize.innerHTML = 'Size : '+ cat.listCategory[basket[0]].size;
// baskColor.innerHTML = 'Color : '+ cat.listCategory[basket[0]].color;
//  baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price;
//  baskTot.innerHTML =""+cat.listCategory[basket[0]].price;
// }


const baskBlockDisk = document.querySelector('.bask-block-disk');
const goodPrice = document.querySelector('.goodPrice');
const basketTotalAll = document.querySelectorAll('.basket-total-all')[1];
const baskTotDiskaunt = document.querySelector('.bask-tot-diskaunt');

document.querySelector('.bask-total-quest').addEventListener('click',function(){
baskBlockDisk.classList.remove('non');
goodPrice.classList.remove('non');
basketTotalAll.classList.remove('non');
// goodPrice.innerHTML= "-"+cat.listCategory[basket[0]].discount*baskQuantity+" %";
// baskBlockDisk.innerHTML ="Discount : $ "+ cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity;
// baskTotDiskaunt.innerHTML ="$ "+ cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity;
// baskTot.innerHTML = "$ "+ (cat.listCategory[basket[0]].price*baskQuantity - cat.listCategory[basket[0]].price*cat.listCategory[basket[0]].discount/100*baskQuantity);
});


// bask-block-val   
baskUp.addEventListener('click', function(){
baskBaseValue.innerHTML = ++baskQuantity + "";
// baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
// baskTot.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
// baskBlockVal.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
});
baskDown.addEventListener('click', function(){
  if(baskQuantity>0){
    baskBaseValue.innerHTML = --baskQuantity + "";
  }
  // baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
  // baskTot.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
  // baskBlockVal.innerHTML =""+cat.listCategory[basket[0]].price*baskQuantity;
});
function basketValues(){
  const otherArr = Array.from(basket).flat();
  // console.log(otherArr.flat());
  basketLength = 0;
  basketPrice = 0;
  for(let i =0;i<otherArr.length;i++){
    if(i%2!==0){
      basketLength+=otherArr[i];
    }
  }
  // console.log(cat.listCategory);
  for(let i = 0;i<cat.listCategory.length;i++){
    //let count = 0;
    for(let j = 0;j<otherArr.length;j++){

      if(j%2==0){
        if(cat.listCategory[i].id==otherArr[j]){
          // console.log('cat.listCategory[i].price', cat.listCategory[i].price);
          //  console.log("count", +otherArr[j+1]);
          // console.log("count*cat.listCategory[i].price",otherArr[j+1]*cat.listCategory[i].price)
        basketPrice+=otherArr[j+1]*cat.listCategory[i].price;
      }
      }
      
    }
    
  }
  // console.log("basketLength",basketLength)
  // console.log("basketPrice",basketPrice);

}




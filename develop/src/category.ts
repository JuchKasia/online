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
// basket.length = 0;
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
const addToCarts = document.querySelectorAll('.add-to-cart');

for(let i = 0;i<addcards.length;i++){
    
  addcards[i].addEventListener('click',function(){
    console.log(document.querySelector(".cdp").innerHTML)
    const cdpvalue = +document.querySelector(".cdp").innerHTML;
     console.log(cat.listCategory);  
     console.log(i+(18*(cdpvalue-1)));
     console.log('one card')
     console.log(cat.listCategory[i+(18*(+cdpvalue-1))]);
    console.log(cat.listCategory[i+(18*(+cdpvalue-1))].price);
    console.log('our random');
    console.log(cat.arrayForCards);
    console.log('countRandom ', cat.countRandom);
    basketPrice=0;
    // list[arrayForCards[i]]
    if(cat.countRandom==0){
      if(!basket.has(cat.listCategory[cat.arrayForCards[i+(18*(+cdpvalue-1))]].id)){
        addToCarts[i].classList.add('svgActive'); 
        // добавляем класс кнопки добавления в корзину - - -- - - - - - - - - - -- 
        cartProductsCount.innerHTML = basket.size + "";
        // cartProductsValue.innerHTML = cpv + ;
        basket.set(cat.listCategory[cat.arrayForCards[i]].id,1);
    }else if(basket.has(cat.listCategory[i+(18*(+cdpvalue-1))].id)){
      basket.delete(cat.listCategory[cat.arrayForCards[i]].id);
      addToCarts[i].classList.remove('svgActive'); 
    }
    }else {
      if(!basket.has(cat.listCategory[i+(18*(+cdpvalue-1))].id)){
        addToCarts[i].classList.add('svgActive'); 
        // добавляем класс кнопки добавления в корзину - - -- - - - - - - - - - -- 
        cartProductsCount.innerHTML = basket.size + "";
        // cartProductsValue.innerHTML = cpv + ;
        basket.set(cat.listCategory[cat.arrayForCards[i]].id,1);
    }else if(basket.has(cat.listCategory[i+(18*(+cdpvalue-1))].id)){
      basket.delete(cat.listCategory[cat.arrayForCards[i]].id);
      addToCarts[i].classList.remove('svgActive'); 
    }
  }

    
     console.log(basket);
   


// 
    // basketPrice += cat.listCategory[cat.arrayForCards[i]].price;


    // if(cat.countRandom==0){
    //   basket.push(cat.listCategory[cat.arrayForCards[i]].id); 
    //   basketPrice+=cat.listCategory[cat.arrayForCards[i]].price
    // }else {
    // basket.push(cat.listCategory[i].id);
    // basketPrice+=cat.listCategory[i].price
    // }


      // if(!addToCarts[i].classList.contains('svgActive')) {
      //   addToCarts[i].classList.add('svgActive');
      // } 
      // if (basket.has(cat.listCategory[cat.arrayForCards[i]].id)) {
      //   addcards[i].classList.remove('svgActive');
      //   basket.delete(cat.listCategory[cat.arrayForCards[i]].id);
      // } 
            // if(addcards[i].classList.contains('svgActive')){
      //   addcards[i].classList.remove('svgActive');
      // }
    

    // addcards[i].addEventListener('click',function(){
    //   addToCarts[i].classList.remove('svgActive');
    //   cartProductsCount.innerHTML = basket.size -1 + "";
      // basketPrice+=cat.listCategory[i].price
            // basket.delete(cat.listCategory[cat.arrayForCards[i]].id);


      // delete cat.listCategory[cat.arrayForCards[i]].price;
    // });
  });
  btnEyeCart[i].addEventListener('click',function(){
    const cdpvalue = +document.querySelector(".cdp").innerHTML;
    basketDesc = +cat.mainCardImg[i].getAttribute('data-id');
    console.log('it is')
    console.log(cat.listCategory[i+(18*(+cdpvalue-1))]);
    console.log(cat.mainCardImg[i].getAttribute('data-id'));
    // console.log(cat.mainCardImg[i]);
    // console.log(console.log(cat.listCategory[i+(18*(+cdpvalue-1))]));
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
    // console.log(basketDesc,);
    if(basketDesc===cat.listCategory[i].id){
      const way = document.querySelector('.way');
  deskMainImage.setAttribute('src',`${cat.listCategory[i].images[0]}`);
  mainImFirst.setAttribute('src',`${cat.listCategory[i].images[1]}`);
  secondImFirst.setAttribute('src',`${cat.listCategory[i].images[2]}`);
  blockInfWay.innerHTML= `Category - ${way.innerHTML} / color - ${cat.listCategory[i].color} / size - ${cat.listCategory[i].size}`;
  // console.log(cat.forLocal);
   blockInfCategory.innerHTML = `${way.innerHTML}`;
   blockInfPrice.innerHTML ="$"+ cat.listCategory[i].price;
   blockInfSize.innerHTML = "Size : " + cat.listCategory[i].size;
   blockInfColor.innerHTML ="Color : "+ cat.listCategory[i].color;
   descBaseValue.innerHTML = descrpiptQuantity+"";
   descripInf.innerHTML = cat.listCategory[i].description;
    }
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
  basket.set(desk[0].id, 1);
  cartProductsCount.innerHTML = descrpiptQuantity + "";
  cartProductsValue.innerHTML = cpv + desk[0].price * descrpiptQuantity;
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

baskDellImg.setAttribute('src',`../assets/svg/basket.svg`);//it is not works!!!!!!!

for(let i = 0;i<cat.listCategory.length;i++){
// if(cat.listCategory[i].id==basket[0]){
//   basket[0] = i;
// }
}
// baskImage.setAttribute('src',`${cat.listCategory[basket[0]].images[0]}`);
// baskImage.classList.add('scale');
// baskBlockValue.innerHTML = 'Cost : $ '+ cat.listCategory[basket[0]].price;
// baskBlockVal.innerHTML = '$ '+ cat.listCategory[basket[0]].price;
// baskSize.innerHTML = 'Size : '+ cat.listCategory[basket[0]].size;
// baskColor.innerHTML = 'Color : '+ cat.listCategory[basket[0]].color;
//  baskTotValue.innerHTML =""+cat.listCategory[basket[0]].price;
//  baskTot.innerHTML =""+cat.listCategory[basket[0]].price;
}


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


// для оптимизации нужно добавлять не обьекты. а индексы

let divBlock = document.createElement('div');
divBlock.innerHTML = `<div class="basket-column-card__bask border-card">
<img class="bask-image">
<div class="bask-inf">
  <div class="bask-inf-text">
    description...
  </div>
  <div class="bask-inf-block">
    <div class="bask-price">
      <div class="bask-price-real">
        <div class="bask-block-value">${baskBlockValue}</div>
        <div class="bask-block-disk non">${baskBlockDisk}</div>
      </div>
      <div class="bask-price-disc goodPrice non">${goodPrice}</div>
    </div>
  </div>
  <div class="bask-size">Size: ${sizeFilter()}</div>
  <div class="bask-color">Color: ${colorFilter()}</div>
</div>
<div class="bask-block-count">
  <div class="bask-count-base border-card">
    <div class="bask-base-value">${baskBlockValue}</div>
      <div class="bask-base-button">
        <button class='bask-up'>+</button>
        <button class='bask-down'>-</button>
      </div>
    </div>
  </div>
  <div class="bask-block-val">${baskBlockVal}</div>
<div class="bask-dell"><img src="./assets/svg/basket.svg" class="bask-dell-img" alt="basket image"></div>
</div>`;

// // create a new div 
// let divBasketCol = document.createElement('div');
// divBasketCol.className = 'basket-column-card__bask';


// // create element in divS
// let imgBasketCol = document.createElement('img');
// divBasketCol.appendChild(imgBasketCol);
// // let div = document.createElement(`a<a;dlf${src};asldj${baskt.value}fl`)

// // add div to the document
// document.body.appendChild(divBasketCol);



// // bask-inf
// let divBaskInf = document.createElement('div');
// divBaskInf.className = 'bask-inf';
// // divBaskInf.textContent = 'Products';
// divBasketCol.appendChild(divBaskInf);



// let divBaskInfText = document.createElement('div');
// divBaskInfText.className = 'bask-inf-text';
// divBaskInfText.textContent = 'Description...';
// divBaskInf.appendChild(divBaskInfText);



// let divBaskInfBlock = document.createElement('div');
// divBaskInfBlock.className = 'bask-inf-text';
// divBaskInfBlock.textContent = 'Description...';
// divBaskInf.appendChild(divBaskInfBlock);

// let divBaskInfPrice = document.createElement('div');
// divBaskInfPrice.className = 'bask-price';
// divBaskInfBlock.appendChild(divBaskInfPrice);

// let divBaskInfPrice = document.createElement('div');
// divBaskInfPrice.className = 'bask-price';
// divBaskInfBlock.appendChild(divBaskInfPrice);


// let div = document.createElement(`a<a;dlf${src};asldj${baskt.value}fl`)

// let divBlock = document.createElement('div');
// divBlock.innerHTML =  `<div class="basket-column-card__bask border-card">
// <img class="bask-image">
// <div class="bask-inf">
//   <div class="bask-inf-text">
//     description...
//   </div>
//   <div class="bask-inf-block">
//     <div class="bask-price">
//       <div class="bask-price-real">
//         <div class="bask-block-value">${}</div>
//         <div class="bask-block-disk non">${}</div>
//       </div>
//       <div class="bask-price-disc goodPrice non">${}</div>
//     </div>
//     <!-- 3 -->
//   </div>
//   <div class="bask-size">Size: ${}</div>
//   <div class="bask-color">Color: White</div>
//   <!-- need do -->
// </div>
// <div class="bask-block-count">
//   <div class="bask-count-base border-card">
//     <div class="bask-base-value">0</div>
//       <div class="bask-base-button">
//         <button class='bask-up'>+</button>
//         <button class='bask-down'>-</button>
//       </div>
//     </div>
//   </div>
//   <div class="bask-block-val">$11.01</div>
// <div class="bask-dell"><img src="./assets/svg/basket.svg" class="bask-dell-img" alt="basket image"></div>
// </div>`

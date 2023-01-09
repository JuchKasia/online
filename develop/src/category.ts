/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cat from './index';
import '../index';
// export const cat = 'category file work';
// console.log('this is file category');
// console.log("from category file "+cat.listCategory);

export const basket = [{}];
basket.length = 0;
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
  for(let i = 0;i<addcards.length;i++){
    addcards[i].addEventListener('click',function(){
      basket.push(cat.listCategory[i]);
      basketPrice+=cat.listCategory[i].price
      cartProductsCount.innerHTML = basket.length+"";
    cartProductsValue.innerHTML = cpv+basketPrice;
// console.log(basketPrice);
// console.log(addcards[i])
// console.log(basket[i]);
    });
  }

  //  setInterval(function(){
  //   cartProductsCount.innerHTML = basket.length+"";
  //   cartProductsValue.innerHTML = cpv+basketPrice;
  //  },500)
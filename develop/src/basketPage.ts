import './index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as b from './index';
import { basket,basketPrice } from "./category";



const showBasket = document.querySelector('.basket-column-card__bask');
const cardBasket = document.querySelector('.cardBasket');
cardBasket.remove();

let div = document.createElement('div');
let priceThing = 0;
let priceDisc = 0;
let pricePerсent = 0;
let priceSize = '';
let priceColor = '';
let priceTotal = 0;
let priceImage = '';
let priceTitle = '';

function setElement(){
  div = document.createElement('div');
div.innerHTML=
`
<img class="bask-image" src='${priceImage}'>
  <div class="bask-inf">
    <div class="bask-inf-text">
      ${priceTitle}
    </div>
    <div class="bask-inf-block">
      <div class="bask-price">
        <div class="bask-price-real">
          <div class="bask-block-value">$ ${priceThing}</div>
          <div class="bask-block-disk non">$ ${priceDisc}</div>
        </div>
        <div class="bask-price-disc goodPrice non">- ${pricePerсent} %</div>
      </div>

    </div>
    <div class="bask-size">Size: ${priceSize}</div>
    <div class="bask-color">Color: ${priceColor}</div>

  </div>
  <div class="bask-block-count">
    <div class="bask-count-base border-card non">
      <div class="bask-base-value">0</div>
        <div class="bask-base-button">
          <button class='bask-up'>+</button>
          <button class='bask-down'>-</button>
        </div>
      </div>
    </div>
    <div class="bask-block-val">$${priceTotal}</div>
    <div class="bask-dell">
    
    </div>
  </div>
  `;
  div.classList.add('cardBasket');
return div;
}


export function buildBasket() {
  let basketLength = 0;
  let basketPrice = 0;
  const otherArr = Array.from(basket).flat();
  for(let i =0;i<otherArr.length;i++){
    if(i%2!==0){
      basketLength+=otherArr[i];
    }
  }

  function getBasketVal(j:number){
    console.log('j',j);
       if(j>0){
              j+=1;
            }
             console.log('otherArr[j]',otherArr[j]);
      for(let i = 0;i<b.listCategory.length;i++){

            if(b.listCategory[i].id==otherArr[j]){
              basketPrice+=otherArr[j+1]*b.listCategory[i].price;
              priceTitle = b.listCategory[i].title;
              priceThing=b.listCategory[i].price;
              pricePerсent=b.listCategory[i].discount;
              priceDisc =b.listCategory[i].price/100*pricePerсent;
              priceSize = b.listCategory[i].size;
              priceColor = b.listCategory[i].color;
              priceTotal = b.listCategory[i].price;
              priceImage = b.listCategory[i].images[0];
            }

      }
  }




  console.log("basket",basket)
  console.log(basketPrice);
  console.log("basketLength",basketLength)
  if(basket.size==0){
    
    div.classList.add('cardBasket');
    div.innerHTML ='product not selected';
    showBasket.appendChild(div);
  }else{
    // цикл для формирования корзины
    console.log('basket',basket);
    console.log('otherArr',otherArr);
    let count;
    for(let i=0;i<basket.size;i++){
      count=i;
        getBasketVal(count);
        setElement();
        console.log(' надо узнать порядок')
      console.log(div);
        showBasket.appendChild(div);
    }

  }
}


// tabl discount ----------------------------------------------------
const baskTotalQuest = document.querySelector('.bask-total-quest');
const activ = document.querySelector('.activ');
const areaDiscaunt = document.querySelector('.area-discaunt');
const basketDiscAll = document.querySelector('.basket-disc-all');
const baskTotDiskaunt = document.querySelector('.bask-tot-diskaunt');
export const baskTotTotal = document.querySelector('.bask-tot-total');

// const basketfor

baskTotalQuest.addEventListener('click',function(){
  areaDiscaunt.classList.remove('non');
  baskTotalQuest.classList.add('non');
});

activ.addEventListener('click',function(){
  basketDiscAll.classList.remove('non');
  areaDiscaunt.classList.add('non');
  baskTotDiskaunt.innerHTML=basketPrice*0.1+"";
  baskTotTotal.innerHTML = `$ ${basketPrice-basketPrice*10/100}`;
});

import './index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as b from './index';
import { basket } from "./category";



const showBasket = document.querySelector('.basket-column-card__bask');
const cardBasket = document.querySelector('.cardBasket');
cardBasket.remove();

export const bb = 2;
console.log(bb);
const div = document.createElement('div');

div.innerHTML=
`<img class="bask-image">
  <div class="bask-inf">
    <div class="bask-inf-text">
      description...
    </div>
    <div class="bask-inf-block">
      <div class="bask-price">
        <div class="bask-price-real">
          <div class="bask-block-value">$ 11.01</div>
          <div class="bask-block-disk non">$ 1.42</div>
        </div>
        <div class="bask-price-disc goodPrice non">- 10 %</div>
      </div>

    </div>
    <div class="bask-size">Size: s</div>
    <div class="bask-color">Color: White</div>

  </div>
  <div class="bask-block-count">
    <div class="bask-count-base border-card">
      <div class="bask-base-value">0</div>
        <div class="bask-base-button">
          <button class='bask-up'>+</button>
          <button class='bask-down'>-</button>
        </div>
      </div>
    </div>
    <div class="bask-block-val">$11.01</div>
    <div class="bask-dell"><img src="./assets/svg/basket.svg" class="bask-dell-img" alt="basket image"></div>
  </div>`;



if(basket.size==0){
console.log('net corzini')
}else{
 div.classList.add('cardBasket'); 
 showBasket.appendChild(div);
}


// console.log(showBasket);
// console.log(b.countRandom)
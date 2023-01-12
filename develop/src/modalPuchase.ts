import { basketPage, main } from './category';
export const proso =1;
const modalPurchaseWrapper = document.querySelector('.modal-purchase-wrapper');
const basketCheckout = document.querySelector('.basket-checkout');
const btnClose = document.querySelector('.btn-close');

basketCheckout.addEventListener('click', () => {
    modalPurchaseWrapper.classList.remove('non');
})

btnClose.addEventListener('click', () => {
    modalPurchaseWrapper.classList.add('non');
    basketPage.classList.add('non');
    main.classList.remove('non');
});


const personalName = document.querySelector('.personal-name');
const phone = document.querySelector('.phone');
// const adress = document.querySelector('.adress');
// const personalEmail = document.querySelector('.personalEmail');
// const cartNumber = document.querySelector('.cart-number');
// const cardOwner = document.querySelector('.card-owner');
// const expirationDate = document.querySelector('.expiration-date');
// const cardCvv = document.querySelector('.card-cvv');
personalName.addEventListener('blur', function() {
    // console.log(this.value.split(" ").length==2);
    // this.value.split(" ").length == 2;
    if (this.value.split(" ").length !== 2 && this.value.length !==2) {
        return personalName.classList.add('border-red');
    } else {
        return personalName.classList.remove('border-red');
    } 
})

const numberValid = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
phone.addEventListener('blur', function() {
    if(this.value != this.value.match(numberValid) && this.value.length < 9) {
        return phone.classList.add('border-red');
    }
    else {
         return phone.classList.remove('border-red');
    }
})
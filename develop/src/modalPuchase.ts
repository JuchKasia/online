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
const address = document.querySelector('.address');
const personalEmail = document.querySelector('.personal-email');
const cartNumber = document.querySelector('.cart-number');
const cardOwner = document.querySelector('.card-owner');
const expirationDate = document.querySelector('#expiration-date');
const cardCvv = document.querySelector('.card-cvv');
personalName.addEventListener('blur', function() {
    // console.log(this.value.split(" ").length==2);
    // this.value.split(" ").length == 2;
    if (this.value.split(" ").length >= 2 && this.value.split(" ")[0].length >=3 && this.value.split(" ")[1].length >=3) {
        return personalName.classList.remove('border-red');
    } else {
        return personalName.classList.add('border-red');
    }
})

// const numberValid = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const numberValid =(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/);
phone.addEventListener('blur', function() {
    // console.log(this.value)
    // console.log("afdsd "+this.innerHTML)
    if(this.value != this.value.match(numberValid) && this.value.length < 10) {
     phone.classList.add('border-red');
    }
    else { 
        phone.classList.remove('border-red');
    }
    if (this.value[0] != "+") {
     this.value = '+' + this.value; 
    }
})

address.addEventListener('blur', function() {
    // console.log('dafs')
    if (this.value.split(" ").length >= 3 && this.value.split(" ")[0].length >=5 && this.value.split(" ")[1].length >=5 && this.value.split(" ")[2].length >=5) {
        return address.classList.remove('border-red');
    } else {
        return address.classList.add('border-red');
    } 

})


const emailValid = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
personalEmail.addEventListener('blur', function() {
    if(this.value != this.value.match(emailValid)) {
        personalEmail.classList.add('border-red');
    }
    else { 
        personalEmail.classList.remove('border-red');
    }

})

const bank1 = document.querySelector('.bank__item1');
const bank2 = document.querySelector('.bank__item2');
const bank3 = document.querySelector('.bank__item3');
const bank4 = document.querySelector('.bank__item4');
const bankItem = document.querySelectorAll('.bank__item');

cartNumber.addEventListener('keypress',function(){
    for(let i=0; i<= bankItem.length; i++) {
        bankItem[i].classList.remove('cardVisible');
        if(this.value[0] == 4) {
            bank1.classList.add('cardVisible');
        }
        if(this.value[0] == 5) {
            bank2.classList.add('cardVisible');
        }
        if(this.value[0] == 6) {
            bank3.classList.add('cardVisible');
        }
        if(this.value[0] < 4 || this.value[0] > 6) {
            bank4.classList.add('cardVisible');
        }
    }
    // if(this.value.length == 4 && this.value.length == 9 && this.value.length == 14) {
    //     this.value=this.value + " ";
    // }
});

cardOwner.addEventListener('blur', function() {
    // console.log(this.value.split(" ").length==2);
    // this.value.split(" ").length == 2;
    if (this.value.split(" ").length >= 2 && this.value.split(" ")[0].length >=3 && this.value.split(" ")[1].length >=3) {
        return cardOwner.classList.remove('border-red');
    } else {
        return cardOwner.classList.add('border-red');
    }
})

const dateValidate1 = /^[01][0-2]/;
const dateValidate2 = /[0-2][0-8]$/;
expirationDate.addEventListener('blur', function() {
    if(this.value.slice(0, 2).match(dateValidate1)&& this.value.slice(2,4).match(dateValidate2)){
        expirationDate.classList.remove('border-red');
    }
    else {
         expirationDate.classList.add('border-red');
    }
    this.value = this.value.slice(0, 2) + '/' + this.value.slice(2,4);
})


const cardCvvValide = (/[0-9]{3}/);
cardCvv.addEventListener('blur', function() {
    if(this.value.match(cardCvvValide)) {
        cardCvv.classList.remove('border-red');
    } else {
        cardCvv.classList.add('border-red');
    }
})
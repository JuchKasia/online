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
// const phone = document.querySelector('.phone');
const address = document.querySelector('.address');
const personalEmail = document.querySelector('.personal-email');
const cartNumber = document.querySelector('.cart-number');
const cardOwner = document.querySelector('.card-owner');
const expirationDate = document.querySelector('#expiration-date');
const cardCvv = document.querySelector('#card-cvv');
const purchaseError = document.querySelectorAll('.purchase-error');
const errorModal = [0,0,0,0,0,0,0];
personalName.addEventListener('blur', function() {
    // console.log(this.value.split(" ").length==2);
    // this.value.split(" ").length == 2;
    if (this.value.split(" ").length >= 2 && this.value.split(" ")[0].length >=3 && this.value.split(" ")[1].length >=3) {
        personalName.classList.remove('border-red');
        purchaseError[0].classList.add('non');
        errorModal[0] = 0;
    } else {
        personalName.classList.add('border-red');
        purchaseError[0].classList.remove('non');
        errorModal[0] = 1;
    }
})

// const numberValid = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
// const numberValid2 = (/[0-9]{9,13}$/);
// const numberValid =(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/);
// phone.addEventListener('blur', function() {
//     console.log(this.value)
//     // console.log("afdsd "+this.innerHTML)
//     // (this.value != this.value.match(numberValid) && this.value.length > 10)||
//     if((this.value.length < 9)) {
//      phone.classList.add('border-red');
//      purchaseError[1].classList.remove('non');
//      errorModal[1] = 1;
//     }
//     else { 
//         phone.classList.remove('border-red');
//         purchaseError[1].classList.add('non');
//         errorModal[1] = 0;
//     }
//     // if (this.value[0] != "+") {
//     //     this.value = '+' + this.value; 
//     // }
    
// })

address.addEventListener('blur', function() {
    // console.log('dafs')
    if (this.value.split(" ").length >= 3 && this.value.split(" ")[0].length >=5 && this.value.split(" ")[1].length >=5 && this.value.split(" ")[2].length >=5) {
        address.classList.remove('border-red');
        purchaseError[2].classList.add('non');
        errorModal[2] = 0;
    } else {
        address.classList.add('border-red');
        purchaseError[2].classList.remove('non');
        errorModal[2] = 1;
    } 

})


const emailValid = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
personalEmail.addEventListener('blur', function() {
    if(this.value != this.value.match(emailValid)) {
        personalEmail.classList.add('border-red');
        purchaseError[3].classList.remove('non');
        errorModal[3] = 1;
    }
    else { 
        personalEmail.classList.remove('border-red');
        purchaseError[3].classList.add('non');
        errorModal[3] = 0;
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
});

const cardNumberValidate = (/^[0-9]{14}$/);
cartNumber.addEventListener('blur',function(){ 
    if(this.value.length >= 4 && this.value.length <= 14 && this.value == this.value.match(cardNumberValidate)) {
        cartNumber.classList.remove('border-red');
        purchaseError[4].classList.add('non');
        errorModal[4] = 0;
    }
    else {
        cartNumber.classList.add('border-red');
        purchaseError[4].classList.remove('non');
        errorModal[4] = 1;
    }
});

cardOwner.addEventListener('blur', function() {
    // console.log(this.value.split(" ").length==2);
    // this.value.split(" ").length == 2;
    if (this.value.split(" ").length >= 2 && this.value.split(" ")[0].length >=3 && this.value.split(" ")[1].length >=3) {
        cardOwner.classList.remove('border-red');
        purchaseError[5].classList.add('non');
        errorModal[5] = 0;
    } else {
        cardOwner.classList.add('border-red');
        purchaseError[5].classList.remove('non');
        errorModal[5] = 1;
    }
})

const dateValidate1 = /^[01][0-2]/;
const dateValidate2 = /[0-2][0-8]$/;
expirationDate.addEventListener('blur', function() {
    if(this.value.slice(0, 2).match(dateValidate1)&& this.value.slice(2,4).match(dateValidate2)){
        expirationDate.classList.remove('border-red');
        purchaseError[6].classList.add('non');
        errorModal[6] = 0;
    }
    else {
         expirationDate.classList.add('border-red');
         purchaseError[6].classList.remove('non');
         errorModal[6] = 1;
    }
    this.value = this.value.slice(0, 2) + '/' + this.value.slice(2,4);
})


const cardCvvValidate = (/^[0-9]{3}$/);
cardCvv.addEventListener('blur', function() {
    if(this.value != this.value.match(cardCvvValidate) && this.value.length < 3 || this.value.length > 3) {
        cardCvv.classList.add('border-red');
        purchaseError[7].classList.remove('non');
        errorModal[7] = 1;
    }
    else { 
        cardCvv.classList.remove('border-red');
        purchaseError[7].classList.add('non');
        errorModal[7] = 0;
    }
    this.value = this.value.slice(0, 3)
})


/* button payment submit */
const btnPaymentSubmit = document.querySelector('.btn-payment-submit');
btnPaymentSubmit.addEventListener('click', () => {
// console.log(errorModal.find((el)=>el==0) != 0)
// console.log(errorModal);
    if (errorModal.find((el)=>el==0) != 1) {
  console.log(errorModal);      
        setTimeout(function(){ 
            modalPurchaseWrapper.classList.add('non'),
            basketPage.classList.add('non'),
            main.classList.remove('non')}, 4000)
    }
});

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
// const personalEmail = document.querySelector('.personal-email');
// const cartNumber = document.querySelector('.cart-number');
// const cardOwner = document.querySelector('.card-owner');
// const expirationDate = document.querySelector('.expiration-date');
// const cardCvv = document.querySelector('.card-cvv');
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


// const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

/* Вариант 1 */

// const emailValid = () => {
//     return String(personalEmail)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
//       );
// };


// function updateInput() {
//   if (emailValid()){
//     personalEmail.classList.remove('border-red');

//   } 
//   else {
//     personalEmail.classList.add('border-red');
//   }
// }
// personalEmail.addEventListener('input', updateInput);


/* Вариант 2 */

// const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// personalEmail.addEventListener('blur', function() {
//     if(this.value != this.value.match(emailValid)) {
//         personalEmail.classList.add('border-red');
//     }
//     else { 
//         personalEmail.classList.remove('border-red');
//     }

// })


/* Вариант 3 */

// function validateEmail(personalEmail) {
//   return emailValid.test(this.value);
// }

// function updateInput() {
//   if (validateEmail(personalEmail)){
//     personalEmail.classList.remove('border-red');

//   } 
//   else {
//     personalEmail.classList.add('border-red');
//   }
// }
// personalEmail.addEventListener('input', updateInput);



/* Варианты регулярных выражений */
// const emailValid = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu);
// const emailValid = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const emailValid = (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);


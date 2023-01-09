// console.log("Hello World!");
// 6,7,14,23,27
import "../index";
import "../style.css";
import "../style.scss";
import "../normalize.css";
// import {Product} from './assets/types';
import { list } from '../list';
import { sizeFilter, colorFilter } from './category';
var category = new Set(["men", "women"]);
var size = new Set([]);
var color = new Set([]);
export var forLocal = {
    category: category,
    size: size,
    color: color
};
//  listCategory: Product;
// console.log(localStorage.getItem('listCategory'))
export var listCategory = list;
// forLocal.category('men');
// forLocal.category.add('women');
// console.log(forLocal.size.size)
// console.log(listCategory[0].price)
// function getCategoryArray start ------------------------------------------
var sortText = document.querySelector('.sort-text');
// аналитика доступных карточек на основе выбранных пунктов
export function getCategoryArray() {
    listCategory = [];
    for (var i = 0; i < list.length; i++) {
        // здесь выбор по men \ women
        // if (list[i].category == forLocal.category){
        if (forLocal.category.has(list[i].category)) {
            // если размер какой-нибудь активирован -------------------------------------
            if (forLocal.size.size > 0) {
                if (forLocal.color.size > 0) {
                    if (forLocal.color.has(list[i].color) && forLocal.size.has(list[i].size)) {
                        listCategory.push(list[i]);
                    }
                }
                else {
                    if (forLocal.size.has(list[i].size)) {
                        listCategory.push(list[i]);
                    }
                }
                //  добавляем эти карточки в listCategory -------------------------------------
            }
            else {
                // здесь происходит когда нет размеров
                if (forLocal.color.size > 0) {
                    // здесь происходит когда есть цвета
                    if (forLocal.color.has(list[i].color)) {
                        listCategory.push(list[i]);
                    }
                }
                else {
                    listCategory.push(list[i]);
                }
            }
        }
    }
    localStorage.setItem('listCategory', JSON.stringify(listCategory));
    // let poluchitObj = JSON.parse(localStorage.getItem('listCategory'));
    console.log('listCategory ' + listCategory.length);
    sizeFilter();
    colorFilter();
    if (listCategory.length < 19) {
        sortText.innerHTML = "".concat(sortText.innerHTML.split(" ").slice(0, 2).join(" "), " ").concat(listCategory.length, " ").concat(sortText.innerHTML.split(" ").slice(-1));
    }
    else {
        sortText.innerHTML = "".concat(sortText.innerHTML.split(" ").slice(0, 2).join(" "), " 18 ").concat(sortText.innerHTML.split(" ").slice(-1));
    }
}
//  function getRandomArray -------------------------------------------------
// eslint-disable-next-line prefer-const
var randomArray = [];
var arrayForCardsSpec = [];
var arrayForCardsBest = [];
function getRandomArray(m, max) {
    randomArray = [];
    // arrayForCardsSpec = [];
    // arrayForCardsBest = [];
    for (var i = 0; i < m; i++) {
        var num = Math.floor(Math.random() * max);
        if (!randomArray.includes(num)) {
            randomArray.push(num);
        }
        else {
            i--;
        }
    }
    return randomArray;
}
var arrayForCards = [];
arrayForCards = getRandomArray(18, 99);
arrayForCardsSpec = getRandomArray(3, 99);
arrayForCardsBest = getRandomArray(3, 99);
console.log(arrayForCards);
console.log(arrayForCardsBest);
console.log(arrayForCardsSpec);
// function getRandomArray finish -----------------------------------------
//  function buildCards -------------------------------------------------
var productDetailText = document.querySelectorAll('.product-detail-text');
var cardsStock = document.querySelectorAll('.stock');
var priceProduct = document.querySelectorAll('.price');
var productTitle = document.querySelectorAll('.product-title');
var mainCardImg = document.querySelectorAll('.img-prod1');
var secondCardImg = document.querySelectorAll('.img-prod2');
var productMiniature = document.querySelectorAll('.product-miniature');
// console.log("card " +priceProduct.length);
// console.log("card " +cardsStock.length);
// console.log(productTitle.length);
function buildCards() {
    for (var i = 0; i < productDetailText.length; i++) {
        productDetailText[i].innerHTML = list[arrayForCards[i]].description;
        cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0, 4) + " " + list[arrayForCards[i]].stock;
        priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + list[arrayForCards[i]].price;
        productTitle[i].innerHTML = list[arrayForCards[i]].title;
        mainCardImg[i].setAttribute('src', "".concat(list[arrayForCards[i]].images[0]));
        secondCardImg[i].classList.add("non");
    }
}
(!JSON.parse(localStorage.getItem('listCategory'))) ? buildCardsCategory :
    buildCards();
export function buildCardsCategory() {
    clearCards();
    for (var i = 0; i < listCategory.length; i++) {
        productMiniature[i].classList.remove('non');
        productDetailText[i].innerHTML = listCategory[i].description;
        cardsStock[i].innerHTML = cardsStock[i].innerHTML.slice(0, 4) + " " + listCategory[i].stock;
        priceProduct[i].innerHTML = priceProduct[i].innerHTML[0] + " " + listCategory[i].price;
        productTitle[i].innerHTML = listCategory[i].title;
        mainCardImg[i].setAttribute('src', "".concat(listCategory[i].images[0]));
        secondCardImg[i].classList.add("non");
    }
    // sortText.innerHTML= `${sortText.innerHTML.split(" ").slice(0,2).join("")} ${listCategory.length} ${sortText.innerHTML.split(" ").slice(-1)}`
}
function clearCards() {
    for (var i = 0; i < productMiniature.length; i++) {
        if (i < listCategory.length) {
            continue;
        }
        else {
            productMiniature[i].classList.add('non');
        }
    }
}
//  function getRandomArrayBest -------------------------------------------------
// console.log('arrayForCardsBest '+arrayForCardsBest);
// function buildBestsellerCards -----------------------------------------
var productTitleBest = document.querySelectorAll('.product-title-best');
var priceProductBest = document.querySelectorAll('.price-best');
var imgBest = document.querySelectorAll('.product-bestseller-img');
for (var j = 0; j < productTitleBest.length; j++) {
    // let img = document.createAttribute('img')
    productTitleBest[j].innerHTML = list[arrayForCardsBest[j]].title;
    priceProductBest[j].innerHTML = priceProductBest[j].innerHTML[0] + " " + list[arrayForCardsBest[j]].price;
    imgBest[j].setAttribute('src', "".concat(list[arrayForCardsBest[j]].images[0]));
}
//  function getRandomArraySpec -------------------------------------------------
// function buildSpecialCards -----------------------------------------
var productTitleSpec = document.querySelectorAll('.product-title-spec');
var productWithDisc = document.querySelectorAll('.price-spec');
var priceProductSpec = document.querySelectorAll('.regular-price');
var discountProductSpec = document.querySelectorAll('.discount-spec');
var imgSpec = document.querySelectorAll('.product-special-img');
for (var k = 0; k < productTitleSpec.length; k++) {
    productTitleSpec[k].innerHTML = list[arrayForCardsSpec[k]].title;
    productWithDisc[k].innerHTML = productWithDisc[k].innerHTML[0] + " " + (list[arrayForCardsSpec[k]].price - list[arrayForCardsSpec[k]].price / 100 * list[arrayForCardsSpec[k]].discount);
    priceProductSpec[k].innerHTML = priceProductSpec[k].innerHTML[0] + " " + list[arrayForCardsSpec[k]].price;
    discountProductSpec[k].innerHTML = "% " + list[arrayForCardsSpec[k]].discount;
    imgSpec[k].setAttribute('src', "".concat(list[arrayForCardsSpec[k]].images[0]));
}
// category selection  ------------------------------------------------------------
export var mainCategory = document.querySelectorAll('.category');
export var textCategoryMen = document.querySelector('.text-main-category-men');
export var textCategoryWomen = document.querySelector('.text-main-category-women');
var _loop_1 = function (i) {
    var way = document.querySelector('.way');
    mainCategory[i].addEventListener('click', function () {
        // (i==0) ? forLocal.category = 'men' : forLocal.category='women';
        if (i == 0) {
            forLocal.category.delete('women');
            forLocal.category.add('men');
            textCategoryWomen.classList.add('non');
            mainCategory[0].classList.add('checked');
            textCategoryMen.classList.remove('non');
            mainCategory[1].classList.remove('checked');
            // нужно добавить функцию перебора форлокал и достать результат
            way.innerHTML = "Category : Men";
        }
        else if (i == 1) {
            forLocal.category.delete('men');
            forLocal.category.add('women');
            textCategoryWomen.classList.remove('non');
            mainCategory[0].classList.remove('checked');
            textCategoryMen.classList.add('non');
            mainCategory[1].classList.add('checked');
            way.innerHTML = "Category : Women";
        }
        // console.log(forLocal.category);
        // localStorage.setItem('category',forLocal.category);
        getCategoryArray();
        buildCardsCategory();
    });
};
for (var i = 0; i < mainCategory.length; i++) {
    _loop_1(i);
}
//  finish category selection ----------------------------------------------------
// size filter left-aside ----------------------------------------------------------
var count;
export var sizeLabel = document.querySelectorAll('.size-label');
export var sizeInput = document.querySelectorAll('.size-input');
var _loop_2 = function (i) {
    count = 0;
    sizeInput[i].addEventListener('click', function () {
        sizeLabel[i].classList.toggle('checked');
        if (!forLocal.size.has(sizeLabel[i].innerHTML.split(' ')[0])) {
            forLocal.size.add(sizeLabel[i].innerHTML.split(' ')[0]);
        }
        else if (forLocal.size.has(sizeLabel[i].innerHTML.split(' ')[0])) {
            forLocal.size.delete(sizeLabel[i].innerHTML.split(' ')[0]);
        }
        // console.log(forLocal.size)
        getCategoryArray();
        buildCardsCategory();
        // console.log(listCategory);
    });
    for (var j = 0; j < listCategory.length; j++) {
        if (sizeLabel[i].innerHTML == listCategory[j].size) {
            count++;
        }
    }
    sizeLabel[i].innerHTML = sizeLabel[i].innerHTML.slice(0, 2) + " (" + "".concat(count) + ')';
};
for (var i = 0; i < sizeLabel.length; i++) {
    _loop_2(i);
}
// color filter left-aside ----------------------------------------------------------
var countColor;
export var colorLabel = document.querySelectorAll('.color-label');
export var colorInput = document.querySelectorAll('.color-input');
var _loop_3 = function (i) {
    countColor = 0;
    colorInput[i].addEventListener('click', function () {
        colorLabel[i].classList.toggle('checked');
        if (!forLocal.color.has(colorLabel[i].innerHTML.split(' ')[0])) {
            forLocal.color.add(colorLabel[i].innerHTML.split(' ')[0]);
        }
        else if (forLocal.color.has(colorLabel[i].innerHTML.split(" ")[0])) {
            forLocal.color.delete(colorLabel[i].innerHTML.split(' ')[0]);
        }
        getCategoryArray();
        buildCardsCategory();
    });
    for (var j = 0; j < listCategory.length; j++) {
        if (colorLabel[i].innerHTML == listCategory[j].color) {
            countColor++;
        }
    }
    colorLabel[i].innerHTML = colorLabel[i].innerHTML.slice(0, 7) + " (" + "".concat(countColor) + ')';
};
for (var i = 0; i < colorLabel.length; i++) {
    _loop_3(i);
}
// dual range slider for search filter ----------------------------------------------------------
// sort product by grid and list----------------------------------------------------------
var showGrid = document.querySelector('.show-grid');
var showList = document.querySelector('.show-list');
var productWrapper = document.querySelector('.product-wrapper');
showGrid.addEventListener('click', function () {
    productWrapper.classList.add('product-wrapper-grid');
    productWrapper.classList.remove('product-wrapper-list');
    // showGrid.addEventListener.add('')
});
showList.addEventListener('click', function () {
    productWrapper.classList.remove('product-wrapper-grid');
    productWrapper.classList.add('product-wrapper-list');
});
// sort product by price in main menu-----------------------------------------------------
var dropDownMenu = document.querySelector('.drop-down-menu');
dropDownMenu.addEventListener("change", function () {
    if (this.value == 'high') {
        sortLowToHigh(listCategory);
        buildCardsCategory();
    }
    if (this.value == 'low') {
        sortHighToLow(listCategory);
        buildCardsCategory();
    }
    if (this.value == 'az') {
        sortAZ(listCategory);
        console.log(listCategory);
        buildCardsCategory();
    }
    if (this.value == 'za') {
        sortZA(listCategory);
        console.log(listCategory);
        buildCardsCategory();
    }
    function sortLowToHigh(listCategory) {
        listCategory.sort(function (a, b) { return a.price > b.price ? 1 : -1; });
    }
    function sortHighToLow(listCategory) {
        listCategory.sort(function (a, b) { return a.price > b.price ? 1 : -1; }).reverse();
    }
    function sortAZ(listCategory) {
        listCategory.sort(function (a, b) {
            var titleA = a.title.toLowerCase();
            var titleB = b.title.toLowerCase();
            //сортируем строки по возрастанию
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
    }
    function sortZA(listCategory) {
        listCategory.sort(function (a, b) {
            var titleA = a.title.toLowerCase();
            var titleB = b.title.toLowerCase();
            //сортируем строки по уыванию
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        }).reverse();
    }
});

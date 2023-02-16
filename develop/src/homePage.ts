import { main } from './category';
import '../index';
import {clothing} from './blog';
// import {coverProduct, listCategoryImg} from './index';

export const navHome = document.querySelector('.home-link');
const homePage = document.querySelector('.homePage');


const carouselItems = document.querySelectorAll('.carousel__item');


// const carouselItems = document.querySelectorAll('.carousel__item');
// let currentItem = 0;
// let isEnable = true;
// const btnCarouselPrev =  document.querySelector('.btn-carousel-prev');
// const btnCarouselNext =  document.querySelector('.btn-carousel-next');


navHome.addEventListener('click', () => {
    homePage.classList.remove('non');
    main.classList.add('non');
})



const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
showSlides();

function showSlides() {
  // let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.add('non');  
  }
  slideIndex++;
  if (slideIndex > carouselItems.length) {
    slideIndex = 1
  }    
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carouselItems[slideIndex-1].classList.remove('non');  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



clothing.addEventListener('click', () => {
    homePage.classList.add('non');
    main.classList.remove('non');
})
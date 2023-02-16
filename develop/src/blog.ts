import { main } from './category';
import '../index';

export const navBlog = document.querySelector('.blog-link');
// export const clothing = document.querySelector('.clothing-link');
export const clothing = document.querySelector('.clothing-link');
const blogPage = document.querySelector('.blog-page');
// const blogInfoPerson = document.querySelectorAll('.blog-info-person1');

const blogInfo = document.querySelectorAll('.blog-short-info');
const blogCv2 = document.querySelector('.blog-cv2');
const blogCv1 = document.querySelector('.blog-cv1');
const blogBtnMore = document.querySelectorAll('.blog-btn-more');
const blogBtnLess = document.querySelectorAll('.blog-btn-less');

navBlog.addEventListener('click', () => {
    blogPage.classList.remove('non');
    main.classList.add('non');
    blogCv1.classList.add('non');
    blogCv2.classList.add('non');
    blogBtnLess[0].classList.add('non');
    blogBtnLess[1].classList.add('non');
})

blogBtnMore[0].addEventListener('click', () => {
    blogInfo[0].classList.add('non');
    blogCv1.classList.remove('non');
    blogBtnMore[0].classList.add('non');
    blogBtnLess[0].classList.remove('non');
})

blogBtnLess[0].addEventListener('click', () => {
    blogInfo[0].classList.remove('non');
    blogCv1.classList.add('non');
    blogBtnMore[0].classList.remove('non');
    blogBtnLess[0].classList.add('non');
})

blogBtnMore[1].addEventListener('click', () => {
    blogInfo[1].classList.add('non');
    blogCv2.classList.remove('non');
    blogBtnMore[1].classList.add('non');
    blogBtnLess[1].classList.remove('non');
})

blogBtnLess[1].addEventListener('click', () => {
    blogInfo[1].classList.remove('non');
    blogCv2.classList.add('non');
    blogBtnMore[1].classList.remove('non');
    blogBtnLess[1].classList.add('non');
})


clothing.addEventListener('click', () => {
    blogPage.classList.add('non');
    main.classList.remove('non');
})

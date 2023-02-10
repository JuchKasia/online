import { main } from './category';

const navBlog = document.querySelector('.blog-link');
const blogPage = document.querySelector('.blog-page');


navBlog.addEventListener('click', () => {
    blogPage.classList.remove('non');
})

// btnClose.addEventListener('click', () => {
//     modalPurchaseWrapper.classList.add('non');
//     basketPage.classList.add('non');
//     main.classList.remove('non');
// });
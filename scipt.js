const searchIcon=document.querySelector('.search-icon');
const searchForm=document.querySelector('.search-form');
const cartIcon=document.querySelector('.cart-icon');
const cartItemsContainer=document.querySelector('.cart-items-container');
const menuIcon=document.querySelector('.menu-icon');
const navbar=document.querySelector('.navbar')
searchIcon.addEventListener('click',()=>{
    searchForm.classList.add('active');
    cartItemsContainer.classList.remove('active');
    navbar.classList.remove('active');
})
cartIcon.addEventListener('click',()=>{
    cartItemsContainer.classList.add('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
})
menuIcon.addEventListener('click',()=>{
    navbar.classList.add('active');
    cartItemsContainer.classList.remove('active');
    searchForm.classList.remove('active');
})
window.onscroll=()=>{
    searchForm.classList.remove('active');
    cartItemsContainer.classList.remove('active');
    navbar.classList.remove('active');
}
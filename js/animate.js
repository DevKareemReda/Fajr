$(function () {
    new WOW().init();
})

let preloader = document.querySelector(".preloader");
window.onload = () => setTimeout(() => preloader.classList.add("fadeOut"), 300);
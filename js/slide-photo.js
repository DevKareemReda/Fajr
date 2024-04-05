let imageInner = document.querySelectorAll(".image-inner img");
let fullImage = document.querySelector(".full-image");
let image = document.querySelector(".full-image img");
let close = document.querySelector(".full-image span.close");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let counter = 0;

imageInner.forEach((el) => {
    el.onclick = function () {
        fullImage.classList.add("active");
        image.classList.add("active");
        console.log(el.children);
        counter = +this.getAttribute("data-index");
        image.src = imageInner[counter].src;
    };
});

image.onclick = () => nextlider()
next.onclick = () => nextlider();

prev.onclick = function () {
    counter === 0 ? (counter = imageInner.length - 1) : counter--;
    image.src = imageInner[counter].src;
};

close.onclick = () => cancelSlider();

// when click on body close slider
window.onclick = function (e) {
    if (e.target === fullImage) cancelSlider();
};

// when click on escape keyboard close slider
window.onkeydown = function (e) {
    if (e.key === "Escape" || e.keyCode === 27) cancelSlider();
};

function nextlider() {
    counter === imageInner.length - 1 ? (counter = 0) : counter++;
    image.src = imageInner[counter].src;
}

function cancelSlider() {
    fullImage.classList.remove("active");
    image.classList.remove("active");
}

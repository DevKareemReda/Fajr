$(function () {
    var slider = tns({
        container: ".slider",
        speed: 700,
        items: 3,
        loop: false,
        controlsPosition: "top",
        nav: false,
        mouseDrag: true,
        controlsContainer: ".slider-nav",
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            900: {
                items: 3,
                edgePadding: 120,
            },
        },
    });
});

let allLanguages = document.querySelectorAll(".language li a");
allLanguages.forEach((el) => {
    el.onclick = function (e) {
        e.preventDefault();
        allLanguages.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
    };
});

let since = document.querySelector(".since");
let allCount = document.querySelectorAll(".count");
let speed = 100;

window.onscroll = function () {
    if (this.scrollY > since.offsetTop - 200) {
        allCount.forEach((el) => {
            scrolled(el);
        });
    }
};

function scrolled(el) {
    setInterval(() => {
        let target = Number(el.getAttribute("data-counter"));
        let textContent = Number(el.textContent);
        let increase = target / speed;
        if (textContent < target) {
            el.textContent = Math.floor(increase + textContent);
        } else {
            el.textContent = target;
        }
    }, 15);
}

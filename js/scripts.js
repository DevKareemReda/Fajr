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

let allTabs = document.querySelectorAll(".tabs li a");
allTabs.forEach(el => {
  el.onclick = function (e) {
    e.preventDefault();
    allTabs.forEach((el) => el.classList.remove("active"));
    this.classList.add("active")
  }
})
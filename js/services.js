let allServices = document.querySelectorAll(".services-rect");

allServices.forEach((el) => {
    el.onclick = function () {
        allServices.forEach((ell) => {
            if (ell !== el) {
                ell.classList.remove("active");
            }
        });
        if (!this.classList.contains("active")) { 
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
        document.querySelector("#" + this.getAttribute("data-tab")).classList.toggle("active");
    };
});

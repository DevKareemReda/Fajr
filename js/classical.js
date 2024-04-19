let allTabs = document.querySelectorAll(".tabs li a");
allTabs.forEach((el) => {
    el.onclick = function (e) {
        e.preventDefault();
        allTabs.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
    };
});
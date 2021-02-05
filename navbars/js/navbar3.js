let searchToggle = document.querySelector(".search-toggle");
let searchForm = document.querySelector(".search-form");

searchToggle.addEventListener("click", () => {
    if (window.innerWidth < '600') {
        window.location.href = 'https://google.com/';
    } else {
        searchForm.classList.toggle("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
    }
});
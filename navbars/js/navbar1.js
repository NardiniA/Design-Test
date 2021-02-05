let navToggle = document.querySelector(".nav-toggle");

window.addEventListener('DOMContentLoaded', () => {
    navToggle.addEventListener("click", function () {
        document.querySelector(".nav-wrapper").classList.toggle("active");
        if (document.querySelector(".nav-wrapper").classList.contains('active')) {
            navToggle.setAttribute("aria-expanded", "true");
            navToggle.setAttribute("aria-label", "close menu");
        } else {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "menu");
        }
    });
});

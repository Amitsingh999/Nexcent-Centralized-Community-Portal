document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-list");
    const hamburger = document.querySelector(".hamburger-icon");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});

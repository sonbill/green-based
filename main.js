// DESKTOP CAROUSEL
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// SWIPER SOLUTIONS
var swiperSolution = new Swiper(".mySwiperSolution", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// 
const closeBtn = document.getElementById("close-Menu")
const openBtn = document.getElementById("open-Menu")
const overLay = document.getElementById("over-Lay")
const navMenu = document.getElementById("mobile__nav")

openBtn.addEventListener("click", function () {
    navMenu.style.transform = "translateX(-0%)"
    overLay.style.display = "block"
})
closeBtn.addEventListener("click", function () {
    overLay.style.display = "none"
    navMenu.style.transform = "translateX(-100%)"
})
overLay.addEventListener("click", function () {
    overLay.style.display = "none"
    navMenu.style.transform = "translateX(-100%)"
})
//
// CONTENT 4
const tabHeader = document.getElementsByClassName("tab-header")[0];
const tabIndicator = document.getElementsByClassName("tab-indicator")[0];
const tabBody = document.getElementsByClassName("tab-body")[0];
const tabsPane = tabHeader.getElementsByTagName("div");
for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");
        tabIndicator.style.left = `calc((100%/3) * ${i})`;
    });
}

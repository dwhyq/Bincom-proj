const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const headerTitle = document.querySelector(".header-title");
const header = document.querySelector("header");
const overLay = document.querySelector(".overlay")


overLay.addEventListener('click', closeMenuOnClick)

function closeMenuOnClick() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerTitle.classList.toggle("active");
  overLay.classList.remove("active")
}

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  overLay.classList.toggle("active")
  navMenu.classList.toggle("active");
  headerTitle.classList.toggle("active");
}

// The code below closes the hamburger menu when link is clinked.

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overLay.classList.remove("active")
}

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    header.classList.add('active_nav')
  } else {
    header.classList.remove('active_nav')
  }
  console.log(window.scrollY);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    showImage(currentIndex);
});
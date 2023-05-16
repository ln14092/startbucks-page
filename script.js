const headerBtn = document.querySelectorAll(".header-btn");
const activeColor = document.querySelector(".active-color");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});

function imgSlider(data) {
  document.querySelector(".starbucks").src = data;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function textColor(color) {
  const circle = document.querySelector("span");
  circle.style.color = color;
}
function buttonColor(color) {
  const circle = document.querySelector(".textbox a");
  circle.style.background = color;
}
function listColor(color) {
  const circle = document.querySelector("header ul li a:hover");
}

//!  CHANGE BUTOTN COLOR WHEN THEME IS CHANGED

let currentColor;

if (headerBtn) {
  headerBtn.forEach(function (e) {
    e.addEventListener("mouseover", function () {
      currentColor = activeColor.style.background;
      e.style.background = `${currentColor}`;
    });
  });

  headerBtn.forEach(function (e) {
    e.addEventListener("mouseout", function () {
      e.style.background = "transparent";
    });
  });
}

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

slideIcon = $('.cicle-icon')
const slide = $$('.person-slider');
const aboutIcon = $$('.cicle-icon')
const nextDescription = $('.sub-person-descripton');
const countSlider =$$('.person-slider');
const superNextDescription = $('.super-person');

//lấy ra độ rộng của thẻ super-person'


aboutIcon.forEach((item,index)=>{
  const pan = slide[index];
  item.onclick = ()=>{
    $('.person-slider.myactive').classList.remove('myactive');
    $('.cicle-icon.myactive').classList.remove('myactive');
    item.classList.add('myactive');
    pan.classList.add('myactive');
    nextDescription.style = `transform: translateX(${index*-100}%)`;
  }
})
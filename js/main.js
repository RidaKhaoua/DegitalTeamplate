/**
 * get icon bar
 * add event click
 * add class show nav on ul list
 */

let iconBar = document.querySelector(".bar");

iconBar.addEventListener("click", showNav);

function showNav(params) {
  document.querySelector(".links").classList.toggle("show-links");
}

/**
 * Scrool to top
 * get element scroll to top
 * add event => click
 * use method offsetTop
 * use method scroll
 */

let scrollToTop = document.querySelector(".scroll-top");

scrollToTop.addEventListener("click", scrollTop);

function scrollTop(e) {
  window.scroll(0, 0);
}

window.addEventListener("scroll", showElements);
let sectionAbout = document.querySelector(".about");
let sectionServices = document.querySelector(".services");
let contact = document.querySelector(".contact");
let faq = document.querySelector(".faq");
function showElements() {
  if (this.scrollY >= faq.offsetTop) {
    showFaq();
  } else if (this.scrollY >= contact.offsetTop) {
    showContentIntoContact();
  } else if (this.scrollY >= sectionServices.offsetTop + 100) {
    showBoxs();
  } else if (this.scrollY >= sectionAbout.offsetTop) {
    scrollToTop.style.cssText = "opacity:1";
  } else {
    scrollToTop.style.cssText = "opacity:0";
  }
}

/**
 * show card services
 * get all the box
 * set propertie scale 1
 */

function showBoxs(params) {
  let boxs = Array.from(document.querySelectorAll(".services-content .box"));
  let content = document.querySelector(".services .body-content");
  content.style.opacity = "1";
  let delay = 0.1;
  boxs.forEach((element) => {
    element.style.transitionDelay = delay++ + "s";
    element.style.transform = "scale(1)";
  });
}

function showContentIntoContact(params) {
  let image = document.querySelector(".contact .image");
  let content = document.querySelector(".contact .content");
  image.style.transform = "translateX(0px)";
  content.style.transform = "translateX(0px)";
}

function showFaq() {
  let wrap = document.querySelector(".faq .wrap");
  wrap.style.transform = "scaleY(0)";
}

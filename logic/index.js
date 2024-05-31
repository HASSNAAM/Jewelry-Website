// Change Header Background Color On Scroll
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const sectionTwo = document.getElementById("section-two");
    const sectionTwoTop = sectionTwo.offsetTop;

    if (window.scrollY >= sectionTwoTop) {
      nav.style.backgroundColor = "#333";
      nav.style.top = "0";
    } else {
      nav.style.backgroundColor = "transparent";
      nav.style.top = "45px";
    }
  });
});

// Scroll To Top Button
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener("scroll", function () {
  let scrollButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

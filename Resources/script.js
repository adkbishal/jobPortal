// Top Scroll Bar JS Function
let backBtn = document.querySelector("#backToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

//Top Scroll Bar JS Function End


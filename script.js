document.querySelector(".cvButton").addEventListener("click", function() {
    window.open("docs/cv.pdf", "_blank");
  });

document.querySelector(".arrow-down").addEventListener("click", function() {
    document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".coverLetterButton").addEventListener("click", function() {
    window.open("docs/cover_letter_squarespace.pdf", "_blank");
  });

  document.querySelector(".aboutMeButton").addEventListener("click", function() {
    document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
  });
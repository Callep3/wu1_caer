var slideIndex = 0;
showSlides(); // runs the function bellow

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Gets the element and makes it easily repeatable with just "slides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Makes those who shouldn't be visible not visible
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"; //Makes it visible
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

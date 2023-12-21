let ul = document.querySelector('nav .ul');

function openMenu(){
  ul.classList.add('open');
  document.querySelector('.slideshow-container').classList.add('hidden');
}

function closeMenu(){
  ul.classList.remove('open');
  document.querySelector('.slideshow-container').classList.remove('hidden');
}

window.addEventListener('scroll', function(){
  let scroll = this.document.querySelector('.topo')
  scroll.classList.toggle('active', this.window.scrollY > 150)
})

function backTop(){
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

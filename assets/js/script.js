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


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

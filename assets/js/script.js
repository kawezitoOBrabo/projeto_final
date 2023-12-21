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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe "active" de todas as bolinhas
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Atualiza o índice do slide
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Adiciona a classe "active" à bolinha correspondente ao slide atual
  dots[slideIndex - 1].classList.add("active");

  // Atualiza a visibilidade das setas de navegação
  prevButton.style.display = (slideIndex === 1) ? "none" : "block";
  nextButton.style.display = (slideIndex === slides.length) ? "none" : "block";

  // Chama a função recursivamente após 4 segundos para o próximo slide
  setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos
}

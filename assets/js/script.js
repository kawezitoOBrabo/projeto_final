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


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe "active" de todas as bolinhas
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideIndex++;

  // Se o índice for maior que o número de slides, reinicia para o primeiro slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Adiciona a classe "active" à bolinha correspondente ao slide atual
  dots[slideIndex - 1].classList.add("active");

  // Chama a função recursivamente após 4 segundos para o próximo slide
  setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos

}
let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      // Define o slideIndex para o índice da bolinha clicada
      slideIndex = i + 1;
      showSlides();
  });}

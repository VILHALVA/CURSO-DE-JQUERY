$(document).ready(function(){
    var currentIndex = 0;
    var slides = $("#slideshow img");
    var totalSlides = slides.length;
    var slideWidth = slides.width();
    var legendas = $(".legenda");

    // Exibir o primeiro slide e a legenda correspondente
    slides.eq(currentIndex).fadeIn();
    legendas.eq(currentIndex).addClass("active");

    // Função para mostrar o próximo slide e a legenda correspondente
    function showNextSlide() {
        slides.eq(currentIndex).fadeOut();
        legendas.eq(currentIndex).removeClass("active");
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.eq(currentIndex).fadeIn();
        legendas.eq(currentIndex).addClass("active");
    }

    // Chamar a função showNextSlide a cada 3 segundos
    setInterval(showNextSlide, 3000);
});

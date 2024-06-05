$(document).ready(function(){
    // Navegação suave
    $("nav ul li a").click(function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Exibir conteúdo adicional
    $("#moreAbout").click(function(){
        $("#moreAboutContent").slideToggle();
    });

    // Manipulação com seletores hierárquicos

    // Seleciona todos os <p> dentro de <section>
    $("section p").css("color", "blue");

    // Seleciona todos os <li> que são filhos diretos de <nav>
    $("nav > ul > li").css("border", "1px solid white");

    // Seleciona o <p> imediatamente após <h1> em #home
    $("#home h1 + p").css("font-weight", "bold");

    // Seleciona todos os <p> que são irmãos de <h1> em #portfolio
    $("#portfolio h2 ~ .portfolio-item p").css("background-color", "yellow");

    // Simulação de envio de formulário
    $("#contactForm").submit(function(event){
        event.preventDefault();
        
        // Simulação de envio AJAX
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        console.log("Dados do formulário:", formData);
        
        // Simulação de sucesso
        alert("Mensagem enviada com sucesso!");
        $(this).trigger("reset");
    });
});

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

    // Formulário de contato (apenas exemplo de manipulação)
    $("form").submit(function(event){
        event.preventDefault();
        alert("Mensagem enviada! Obrigado pelo contato.");
        $(this).trigger("reset");
    });
});

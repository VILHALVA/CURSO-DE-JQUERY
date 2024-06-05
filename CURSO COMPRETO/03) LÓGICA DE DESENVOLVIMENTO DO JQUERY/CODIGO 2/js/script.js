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

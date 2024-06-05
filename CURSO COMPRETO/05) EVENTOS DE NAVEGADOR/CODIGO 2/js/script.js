$(document).ready(function(){
    // Evento 'error'
    $("#errorEvent").click(function(){
        $("<img>").on("error", function(){
            alert("Erro ao carregar a imagem!");
        }).attr("src", "imagem_que_nao_existe.jpg");
    });

    // Evento 'resize'
    $(window).on("resize", function(){
        $("#resizeEvent").text("Janela redimensionada: " + $(window).width() + " x " + $(window).height());
    });

    // Evento 'scroll'
    $(window).on("scroll", function(){
        $("#scrollEvent").text("Posição do Scroll: " + $(this).scrollTop());
    });

    // if-else no jQuery
    $("#ifElse").click(function(){
        var number = Math.floor(Math.random() * 10) + 1;
        if (number % 2 === 0) {
            alert(number + " é um número par!");
        } else {
            alert(number + " é um número ímpar!");
        }
    });
});

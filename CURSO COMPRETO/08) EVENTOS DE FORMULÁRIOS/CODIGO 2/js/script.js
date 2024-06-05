$(document).ready(function(){
    // Evento submit
    $("#meuFormulario").submit(function(event){
        event.preventDefault(); // Evita o envio do formulário padrão
        var nome = $("#nome").val();
        var email = $("#email").val();
        // Aqui você pode adicionar lógica para enviar o formulário via AJAX ou fazer outras operações.
        alert("Formulário enviado com sucesso!\nNome: " + nome + "\nEmail: " + email);
        // Limpa os campos após o envio do formulário
        $(this).trigger("reset");
    });

    // Evento change
    $("#nome").change(function(){
        alert("O valor do campo Nome foi alterado para: " + $(this).val());
    });

    // Evento focus
    $("#email").focus(function(){
        $(this).css("border-color", "blue");
    });

    // Evento blur
    $("#email").blur(function(){
        $(this).css("border-color", "#ccc");
    });
});

$(document).ready(function(){
    // Validação do campo de nome de usuário
    $("#username").keyup(function(){
        if ($(this).val().length < 5) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error").addClass("success");
        }
    });

    // Submissão do formulário
    $("#myForm").submit(function(event){
        event.preventDefault(); // Evita o envio do formulário padrão
        // Aqui você pode adicionar lógica para enviar o formulário via AJAX ou fazer outras operações.
        var username = $("#username").val();
        var password = $("#password").val();
        if (username.length >= 5 && password.length >= 6) {
            alert("Formulário enviado com sucesso!\nUsuário: " + username + "\nSenha: " + password);
            // Limpa os campos após o envio do formulário
            $(this).trigger("reset");
            // Remove as classes de sucesso e erro dos campos
            $("#username, #password").removeClass("success error");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });
});

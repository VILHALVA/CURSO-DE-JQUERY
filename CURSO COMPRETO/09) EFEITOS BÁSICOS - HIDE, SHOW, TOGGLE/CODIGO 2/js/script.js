$(document).ready(function(){
    // Ocultar elemento
    $("#hideButton").click(function(){
        $("#elemento").hide();
    });

    // Exibir elemento
    $("#showButton").click(function(){
        $("#elemento").show();
    });

    // Alternar elemento
    $("#toggleButton").click(function(){
        $("#elemento").toggle();
    });
});

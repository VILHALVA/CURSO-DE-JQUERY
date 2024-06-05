$(document).ready(function(){
    // Evento click
    $("#elemento").click(function(){
        alert("Você clicou no elemento!");
    });

    // Evento mouseover e mouseout
    $("#elemento").mouseover(function(){
        $(this).css("background-color", "yellow");
    });

    $("#elemento").mouseout(function(){
        $(this).css("background-color", "lightblue");
    });

    // Evento mousemove
    $(document).mousemove(function(event){
        $("#posicaoMouse").text("Posição do Mouse: " + event.pageX + ", " + event.pageY);
    });
});

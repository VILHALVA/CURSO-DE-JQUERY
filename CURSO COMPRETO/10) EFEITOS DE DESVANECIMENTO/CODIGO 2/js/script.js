$(document).ready(function(){
    // Fade In
    $("#fadeInButton").click(function(){
        $("#elemento").fadeIn();
    });

    // Fade Out
    $("#fadeOutButton").click(function(){
        $("#elemento").fadeOut();
    });

    // Fade Toggle
    $("#fadeToggleButton").click(function(){
        $("#elemento").fadeToggle();
    });

    // Fade To
    $("#fadeToButton").click(function(){
        $("#elemento").fadeTo("slow", 0.5); // Reduz a opacidade para 50%
    });
});

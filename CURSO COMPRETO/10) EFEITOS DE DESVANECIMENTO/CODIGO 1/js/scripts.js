$(function () {

    var ex = $('.ex1');
    var ex2 = $('.ex2');

    var button = $(':button');

    //     button.click(function () {
    //         ex.fadeOut("slow");
    //     }).dblclick(function () {
    //         ex.fadeIn("slow");
    //     });

    // button.click(function () {
    //     ex.fadeTo("slow", 0.8);
    // });

    // button.click(function () {
    //     ex.fadeToggle("slow");
    // });

    button.click(function () {
        ex.fadeTo(3000, 0.1, function () {
            ex2.fadeTo("slow", 0.5);
        });
    });

});









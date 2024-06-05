$(function () {

    var ex = $('.ex1');

    $('.ev1').click(function () {
        $(this).css("background", "#ccc");
        ex.text("Você clicou!");
    });

    $('.ev2').dblclick(function () {
        $(this).css("background", "#ccc");
        ex.text("Você deu dois cliques!");
    });

    $('.ev3').focusin(function () {
        $(this).css("background", "#ccc");
        ex.text("Você deu focos!");
    }).focusout(function () {
        $(this).css("background", "#000");
        ex.text("Você tirou o focos!");
    });

    $('.ev4').hover(function () {
        $(this).css("background", "#ccc");
        ex.text("Você passou o mouse!");
    });

    $('.ev5').mousedown(function () {
        $(this).css("background", "#ccc");
        ex.text("Você apertou o botão do mouse!");

    }).mouseup(function () {
        $(this).css("background", "#000");
        ex.text("Você soltou o botão do mouse!");
    });

    var a = 0;
    var b = 0;


    $('.ev6').mouseenter(function () {
        a++;
        ex.text("Entradas do Mouse: " + a);
    }).mouseout(function () {
        ex.text("Saidas do Mouse: ");
    });

    $('.ev7').mouseover(function () {
        b++
        ex.text("Entradas do Mouse: " + b);
    }).mouseleave(function () {
        ex.text("Mouse leave");

    });

    $('.ev8').mousemove(function (move) {
        var localx = move.pageX;
        var localy = move.pageY;

        ex.text("Movimento X: " + localx + " - Movimento Y: " + localy);

    });
});









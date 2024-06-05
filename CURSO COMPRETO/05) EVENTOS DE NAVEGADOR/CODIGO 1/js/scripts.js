$(document).ready(function () {

    // $("img").on("error", function () {
    //     $(this).attr('src', 'img/error.jpg');
    // }).attr('src', 'img/coruja.jpg')

    // $(window).resize(function () {
    //     $('img').width($(window).width()).height($(window).height());

    // });

    // $('img').width($(window).width()).height($(window).height());

    // $(window).scroll(function () {
    //     $('img').fadeOut('1000');
    // });

    $('body').css("height", "5000px");
    // $(window).scroll(function () {
    //     var top = $(window).scrollTop();
    //    console.log(top);
    // });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        console.log(top);
        if (top > 100) {
            $('img').fadeOut('1000');
        } else {
            $('img').fadeIn('1000');
        }

    });





});


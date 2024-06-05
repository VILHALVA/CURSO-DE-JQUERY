$(document).ready(function(){
    var header = $("#header");
    var headerHeight = header.height();
    var conteudo = $("#conteudo");

    $(window).scroll(function(){
        if ($(this).scrollTop() > headerHeight) {
            header.addClass("fixo");
            conteudo.css("padding-top", headerHeight);
        } else {
            header.removeClass("fixo");
            conteudo.css("padding-top", 0);
        }
    });
});

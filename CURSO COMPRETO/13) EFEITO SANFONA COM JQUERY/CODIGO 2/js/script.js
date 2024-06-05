$(document).ready(function() {
    $('.accordion h3').click(function() {
      $(this).next('.content').slideToggle();
      $(this).toggleClass('active');
    });
  });
  
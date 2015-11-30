$(document).ready(function() {
    $('li').click(function() {
        var ids = $(this).attr('id');
        $('div[id="'+ids+'"').addClass('boxes');
        $('ul').addClass('menu_move');
        $('li').slideToggle('slow');
    });
    $('div[class="close"]').click( function() {
        $('.cont-gallery').removeClass('boxes');
        $('ul').removeClass('menu_move');
        $('li').slideDown();
    });
});
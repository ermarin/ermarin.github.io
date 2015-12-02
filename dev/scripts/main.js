$(document).ready( function() {
    $('span').click( function() {
        var ids = $(this).attr('id');
        $('div[id="'+ids+'"').addClass('boxes');
        $('div[id="'+ids+'"').css('display', 'block');
        $('div.menu').addClass('menu_move');
        $('div.menu').slideUp('slow');
    });
    $('div[class="close"]').click( function() {
        $('div.cont-gallery').slideUp('fast');
        $('div.menu').removeClass('menu_move');
        $('div.menu').slideDown('slow');
    });
    function getRandomColor() {
        $('span').each( function() {
            var color = Math.floor(Math.random()*16777215).toString(16);
            $(this).css('background-image', 'linear-gradient(#'+color+', #333)');
            $(this).css('background-image', '-webkit-linear-gradient(#'+color+', #333)');
            $(this).css('background-image', '-moz-linear-gradient(#'+color+', #333)');
        });
    }
    getRandomColor();
});
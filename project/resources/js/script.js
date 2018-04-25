$(document).ready(function () {
    
    $('#menu-btn').click(function () {
        $('nav').slideToggle(900);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } 
        else {
            setTimeout(function () {
                $('.is-active').addClass('not-active').removeClass('is-active')
            }, 600)
        }
    });
    



/*--map--*/

var map = new GMaps ({
    div: '.map',
    lat: 42.876064,
    lng: 74.588466
});

map.addMarker({
    lat: 42.876064,
    lng: 74.588466,
    title: 'ОАО "АК-СУУ"',
    infoWindow: {
        content: '<p>ОАО "АК-СУУ"</p>'
    }
})

 $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    
})
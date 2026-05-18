$(document).ready(function () {
    $('#btn-show-video').click(function (e) {
        e.preventDefault();
        $('#video-container').slideDown(1000, function () {
            $('#promo-video')[0].play();
        });
        $('html, body').animate({
            scrollTop: $("#video-container").offset().top - 80
        }, 1000);
    });

    $('#btn-hide-video').click(function (e) {
        e.preventDefault();
        $('#promo-video')[0].pause();
        $('#video-container').slideUp(800);
    });

    $('.card').hover(
        function () {
            $(this).addClass('shadow-lg').css({
                'cursor': 'pointer',
                'transition': 'all 0.3s ease',
                'transform': 'translateY(-5px)'
            });
        },
        function () {
            $(this).removeClass('shadow-lg').css({
                'transform': 'translateY(0)'
            });
        }
    );
});

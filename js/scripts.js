$(function () {
    setTimeout(() => {
        $('.loader').css('display', 'none');
    }, 1500);
    // SLICK
    $('.artwork-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
    });

    // MCUSTOMSCROLLBAR
    $('.result-body').mCustomScrollbar({
        axis: 'y',
        theme: 'dark',
    });
});

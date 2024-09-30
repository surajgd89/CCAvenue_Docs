$(function () {
    setTimeout(() => {
        $(".loader").css("display", "none");
    }, 1500);

    // AOS INIT
    AOS.init();

    // SLICK
    $(".artwork-slide").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        fade: true,
        cssEase: "linear",
    });

    // MCUSTOMSCROLLBAR
    $(".result-body").mCustomScrollbar({
        axis: "y",
        theme: "minimal-dark",
    });

    // $('.sidebar').mCustomScrollbar({
    //     axis: 'y',
    //     theme: 'minimal-dark',
    // });

    //SIDEBAR
    $(".child > li > a").click(function (e) {
        e.preventDefault();
        if ($(this).next("ul").length) {
            $(".child > li > ul").slideUp(300);
            $(this).next("ul").slideDown(300);
            $(this).parent().toggleClass("open");
        } else {
            $("li").removeClass("active");
            $(this).parent().toggleClass("active");
        }
    });

    // AOS REFRESH
    AOS.refresh();
});

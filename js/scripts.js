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
    $(".child li a").click(function (e) {
        e.preventDefault();
        $(this).next("ul").slideToggle(300);
        $(this).parent().toggleClass("open");
    });

    $("li a").click(function () {
        $("li").removeClass("active");
        $(this).parent().addClass("active");
    });

    // AOS REFRESH
    AOS.refresh();
});

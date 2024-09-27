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
    /* $(".submenu > a").click(function (e) {
        e.preventDefault();

        var $submenu = $(this).next("ul");

        // Toggle the current submenu
        if ($submenu.is(":visible")) {
            $submenu.slideUp();
            $(this).parent().removeClass("open");
        } else {
            // Only slide up sibling submenus at the same level
            $(this).parent().siblings(".submenu").find("ul").slideUp();
            $(this).parent().siblings(".submenu").removeClass("open");

            $submenu.slideDown();
            $(this).parent().addClass("open");
        }
    }); */

    // AOS REFRESH
    AOS.refresh();
});

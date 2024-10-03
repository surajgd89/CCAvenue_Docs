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

    //SIDEBAR
    $(".child > li > a").click(function (e) {
        if ($(this).next(".subchild").length) {
            $(".child > li").removeClass("open");
            $(this).parent("li").addClass("open");

            if ($(this).next(".subchild").is(":visible")) {
                $(this).next(".subchild").slideUp();
                $(this).parent("li").removeClass("open");
            } else {
                $(".subchild").slideUp();
                $(this).next(".subchild").slideDown();
            }

            $(".innerchild").slideUp();
            $(".innerchild").parent("li").removeClass("open");
        }
    });

    $(".subchild > li > a").click(function (e) {
        if ($(this).next(".innerchild").length) {
            $(".subchild > li").removeClass("open");
            $(this).parent("li").addClass("open");

            if ($(this).next(".innerchild").is(":visible")) {
                $(this).next(".innerchild").slideUp();
                $(this).parent("li").removeClass("open");
            } else {
                $(".innerchild").slideUp();
                $(this).next(".innerchild").slideDown();
            }
        }
    });

    $("li a").click(function (e) {
        if ($(this).next(".child").length || $(this).next(".subchild").length || $(this).next(".innerchild").length) {
        } else {
            $("li").removeClass("active");
            $(this).parent("li").addClass("active");

            if (!$(this).parents("ul").hasClass("innerchild")) {
                $(this).parent("li").siblings().removeClass("open");
                $(this).parents(".subchild").find(".innerchild").slideUp();
            }
        }
    });

    $(".toggle-btn").on("click", function () {
        $(".overlay-sidebar").addClass("active");
        $(".sidebar").addClass("active");
    });

    $(".close-sidebar, .overlay-sidebar").on("click", function () {
        $(".overlay-sidebar").removeClass("active");
        $(".sidebar").removeClass("active");
    });

    if (!$(".sidebar").length) {
        $(".toggle-btn").hide();
    }

    let otherBtns = $(".header-btn").clone(true);
    $(".other-links").on("click", function () {
        $(this).toggleClass("active");
        $(".other-links-data").empty();
        $(otherBtns).appendTo($(".other-links-data"));
    });

    // AOS REFRESH FOR ANIMATION
    AOS.refresh();
});

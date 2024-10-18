$(function () {
    //SIDEBAR
    $(".child > li > a").click(function (e) {
        let nextElement = $(this).next(".subchild");
        let parentElement = $(this).parent("li");

        if (nextElement.length) {
            $(".child > li").removeClass("open");
            parentElement.addClass("open");

            if (nextElement.is(":visible")) {
                nextElement.slideUp();
                parentElement.removeClass("open");
            } else {
                $(".subchild").slideUp();
                nextElement.slideDown();
            }

            $(".innerchild").slideUp();
            $(".innerchild").parent("li").removeClass("open");
        } else {
            $(".subchild").slideUp();
            $(".subchild").parent("li").removeClass("open");
        }
    });

    $(".subchild > li > a").click(function (e) {
        let nextElement = $(this).next(".innerchild");
        let parentElement = $(this).parent("li");

        if (nextElement.length) {
            $(".subchild > li").removeClass("open");
            parentElement.addClass("open");

            if (nextElement.is(":visible")) {
                nextElement.slideUp();
                parentElement.removeClass("open");
            } else {
                $(".innerchild").slideUp();
                nextElement.slideDown();
            }
        }
    });

    $("li a").click(function (e) {
        let nextElement = $(this).next("ul");
        let parentElement = $(this).parent("li");

        if (!nextElement.length) {
            $("li").removeClass("active");
            parentElement.addClass("active");

            if (!$(this).parents("ul").hasClass("innerchild")) {
                parentElement.siblings().removeClass("open");
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
});

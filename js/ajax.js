function ajaxload(url) {
    $.ajax({
        url: url,
        beforeSend: function () {
            //NProgress.start();
        },
        success: function (result, status) {
            $(".docs-content").html(result);
        },
        error: function (status, error) {
            $(".docs-content").html("404 Page Not Found = " + url);
        },

        complete: function (status) {
            //allFunctions();
            //NProgress.done();
            setTimeout(function () {
                $("body,html").animate({ scrollTop: 0 }, 500);
            }, 1000);
        },
    });
}

function pageajax() {
    var hash = window.location.href.split("#");
    var ajax_url = hash[1];
    var default_url = "pages/get-started.jsp";

    if (typeof ajax_url === "undefined") {
        $(".parent li a").each(function () {
            $('a[href="#pages/get-started.jsp"]').parent("li").addClass("active");
        });
        ajaxload(default_url);
    } else {
        $(".parent li a").each(function () {
            $(".parent li").removeClass("active");

            let target = $('a[href="' + "#" + ajax_url + '"]');

            target.parent("li").addClass("active");

            if (target.parents("ul").hasClass("subchild") || target.parents("ul").hasClass("innerchild")) {
                target.parents("ul").slideDown().parent("li").addClass("open");
            }

            if ($(window).width() < 992) {
                $(".sidebar").removeClass("active");
                $(".overlay-sidebar").removeClass("active");
            }
        });
        ajaxload(ajax_url);
    }
}

$(window).on("load", function () {
    pageajax();
});

$(window).on("popstate", function () {
    pageajax();
});

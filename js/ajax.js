function ajaxload(url) {
    $.ajax({
        url: "../" + url,
        beforeSend: function () {
            //NProgress.start();
            //$('.loader').fadeIn('500');
        },
        success: function (result, status) {
            //$('.loader').fadeOut('500');
            $(".docs-content").html(result);
            //$('.user-btn.dropdown').removeClass('open');
        },
        error: function (status, error) {
            alert(" 404 Page Not Found = " + url);
        },
        complete: function (status) {
            //allFunctions();
            //allHiCharts();
            //NProgress.done();
            // setTimeout(function () {
            // 	$("body,html").animate({
            // 		scrollTop: 0
            // 	}, 500);
            // }, 1000);
        },
    });
}

function pageajax() {
    var hash = window.location.href.split("#");
    var ajax_url = hash[1];
    //console.log(ajax_url);
    var default_url = "#/pages/get-started.jsp";

    if (typeof ajax_url === "undefined") {
        $(".parent li a").each(function () {
            $('a[href="#/pages/get-started.jsp"]').parents("li").addClass("active");
        });

        ajaxload(default_url);
    } else {
        $(".parent li a").each(function () {
            $(".parent li").removeClass("active");
            $('.parent li a[href="' + "#" + ajax_url + '"]')
                .parents("li")
                .addClass("active");
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

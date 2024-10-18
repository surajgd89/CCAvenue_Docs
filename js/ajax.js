const skeleton = `
<!-- ==TEMPLATE 1 START== -->
<div class="skeleton skeleton-heading width-35 height-5"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-85 height-2"></div>
<div class="spacer height-4"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-75 height-2"></div>
<div class="spacer height-2"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-50 height-2"></div>
<div class="spacer height-2"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-25 height-2"></div>
<div class="spacer height-8"></div>
<!-- ==TEMPLATE 1 END== -->
<!-- ==TEMPLATE 2 START== -->
<div class="skeleton skeleton-heading width-35 height-5"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-85 height-2"></div>
<div class="spacer height-4"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-75 height-2"></div>
<div class="spacer height-2"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-50 height-2"></div>
<div class="spacer height-2"></div>
<div class="skeleton skeleton-heading width-20 height-3"></div>
<div class="skeleton skeleton-paragraph width-100 height-2"></div>
<div class="skeleton skeleton-paragraph width-25 height-2"></div>
<!-- ==TEMPLATE 2 END== -->`;

function ajaxload(url) {
    $.ajax({
        url: url,
        beforeSend: function () {
            $(".docs-content").html(skeleton);
            $("body,html").animate({ scrollTop: 0 }, 500);
        },
        success: function (result, status) {
            setTimeout(function () {
                $(".docs-content").html(result);
                allFunctions();
            }, 2000);
        },
        error: function (status, error) {
            $(".docs-content").html("404 Page Not Found = " + url);
        },
    });
}

function pageajax() {
    var hash = window.location.href.split("#");
    var url = hash[1];

    url = typeof url === "undefined" || url === undefined ? "pages/get-started.jsp" : url;

    if (typeof url === "undefined") {
        $(".parent li a").each(function () {
            $('a[href="#pages/get-started.jsp"]').parent("li").addClass("active");
        });
    } else {
        $(".parent li a").each(function () {
            $(".parent li").removeClass("active");

            let target = $('a[href="' + "#" + url + '"]');

            target.parent("li").addClass("active");

            if (target.parents("ul").hasClass("subchild") || target.parents("ul").hasClass("innerchild")) {
                target.parents("ul").slideDown().parent("li").addClass("open");
            }

            if ($(window).width() < 992) {
                $(".sidebar").removeClass("active");
                $(".overlay-sidebar").removeClass("active");
            }
        });
    }

    ajaxload(url);
}

$(window).on("load", function () {
    pageajax();
});

$(window).on("popstate", function () {
    pageajax();
});

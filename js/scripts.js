$(function () {
    // AOS INIT
    AOS.init();

    setTimeout(() => {
        $(".loader").css("display", "none");
    }, 1500);

    // SLICK
    if ($(".artwork-slide").length) {
        $(".artwork-slide").slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            fade: true,
            cssEase: "linear",
        });
    }

    // MCUSTOMSCROLLBAR
    if ($(".result-body").length) {
        $(".result-body").mCustomScrollbar({
            axis: "y",
            theme: "minimal-dark",
        });
    }

    // HEADER
    let otherBtns = $(".header-btn").clone(true);

    $(".other-links").on("click", function () {
        $(this).toggleClass("active");
        $(".other-links-data").empty();
        $(otherBtns).appendTo($(".other-links-data"));
    });

    $(document).on("click", function (e) {
        var otherLinks = $(".other-links");
        if (!otherLinks.is(e.target) && otherLinks.has(e.target).length === 0) {
            otherLinks.removeClass("active");
        }
    });

    // SCROLL TO BUTTON
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll-to-btn").fadeIn();
        } else {
            $(".scroll-to-btn").fadeOut();
        }
    });

    $(".scroll-to-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //IMAGE-MODAL
    $(".image-modal").click(function (e) {
        if (e.target !== $(this)[0]) {
            $(this).hide();
        }
    });

    // AOS REFRESH
    AOS.refresh();
});

function ajaxFunctions() {
    //PAGE INTER SCROLL

    $(".nav-item:first-child").addClass("active");

    $(window).on("scroll", function () {
        let scrollPos = $(document).scrollTop() + 140;

        $(".nav-link").each(function () {
            let currLink = $(this);
            let refElm = $(currLink.attr("href"));
            let refElm_topPos = refElm.position().top;

            if (refElm_topPos <= scrollPos && refElm_topPos + refElm.height() > scrollPos) {
                $(".nav-item").removeClass("active");
                currLink.parent(".nav-item").addClass("active");
            }
        });

        let firstSectionTopPos = $($(".nav-link:first").attr("href")).position().top;

        if (scrollPos < firstSectionTopPos) {
            $(".nav-item").removeClass("active");
            $(".nav-item:first-child").addClass("active");
        }
    });

    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top - 140,
            },
            500
        );
    });

    //PRISM
    Prism.highlightAll();
}

//IMAGE MODAL
function openImageModal(event) {
    let largeImg = $(event).attr("large-src");
    $(".image-modal").css("display", "flex");
    $("#imgModal").attr("src", largeImg);
}
function closeImageModal() {
    $(".image-modal").hide();
    $("#imgModal").attr("src", "");
}

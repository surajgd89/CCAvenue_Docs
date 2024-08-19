$(document).ready(function () {
    //MODAL
    $('.clk-search-modal').on('click', function () {
        $('.search-modal').css('display', 'flex');
        searchModalPosition();
        $('body').addClass('search-opened');

        // let childs = $('.search-control').outerHeight() + $('.search-result').outerHeight(true) + $('.recent-search').outerHeight(true) + $('.data-head').outerHeight() + parseInt($('.search-data').css('marginTop'));

        // let parent = $('.search-modal-body').outerHeight();

        // console.log(parent);

        // $('.data-body').css({
        //     maxHeight:childs,
        //     minHeight: '215px',
        // });
    });

    $('.close-search-modal').on('click', function () {
        $(this).closest('.search-modal').css('display', 'none');
        $('body').removeClass('search-opened');
    });

    $(window).on('click', function (event) {
        if ($(event.target).hasClass('search-modal')) {
            $(event.target).css('display', 'none');
            $('body').removeClass('search-opened');
        }
    });
});

function searchModalPosition() {
    let offset = $('.clk-search-modal').offset();
    //  let minHeight = $('.search-modal').height() - offset.top;
    let padding = parseInt($('.search-modal-body').css('padding'));
    $('.search-modal-content').css({
        marginTop: offset.top - padding,
        marginLeft: offset.left - padding,
        // minHeight: minHeight,
    });
}

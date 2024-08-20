$(document).ready(function () {
    //MODAL
    $('.open-search-modal').on('click', function () {
        $('.search-modal').show();
        searchModalPosition();
        $('body').addClass('modal-open');
        calcFunc();
    });

    $('.close-search-modal').on('click', function () {
        $(this).closest('.search-modal').hide();
        $('body').removeClass('modal-open');
    });

    $(window).on('click', function (event) {
        if ($(event.target).hasClass('search-modal')) {
            $(event.target).hide();
            $('body').removeClass('modal-open');
        }
    });

    //TYPEHEAD
    var searchData = [
        'Payment Method Error Parameters',
        'Payment Settlement Control API',
        'Changelog for Payroll documentation and product updates',
        'Make Payroll Payouts as an Admin in CCAvenue Payroll',
        'Payment Button States',
        'Payment Button Use Cases',
        'Changelog for Payroll documentation and product updates 2',
        'Make Payroll Payouts as an Admin in CCAvenue Payroll 2',
        'Payment Button States2',
        'Payment Button Use Cases2',
        'Payment Button Use Cases3',
    ];

    searchData = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: searchData,
    });

    $('.search-control .typeahead').typeahead(
        {
            hint: false,
            highlight: true,
            minLength: 1,
        },
        {
            name: 'searchData',
            limit: 10,
            source: searchData,
        }
    );

    $('.search-control .clear').click(function () {
        $('.search-control .typeahead').typeahead('val', '');
    });

    $('.search-control .typeahead').on('keyup keydown', function (e) {
        calcFunc();
        let ttMenu_HT = $('.tt-menu').outerHeight(true);
        $('.search-result').css('marginTop', ttMenu_HT + 20);
        let resultBody_HT = parseInt($('.result-body').css('maxHeight'));
        $('.result-body').css('maxHeight', resultBody_HT - ttMenu_HT);
    });

    $('.search-control .typeahead').on('blur', function (e) {
        $('.search-result').css('marginTop', 20);
    });
});

function searchModalPosition() {
    let offset = $('.open-search-modal').offset();
    let padding = parseInt($('.search-modal-body').css('padding'));
    $('.search-modal-content').css({
        marginTop: offset.top - padding,
        marginLeft: offset.left - padding,
    });
}

function calcFunc() {
    let searchModalBody_HT = $('.search-modal-body').outerHeight();
    let searchModalBody_PD = parseInt($('.search-modal-body').css('padding')) * 2;
    let searchControl_HT = $('.search-control').outerHeight();
    let resultHead_HT = $('.result-head').outerHeight(true);
    let recentSearch_HT = $('.recent-search').outerHeight(true);
    let total = searchControl_HT + resultHead_HT + recentSearch_HT + searchModalBody_PD;
    let resultBody_HT = searchModalBody_HT - total;

    $('.result-body').css('maxHeight', resultBody_HT);
}

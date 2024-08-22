$(function () {
    //MODAL
    $('.open-search-modal').on('click', function (event) {
        searchModal_Pos();
        $('.search-modal').show();
        $('body').addClass('modal-open');
        $('.search-control .typeahead').focus();
        $('.search-result').hide();
        searchModal_Calc(event);
    });

    $('.close-search-modal').on('click', function () {
        $(this).closest('.search-modal').hide();
        $('body').removeClass('modal-open');
        $('.search-control .typeahead').typeahead('val', '');
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

    $('.search-control .clear').on('click', function (event) {
        searchModal_Calc(event);
        $('.search-control .typeahead').typeahead('val', '');
        $('.search-result').hide();
    });

    $('.search-control .typeahead').bind('typeahead:close', function (event, suggestion) {
        searchModal_Calc(event);
    });

    $('.search-control .typeahead').bind('typeahead:open', function (event, suggestion) {
        searchModal_Calc(event);
    });

    $('.search-control .typeahead').bind('typeahead:select', function (event, suggestion) {
        searchModal_Calc(event);
    });

    $('.search-control .typeahead').on('input', function (event) {
        searchModal_Calc(event);
    });
});

function searchModal_Pos() {
    if ($(window).width() > 768) {
        let search_Offset = $('.open-search-modal').offset();
        let searchModalBody_PD = parseInt($('.search-modal-body').css('padding'));
        $('.search-modal-content').css({
            marginTop: search_Offset.top - searchModalBody_PD,
            marginLeft: search_Offset.left - searchModalBody_PD,
        });
    }
}

function searchModal_Calc(event) {
    let searchModalContent_HT = $('.search-modal-content').outerHeight();
    let searchModalBody_PD = parseInt($('.search-modal-body').css('padding')) * 2;
    let searchControl_HT = $('.search-control').outerHeight();
    let closeAction_HT = $('.close-action').is(':visible') ? $('.close-action').outerHeight(true) : 0;
    let resultHead_HT = $('.result-head').outerHeight(true);
    let popularSearch_HT = $('.popular-search').outerHeight(true);

    let total = searchModalBody_PD + searchControl_HT + closeAction_HT + resultHead_HT + popularSearch_HT;

    let resultBody_HT = searchModalContent_HT - total;

    // console.log(searchModalContent_HT);
    // 700
    // console.log(searchModalBody_PD);
    // 54
    // console.log(closeAction_HT);
    // 48
    // console.log(searchControl_HT);
    // 35 || 0
    // console.log(resultHead_HT);
    // 46.0938
    // console.log(popularSearch_HT);
    // 69.0312

    $('.result-body').css('height', resultBody_HT);

    if (event.type === 'click' || event.type === 'typeahead:select') {
        $('.search-result').css('marginTop', 0);
    }

    if (event.type === 'typeahead:close') {
        $('.search-result').css('marginTop', 0);
    }

    if (event.type === 'input' || event.type === 'typeahead:open') {
        let ttMenu_HT = $('.tt-menu').outerHeight(true);
        console.log(ttMenu_HT);
        $('.search-result').css('marginTop', ttMenu_HT);
        let resultBody_HT = parseInt($('.result-body').css('height'));
        let height = resultBody_HT - ttMenu_HT;
        $('.result-body').css('height', height);

        if ($('.search-control .typeahead').typeahead('val').length) {
            $('.search-result').show();
        } else {
            $('.search-result').hide();
        }
    }
}

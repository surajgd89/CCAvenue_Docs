$(document).ready(function () {
    //MODAL
    $('.open-search-modal').on('click', function () {
        $('.search-modal').show();

        searchModal_Position();

        $('body').addClass('modal-open');
        searchModal_Calculation();
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

    //SLICK
    $('.artwork-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
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

    $('.search-control .clear').on('click', function () {
        $('.search-control .typeahead').typeahead('val', '');
        $('.search-result').css('marginTop', 0);
        searchModal_Calculation();
    });

    $('.search-control .typeahead').on('keyup keydown', function (e) {
        searchModal_Calculation();
        let ttMenu_HT = $('.tt-menu').outerHeight(true);
        $('.search-result').css('marginTop', ttMenu_HT);

        let resultBody_HT = parseInt($('.result-body').css('maxHeight'));
        let height = resultBody_HT - ttMenu_HT;
        $('.result-body').css('maxHeight', height);
    });
    
});

function searchModal_Position() {
    if ($(window).width() > 768) {
        let search_Offset = $('.open-search-modal').offset();
        let searchModalBody_PD = parseInt($('.search-modal-body').css('padding'));
        $('.search-modal-content').css({
            marginTop: search_Offset.top - searchModalBody_PD,
            marginLeft: search_Offset.left - searchModalBody_PD,
        });
    }
}

function searchModal_Calculation() {
    let searchModalContent_HT = $('.search-modal-content').outerHeight(); //700
    let searchModalBody_PD = parseInt($('.search-modal-body').css('padding')) * 2; //54
    let searchControl_HT = $('.search-control').outerHeight(); //48
    let resultHead_HT = $('.result-head').outerHeight(true); //46.0938
    let recentSearch_HT = $('.recent-search').outerHeight(true); //69.0312

    let total = searchModalBody_PD + searchControl_HT + resultHead_HT + recentSearch_HT;

    let resultBody_HT = searchModalContent_HT - total;

    console.log(searchModalContent_HT);
    console.log(searchModalBody_PD);
    console.log(searchControl_HT);
    console.log(resultHead_HT);
    console.log(recentSearch_HT);

    $('.result-body').css('maxHeight', resultBody_HT);
}

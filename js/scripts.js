$(document).ready(function () {
    //MODAL
    $('.open-modal').on('click', function () {
        var modalId = $(this).data('modal');
        $(modalId).show();
        $('body').addClass('modal-open');
    });

    $('.close, .close-modal').on('click', function () {
        $(this).closest('.modal').hide();
        $('body').removeClass('modal-open');
    });

    $(window).on('click', function (event) {
        if ($(event.target).hasClass('modal')) {
            $(event.target).hide();
            $('body').removeClass('modal-open');
        }
    });
});

$(function () {

    $('#search-form-btn').on('click', function (e) {
        e.preventDefault();
        let form = $(this).parent();
        let inputSearch = form.find('.form-control');
        inputSearch.toggleClass('show').focus();
        if (inputSearch.val()) {
            form.submit();
        }
    });

    // $('.counter-num').spincrement();

    let counterBox = $('.achievments');
    let counterItem = $('.counter-num');
    let showCounter = true;

    $(window).on('scroll load resize', function () {
        let counterBoxTop = counterBox.offset().top;
        let windowHeight = window.innerHeight;
        let windowTop = $(window).scrollTop();

        if (showCounter && (counterBoxTop + 200 < windowTop + windowHeight)) {
            showCounter = false;
            counterItem.css('opacity', 1);
            counterItem.spincrement({
                duration: 2000
            });
            // console.log(counterBoxTop, windowHeight, windowTop);
        }
    });

});
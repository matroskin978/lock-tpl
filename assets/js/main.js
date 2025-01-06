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

    const mainOlwProducts = $('.owl-carousel').owlCarousel({
        // loop: true,
        stagePadding: 30,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    const mainOlwProductsNextBtn = $('.next-btn');
    const mainOlwProductsPrevBtn = $('.prev-btn');

    mainOlwProductsNextBtn.click(function () {
        mainOlwProducts.trigger("next.owl.carousel");
    });
    mainOlwProductsPrevBtn.click(function () {
        mainOlwProducts.trigger("prev.owl.carousel");
    });

    mainOlwProductsPrevBtn.addClass("disabled");
    mainOlwProducts.on("translated.owl.carousel", function (event) {
        if ($(".main-our-products .owl-prev").hasClass("disabled")) {
            mainOlwProductsPrevBtn.addClass("disabled");
        } else {
            mainOlwProductsPrevBtn.removeClass("disabled");
        }
        if ($(".main-our-products .owl-next").hasClass("disabled")) {
            mainOlwProductsNextBtn.addClass("disabled");
        } else {
            mainOlwProductsNextBtn.removeClass("disabled");
        }
    });

});
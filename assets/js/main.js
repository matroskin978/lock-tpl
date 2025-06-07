$(function () {

    var swiperThumbs = new Swiper(".swiper-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true
    });

    var swiperGallery = new Swiper(".swiper-gallery", {
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperThumbs,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });


    let sliderRange = $('#slider-range');
    if (sliderRange.length) {
        let minPriceInput = $('#min-price');
        let maxPriceInput = $('#max-price');
        $("#slider-range").slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                minPriceInput.val(ui.values[0]);
                maxPriceInput.val(ui.values[1]);
            }
        });

        $('#min-price, #max-price').on('input', function () {
            let minPriceRange = +minPriceInput.val();
            let maxPriceRange = +maxPriceInput.val();
            if (minPriceRange > maxPriceRange) {
                minPriceRange = maxPriceRange;
                minPriceInput.val(minPriceRange);
            }
            sliderRange.slider({
                values: [minPriceRange, maxPriceRange]
            });
        });
    }

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
    if (counterBox.length) {
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
    }


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

    $(".phone-mask").mask("+3(999) 999-9999");

    const topBtn = $('#top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

// Пример использования:
// setCookie('user', 'John', { 'max-age': 10 });
// console.log(getCookie('user'));
const offcanvasCookie = new bootstrap.Offcanvas('#offcanvasCookie');

if (!getCookie('allowCookie')) {
    setTimeout(() => {
        offcanvasCookie.show();
    }, 3000);
}

document.querySelector('#allow-cookie').addEventListener('click', (e) => {
    e.preventDefault();
    setCookie('allowCookie', 1, { 'max-age': 3600 * 24 * 365 });
    offcanvasCookie.hide();
});

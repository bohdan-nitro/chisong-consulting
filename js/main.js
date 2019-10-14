$(document).ready(function () {

    //  Page sliders
    var mainPageSectionSliderSelector = '.slider.main-page .section-slider-container';

    var mainPageSectionSlider = new Swiper(mainPageSectionSliderSelector, {
        direction: 'horizontal',
        speed: 400,
        spaceBetween: 100,
        navigation: {
            nextEl: '.slider.main-page .section-slider-container .nav-btn.next',
            prevEl: '.slider.main-page .section-slider-container .nav-btn.prev',
        },
        pagination: {
            el: '.slider.main-page .section-slider-container .section-slider-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {

                if (current <= 9) {
                    current = '0' + current;
                } else {
                    current = current;
                }

                if (total <= 9) {
                    total = '0' + total;
                } else {
                    total = total;
                }

                return '<div class="number from">' + current + '</div>' +
                    '<div class="number separator">/</div>' +
                    '<div class="number to">' + total + '</div>';
            }
        }
    });

});
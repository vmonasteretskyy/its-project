$(document).ready(function () {
    // home page - sliders
    var swiper = new Swiper(".welcomeSlider", {
        slidesPerView: 1,
        direction: "vertical",
        speed: 700,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "custom",
            renderCustom: function (swiper, current, total) {

                if (total < 10) {
                    return "<span class='current-point'>" + ('0' + current).slice(-2) + "</span>" + "<span class='total-point'>" + ('0' + total).slice(-2) + "</span>";
                } else {
                    return "<span class='current-point'>" + ('' + current).slice(-2) + "</span>" + "<span class='total-point'>" + ('' + total).slice(-2) + "</span>";
                }
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            320: {
                direction: "horizontal",
            },
            576: {
                direction: "vertical",
            },
        },
    });

    // slider navs
    let container = document.querySelector('.container');
    let sliderElBox = document.querySelector('.slider-elements');
    let windowWidth = window.innerWidth;
    let containerWidth = container.offsetWidth;
    let paddingSide = (windowWidth - containerWidth) / 2;

    sliderElBox.style.right = paddingSide + 'px';

    $(window).resize(function () {
        let container = document.querySelector('.container');
        let sliderElBox = document.querySelector('.slider-elements');
        let windowWidth = window.innerWidth;
        let containerWidth = container.offsetWidth;
        let paddingSide = (windowWidth - containerWidth) / 2;

        sliderElBox.style.right = paddingSide + 'px';
    });


    // header submenu
    const submenuLink = document.querySelector('.submenu a');
    const parentEl = submenuLink.parentElement;

    submenuLink.addEventListener('click', function (e) {
        e.preventDefault();
        parentEl.classList.toggle('show');
    });

    document.addEventListener('click', menu);

    function menu(event) {
        if (!event.target.closest('.submenu')) {
            parentEl.classList.remove('show');
        }
    }

    // diplomas slider
    var swiper2 = new Swiper(".diplomas-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-unique.f',
            prevEl: '.swiper-button-prev-unique.f'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

    var swiper2 = new Swiper(".diplomas-slider2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-unique.s',
            prevEl: '.swiper-button-prev-unique.s'
        },
    });

    // slider courses
    var swiper3 = new Swiper(".coursesslider", {
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            576: {
                slidesPerView: "2",
            },
            992: {
                slidesPerView: "3",
            },
        },
    });

    // testimonials slider

    var swiper4 = new Swiper(".testimonials-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 700,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-unique.t',
            prevEl: '.swiper-button-prev-unique.t'
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // UNMATCHED EXPERIENCE
    var swiper5 = new Swiper(".twopicslider", {
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 25,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "custom",
            renderCustom: function (swiper, current, total) {

                if (total < 10) {
                    return "<span class='current-pointtp'>" + ('0' + current).slice(-2) + "</span>" + "-" + "<span class='total-pointtp'>" + ('0' + total).slice(-2) + "</span>";
                } else {
                    return "<span class='current-pointtp'>" + ('' + current).slice(-2) + "</span>" + "-" + "<span class='total-pointtp'>" + ('' + total).slice(-2) + "</span>";
                }
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // UNMATCHED EXPERIENCE MOBILE
    var swiper6 = new Swiper(".expslider", {

        speed: 700,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "custom",
            renderCustom: function (swiper, current, total) {

                if (total < 10) {
                    return "<span class='current-pointtp'>" + ('0' + current).slice(-2) + "</span>" + "-" + "<span class='total-pointtp'>" + ('0' + total).slice(-2) + "</span>";
                } else {
                    return "<span class='current-pointtp'>" + ('' + current).slice(-2) + "</span>" + "-" + "<span class='total-pointtp'>" + ('' + total).slice(-2) + "</span>";
                }
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });


    // window scroll
    let scrollY = window.scrollY;
    const header = document.querySelector('header.header');

    window.onscroll = function (e) {
        if ((window.scrollY) > 100) {
            header.classList.add('scroled');
        } else {
            header.classList.remove('scroled');
        }
    }


    // menu
    const menuBtn = $('.burgerbtn');
    const menuContent = $('.header__content');

    $(menuBtn).click(function () {
        $(this).find('img').toggleClass('hide');

        $(menuContent).toggleClass('show');

    });

    // see all benefits

    $('.seeallbenefits').click(function () {
        $(this).find('span').toggle();
        $('.benefits .col-md-4.col-sm-6:nth-last-child(-n+3)').toggle();
    });

    $('.infotextblock_smore').click(function () {
        $(this).find('span').toggle();
        $('.infotextblock p:not(:first-child)').toggle();
    });

    $('.infotextblock_smore2').click(function () {
        $(this).find('span').toggle();
        $('.infosect__left .description p:not(:first-child)').toggle();
    });


    // custom select
    // $(".custom-select").select2({
    //     placeholder: "Please select",
    //     minimumResultsForSearch: Infinity
    // });















});
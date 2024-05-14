// hero-section //

$(".slider-1").owlCarousel({
    slideBy: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    loop: true,
    padding: false,
    nav: true,
    dot: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1,
        },
        991: {
            items: 1,
        },
    },
});

//  top button  //

$(document).ready(function () {
    $('.top').hide(0)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(300);
        }
    });
    $('.top').click(function () {
        event.preventDefault();

        $('html , body').animate({ scrollTop: 0 }, 500);
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// sticky menu bar //

function menuSticky() {
    if ($(".is-sticky-on").length > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('.is-sticky-on').addClass('is-sticky-menu');
            }
            else {
                $('.is-sticky-on').removeClass('is-sticky-menu');
            }
        });
    }
}
menuSticky()


// AOS.init();


// counter //

$(document).ready(function () {
    $('.counter-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});



// JavaScript
function playVideo() {
    // JavaScript
    class VideoModalManager {
        constructor() {
            this.init();
        }
        init() {
            $('.video-btn').click(function () {
                const $videoSrc = $(this).data("src");
                $('.modal').data("videoSrc", $videoSrc);
            });
            $('.modal').on('shown.bs.modal', function (e) {
                const $videoSrc = $(this).data("videoSrc");
                console.log("Video Source in modal:", $videoSrc); // Debugging
                $(this).find("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
            });
            $('.modal').on('hide.bs.modal', function (e) {
                $(this).find("#video").attr('src', '');
            });
        }
    }
    // Initialize the VideoModalManager
    const videoModalManager = new VideoModalManager();
}

playVideo()


// testimonial //

$(".slider-2").owlCarousel({
    slideBy: 1,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplaySpeed: 3000,
    smartSpeed: 3000,
    loop: true,
    padding: false,
    nav: true,
    dot: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        991: {
            items: 3,
        },
    },
});



let today = new Date().toISOString().substr(0, 10);
document.getElementById("dateInput1").value = today;


let todays = new Date().toISOString().substr(0, 10);
document.getElementById("dateInput2").value = today;

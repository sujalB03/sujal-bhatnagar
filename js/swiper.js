var $swiper = $("#swiper");
var $swiperThumb = $('#swiper-thumb');

var projectContainer = document.querySelector('.project-container');
var initialPosition = projectContainer.getBoundingClientRect().top;

function switchCSS(windowsize) {
    if (windowsize > 450) {

        // write you css here for screen size is more then 450

        $swiper.css({
            'margin-left': '12%',
            'margin-right': '12%'
        });

        $swiperThumb.css({
            'margin-left': '12%',
            'margin-right': '12%'
        });
        // Project Name Container fixed to top when scrolling down 
        window.addEventListener('scroll', function () {
            var bounding = projectContainer.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > initialPosition) {
                // Scrolling down past the initial position
                projectContainer.classList.add('sticky');
            } else {
                // Scrolling back up to or above the initial position
                projectContainer.classList.remove('sticky');
            }
        });

    } else {

        // write you css here for screen size is less then 450

        $swiper.css({
            'margin-left': '4%',
            'margin-right': '4%'
        });

        $swiperThumb.css({
            'margin-left': '4%',
            'margin-right': '4%'
        });

    }
}
$(document).ready(function () {
    switchCSS($(this).width());

    $(window).resize(function () {
        switchCSS($(this).width());
    });
});
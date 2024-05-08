//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
spaceBetween: 30,
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
},
slideToClickedSlide: true,
loop: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
     type: "fraction",
    formatFractionCurrent: function (number) {
        return ('0' + number);
      },
      formatFractionTotal: function (number) {
        return ('0' + number);
      },

},
navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
keyboard:{
    enabled: true,
    onlyInViewport: true,
},

});
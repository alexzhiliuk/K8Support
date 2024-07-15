import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

const articlesSlider = new Swiper('#articlesSlider', {
    slidesPerView: 1.15,
    spaceBetween: 10,
    speed: 500,
    freeMode: true,

    pagination: {
        el: "#articlesSliderPagination",
        clickable: true,
    },

    breakpoints: {
        1200: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2.1,
        },
        480: {
            slidesPerView: 1.6,
        },
    }
    
});



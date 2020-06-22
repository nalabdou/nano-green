if (document.querySelector('.testimonials-slider')) {
    const slider = tns({
        container: '.testimonials-slider',
        loop: true,
        items: 3,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
        slideBy: 'page',
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        gutter: 15,
        navPosition: 'bottom',
        mouseDrag: true,
        controls: false,
        speed: 800,
    })
}
if (document.querySelector('.features-carousel')) {
    const carousel = tns({
        container: '.features-carousel',
        loop: true,
        items: 3,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            992: {
                items: 1,
            },
        },
        slideBy: 'page',
        nav: false,
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        gutter: 15,
        mouseDrag: true,
        controls: false,
        speed: 800,
    })
}

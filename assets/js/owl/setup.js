$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 10
        }
    }
})
// Main
console.log('FullStack Vietnam!')
$('.owl-carousel').owlCarousel({
    loop: true,
    // nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
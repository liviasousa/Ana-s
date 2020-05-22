$(function() {
    $(".watch-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        prewArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next")

    });
})

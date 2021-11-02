function setMarquee() {
    var tournamentMarquee = $(".tournament-games").marquee({
        duration: 15000,
        gap: 0,
        delayBeforeStart: 0,
        direction: "up",
        duplicated: true
    });
    $(".tournament-games").on({
        mouseenter: function () {
            tournamentMarquee.marquee("pause");
        },
        mouseleave: function () {
            tournamentMarquee.marquee("resume");
        },
        mousewheel: function ( e, delta ){
            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        }
    });
}

$(function () {
    if ($(".popup-tournament").length) {
        $(".tournament-img-container").fancybox({
            autoSize: true,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0
        });
        $(".tournament-img-box .main-play-btn").fancybox({
            autoSize: true,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0
        });
    }
    if ($(".tournament-game .small-game-list").length) {
        var slider = $(".small-game-list").bxSlider({
            slideMargin: 11.3,
            slideWidth: 187,
            pager: false,
            minSlides: 5,
            maxSlides: 5,
            infiniteLoop: true,
            moveSlides: 1
        });
        var current = slider.getCurrentSlide();
        console.log(current);
        current.classList.add("active");
    };
    if ($(".tournament-games").length) {
        setMarquee();
    }
});




$(document).on("click", ".social-list>li", function (e) {
    $(".social-list>li").find("a").removeClass("select");
    $(this).find("a").addClass("select");
    e.preventDefault();
});

$(function() {
    if ($(".popup-game-list").length) {
        $(".popup-game-list").bxSlider({
            slideWidth: 210,
            slideMargin: 13,
            pager: false,
            minSlides: 4,
            maxSlides: 4,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
    if ($(".popup.out-of-game .small-game-list").length) {
        $(".popup.out-of-game .small-game-list").bxSlider({
            slideWidth: 210,
            slideMargin: 13,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
    if ($(".green-light").length) {
        $(".green-light").marquee({
            duration: 5000,
            gap: 50,
            delayBeforeStart: 0,
            direction: "right",
            pauseOnHover: true,
            duplicated: true
        });
    }
});
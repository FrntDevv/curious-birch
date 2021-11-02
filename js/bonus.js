function centerLastBonus() {
    if ($(".bonus-cards").length) {
        var bonusCount = $(".bonus-cards>li").length;
        if ((bonusCount % 2)==1) {
            $(".bonus-cards>li:last-child").addClass("center-item");
        }
    }
}

$(function() {
   centerLastBonus();
    if ($(".marquee").length) {
        $(".marquee").marquee({
            duration: 5000,
            gap: 0,
            delayBeforeStart: 0,
            direction: "right",
            pauseOnHover: true,
            duplicated: true
        });
    }
});
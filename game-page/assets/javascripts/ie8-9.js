/**
 * Created by andre_000 on 19/06/2015.
 */
$(document).ready(function() {
    $(".text-shadow").ieTextShadow();
    setInterval(function () {
        $(".shadow-charge").fadeIn(1750).delay(500).fadeOut(1750);
    }, 4000);
    setInterval(function () {
        $(".min-charge").fadeIn(1750).delay(500).fadeOut(1750);
    }, 4000);
});
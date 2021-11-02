// Close track pop-up
$(document).on("click", ".track-in-game .close-icon", function (e) {
    $(".track-in-game").hide();
    e.preventDefault();
});

$(document).on("click", ".popup-call", function (e) {
    $(".popup-charge").fadeIn(500);
});

$(document).on("click", ".popup-charge .close-icon", function (e) {
    $(".popup-charge").fadeOut(500);
    e.preventDefault();
});

function slimScrollInitialise() {
    var $box = $(".rating");
    var $outerContainer = $(".right-column");
    var newBoxHeight = $outerContainer.height() - $box.position().top - 20;
    $box.css("height", newBoxHeight + "px");
       $box.mCustomScrollbar({
            scrollbarPosition: "inside",
            theme: "minimal",
            advanced:{
                updateOnContentResize: true
            }
        });
}
$(function() {
        if ($(".rating").length) {
            slimScrollInitialise();
        }
});

$(function() {
        $(window).resize(function () {
            if ($(".rating").length) {
                slimScrollInitialise();
            }
        });
});
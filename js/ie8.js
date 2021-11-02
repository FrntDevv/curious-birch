/**
 * Created by andre_000 on 03/07/2015.
 */
function setFullDisplaySizes(setClass) {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    setClass.css({
       width: windowWidth,
       height: windowHeight
    });
}

$(function() {
    if ($(".stand-block").length) {
        $(".first-grad").pxgradient({ //
            step: 10,
            colors: ["#ffe89c", "#ffd47a", "#febd52"],
            dir: "y"
        });
        $(".second-grad").pxgradient({ //
            step: 10,
            colors: ["#f5f5f5", "e2e2e3", "d1d2d4"],
            dir: "y"
        });
        $(".third-grad").pxgradient({ //
            step: 10,
            colors: ["#e6ad97", "#ca8e76", "#ad6f55"],
            dir: "y"
        });
    }
    /* For landing */
    if ($("svg").length) {
        $("svg").remove();
    }
    /* For landing end*/
    if ($(".popup-background-image").length) {
           var $popupBg = $(".popup-background-image");
           setFullDisplaySizes($popupBg);
    }
    if ($(".redirect").length) {
        setFullDisplaySizes(".redirect");
        setFullDisplaySizes(".redirect .section-content-container");
    }
});
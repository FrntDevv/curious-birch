/* Main menu initialise */


    $(document).on("click", ".game-category-list>li", function (e) {
        $(".game-category-list>li").removeClass("select").find("a.cat-name").removeClass("select");
        $(this).addClass("select").find("a.cat-name").addClass("select");
        e.preventDefault();
    });

/* Main menu initialise end */

$(function () {
    if ($(":input[placeholder]").length) {
        $(":input[placeholder]").placeholder();
    }
});

// Close track pop-up
$(document).on("click", ".track-popup .close-icon", function (e) {
    $(".track-popup").hide();
    e.preventDefault();
});

function closePopups() {
    var counter = 0;
    var popupItems = $(".popup-list>li").length;

    $(document).on("click", ".popup-list>li .close-icon", function (e) {
        $(this).parent("li").hide();
        if ($(this).parent("li").is(":hidden")) {
            counter += 1;
        }
        if (counter === popupItems) {
            $(".popup-section").hide();
        }
    });
}

// Close right-side pop-up and animate arrow
$(function () {
    if ($(".popup-list").length) {
       closePopups();
    }
});
        $(function () {
            if ($(".popup-list").length) {
        $(".anim-arrow").animate({"top": "+=20px"}, 1000, "linear");
    }
});

// FancySelect initialise

$(function () {
    if ($(".language").length) {
        $(".language").fancySelect({
            optionTemplate: function (optionEl) {
                return '<div class="icon-' + optionEl.data('icon') + '"></div>';
            },
            triggerTemplate: function (optionEl) {
                return '<div class="icon-' + optionEl.data('icon') + '"></div>';
            }
        });
    }
});

// CarouFredsel initialise

$(function () {
    if ($(".slider").length) {
        $(".slider").carouFredSel({
            responsive: true,
            items: {
                visible: 1,
                width: 1679
            },
            scroll: {
                fx: "crossfade",
                duration: 1000,
                timeoutDuration: 3000
            },
            auto: {
                delay: 3000
            },
            align: "center",
            pagination: ".pagination"
        });
        $(".slider").hover(
            function () {
                $(".slider").trigger("stop");
            },
            function () {
                $(".slider").trigger("play", true);
            }
        );
    }
});



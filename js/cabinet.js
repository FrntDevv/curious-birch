// Tabs
function openCabinetSection() {
    var defaultPanel = $(".tab.active").attr("href");
    $(".cabinet-section").removeClass("active");
    $(defaultPanel).addClass("active");
    $(document).on("click", ".tab", function (e) {
        $(".tab").removeClass("active");
        $(".cabinet-section").removeClass("active");
        $(this).addClass("active");
        var panel = $(this).attr("href");
        $(panel).addClass("active");
        e.preventDefault();
    }); 
}
function openForms() {
    $(document).on("click", ".confirm-mail", function (e) {
        $(".send-mail").addClass("active");
        e.preventDefault();
    });

    $(document).on("click", ".set-phone", function (e) {
        $(".enter-phone").addClass("active");
        $(".account-status").hide();
        $(".profile-info-lines").css("margin-top","99px");
        e.preventDefault();
    });

    $(document).on("click", ".profile-info-line .info-btn", function (e) {
        $(this).siblings(".hidden-block").toggleClass("active");
        e.preventDefault();
    });

    $(document).on("click", ".change-password", function (e) {
        $(this).siblings(".change-password-form").toggleClass("active");
        $(".account-info-container").css("margin-top","156px");
        e.preventDefault();
    });

    $(document).on("click", ".edit-btn", function (e) {
        $(this).siblings(".user-information").toggleClass("active");
        $(".exchange-block").css("margin-top","116px");
        e.preventDefault();
    });
}

$(function() {
    openForms();
    if ($(".birth-date").length) {
        $(".birth-date").fancySelect();
        $(".birth-date").parent(".fancy-select").addClass("birth-date");
        if ($("#birth-date-day").length) {
            $("#birth-date-day").parent(".fancy-select").addClass("birth-date-day");
        }
        if ($("#birth-date-month").length) {
            $("#birth-date-month").parent(".fancy-select").addClass("birth-date-month");
        }
        if ($("#birth-date-year").length) {
            $("#birth-date-year").parent(".fancy-select").addClass("birth-date-year");
        }

        $(".fancy-select").on("click", function() {
            if ($("ul.options").hasClass("open")) {
                $("ul.options").removeClass("open");
            }
            $(this).find("ul.options").addClass("open");
        });
    }
    openCabinetSection();
    if ($(".bonus-game-list").length) {
        $(".bonus-game-list").bxSlider({
            slideWidth: 178,
            slideMargin: 11,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: true,
            moveSlides: 1
        });
        $(".play-hidden-block").hide();
        $(document).on("click", ".play", function (e) {
            $(this).parents(".cabinet-bonus")
                .addClass("hidden-block-active")
                .find(".play-hidden-block").slideDown(300);
            e.preventDefault();
        });
    };
});

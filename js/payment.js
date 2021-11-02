function addActiveToPayment() {
    $(document).on("click",".payment-systems>li",function(e) {
        e.preventDefault();
        $(".payment-systems>li").removeClass("active");
        $(this).addClass("active");
    });
}

function openPaymentInfo() {
    $("a.background-logo").click(function (evt) {
        evt.preventDefault();
        $(".payment-info").hide();
        $this = $(this);
        var panel = $this.attr("href");
        $(panel).show();
    });
}

$(function() {
    if ($(".payment-systems").length) {
        addActiveToPayment();
    }
    if ($(".payment-info").length) {
        $(".payment-info").hide();
        openPaymentInfo();
    }
});

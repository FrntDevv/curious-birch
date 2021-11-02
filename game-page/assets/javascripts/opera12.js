function testUserAgent() {
    if (window.opera && opera.toString() == "[object Opera]")
    {
        var windowHeight = $(window).height();
            $("body").css({
                minHeight: windowHeight
            });
    }
}

$(function() {
    testUserAgent();
});
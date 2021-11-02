function testUserAgent() {
    if (window.opera && opera.toString() == "[object Opera]")
    {

        $(".tournament-img").each(function(){
            var image = $(this).attr("src");
            image = image.replace("../",".././");
            $(this).css("visibility","hidden")
                .parent(".tournament-img-container")
                .css({"background-image": "url("+image+")"});
        });
    }
}

$(function() {
    testUserAgent();
});
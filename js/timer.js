setTimeout(
   function() { var interval = setInterval(function () {
        var timer = $(".landing-block .counter").html();
        timer = timer.split(':');
        var minutes = parseInt($(timer[0]).text(), 10);
        var seconds = parseInt($(timer[1]).text(), 10);
        seconds -= 1;
        if (minutes < 0) return clearInterval(interval);
        //if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
       if (minutes < 10) {
           $(".landing-block .counter").html("<div class=minutes>" + '0' + minutes + "</div>" + ":" + "<div class=seconds>" + seconds + "</div>");
       } else {
           $(".landing-block .counter").html("<div class=minutes>" + minutes + "</div>" + ":" + "<div class=seconds>" + seconds + "</div>");
       }
        if (minutes == 0 && seconds == 0)
            clearInterval(interval);
    }, 1000)
   },10000);

var show = setTimeout(function() {
    $(".landing-block").css("bottom",0);
    $(".landing-block .present-block").css("display","block");
},5000);

$('.countdown').downCount({
    date: '09/10/2015 12:00:00'
    // month/day
});

$(function() {
    $(document).on('click', '.round-page', function(e) {
        var $page, $roundsList, $target;
        e.preventDefault();
        $target = $(e.currentTarget);
        if ($target.hasClass('slide-select')) {
            return;
        }
        $roundsList = $target.parents('.table-info');
        $roundsList.find('ul.slide li').removeClass('slide-select').addClass('slide-blank');
        $target.removeClass('slide-blank').addClass('slide-select');
        $roundsList.find('li.rounds-row').hide();
        $page = "li.rounds-row#rounds-page-" + ($target.data().roundPage);
        return $roundsList.find('ul.win-table').find($page).show();
    });

});
$(function() {
    $('.scroll').click(function() {
        var anchor = $(this).attr("href");
        jQuery("html,body").stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        return false;
    });

    $('.scroll').click(function () {
        $('.scroll').removeClass()
    })
});
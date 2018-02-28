$(document).ready(function() {
    $('.nav-toggle').click(function () {
        $('.mobile-nav').toggleClass('-open');
    })
    $('.nav-menu a').click(function () {
        $('.mobile-nav').removeClass('-open');
        $('.mobile-nav').addClass('-close');
        $('.mobile-nav').removeClass('-close');
    })
});
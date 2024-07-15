$(".header__burger").click(function() {
    $(this).toggleClass("header__burger_active")
    $(".mobile-menu").toggleClass("mobile-menu_active")
    $("body, html").toggleClass("lock")
})

$(window).scroll(function(event){

    var st = $(this).scrollTop();
    if (st > 100){
        $(".header").addClass("header_scrolled")
    } else {
        $(".header").removeClass("header_scrolled")
    }

});
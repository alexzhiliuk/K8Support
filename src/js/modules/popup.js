$("[data-open-popup]").click(function(){
    let popupId = $(this).attr("data-open-popup")

    $(`[data-popup-id=${popupId}]`).show()
    $("body, html").addClass("lock")
})

$(".popup__close").click(function(){
    $(this).parents(`[data-popup-id]`).hide()
    $("body, html").removeClass("lock")
})


// Закрытие при нажатии вне области
$(window).click(function() {
    $("[data-popup-id]").hide()
    $("body, html").removeClass("lock")
});
  
$('.popup__inner, [data-open-popup]').click(function(event){
    event.stopPropagation();
});

// Закрытие при нажатии на Esc
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $("[data-popup-id]").hide()
        $("body, html").removeClass("lock")
    }
});
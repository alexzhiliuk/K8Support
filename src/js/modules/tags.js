let $moreBtn = $(`<a href="javascript:void(0)" class="tag tag_outline js-tags-more" data-action="show"><span>View more categories</span></a>`)
$(".tags .tag").each(function(i, el) {
    if (i > 9) {
        $(el).addClass("js-tag-hidden").hide()
    }
})
$(".tags").append($moreBtn)

$(".js-tags-more").click(function() {
    if ($(this).attr("data-action") == "show") {
        $(".js-tag-hidden").show()

        $(this).attr("data-action", "hide")
        $(this).html("Hide")
    } else {
        $(".js-tag-hidden").hide()

        $(this).attr("data-action", "show")
        $(this).html("View more categories")
    }
})
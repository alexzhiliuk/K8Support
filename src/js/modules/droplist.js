$(".articles-filter").click(function(e) {
    
    if ($(e.target).is("select")) {
        $(this).toggleClass("articles-filter_active")
    }
})

$(".droplist span").click(function() {
    let selectedHtml = $(this).html(),
        selectedValue = $(this).attr("data-value"),
        selectId = $(this).parents(".droplist").attr("data-select-id")

    $(`#${selectId}`).val(selectedValue)
    $(`[data-select-display=${selectId}]`).html(selectedHtml)
})
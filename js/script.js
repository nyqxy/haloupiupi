
$(window).scroll(function () {
    $(".kihon_area").each(function () {
        var hit = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();

        if (scroll > hit - wHeight + wHeight / 100) {
            $(".menu_item").addClass("menu_hover");
        }
    });
});

$(window).scroll(function () {
    var top = $(".kihon_area").offset().top;
    var position = top - $(window).height();
    if ($(window).scrollTop() > position) {
        $(".menu_item").addClass('menu_hover');    } 
    else {
    }
});
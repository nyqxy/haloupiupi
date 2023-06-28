
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
    let navLink = document.getElementsByClassName('menu_item');
    if ($(window).scrollTop() > position) {
        console.log("aa");
        $(".menu_item").addClass('menu_hover');
        // $(".menu_item").each(function(){
        //     if($(this).offset().top > $(window).scrollTop()) {
        //         $(this).addClass('menu_hover');
        //     }
        // })
    }
    else {
    }
});




let navLink = document.getElementsByClassName('menu_item');
for (let i = 0; i < navLink.length; i++) {
    if (navLink[i].href === location.href) {
        navLink[i].classList.add('menu_hover');
    }
}
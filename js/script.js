
// $(window).scroll(function () {
//     $(".kihon_area").each(function () {
//         var hit = $(this).offset().top;
//         var scroll = $(window).scrollTop();
//         var wHeight = $(window).height();

//         if (scroll > hit - wHeight + wHeight / 100) {
//             $(".menu_item").addClass("menu_hover");
//         }
//     });
// });

// $(window).scroll(function () {
//     var top = $(".kihon_area").offset().top;
//     var position = top - $(window).height();
//     if ($(window).scrollTop() > position) {
//         $(".kihon").addClass('menu_hover');
//     }
//     else {
//         $(".kihon").removeClass("menu_hover");
//     }
// });


$(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(".kihon_area").offset().top;
    var elementBottom = elementTop + $(".kihon_area").height();

    if (elementTop <= windowTop && elementBottom >= windowTop) {
        $(".kihon").addClass('menu_hover'); 
    } else {
        $(".kihon").removeClass("menu_hover"); 
    }
});

$(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(".nachu_area").offset().top-200;
    var elementBottom = elementTop + $(".nachu_area").height();

    if (elementTop <= windowTop && elementBottom >= windowTop) {
        $(".nachu").addClass('menu_hover'); 
    } else {
        $(".nachu").removeClass("menu_hover"); 
    }
});


$(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(".hade_area").offset().top-300;
    var elementBottom = elementTop + $(".hade_area").height();

    if (elementTop <= windowTop && elementBottom >= windowTop) {
        $(".hade").addClass('menu_hover'); 
    } else {
        $(".hade").removeClass("menu_hover"); 
    }
});


$(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(".aimake_area").offset().top-300;
    var elementBottom = elementTop + $(".aimake_area").height();

    if (elementTop <= windowTop && elementBottom >= windowTop) {
        $(".aimake").addClass('menu_hover'); 
    } else {
        $(".aimake").removeClass("menu_hover"); 
    }
});


$(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var elementTop = $(".nayami_area").offset().top-300;
    var elementBottom = elementTop + $(".nayami_area").height();

    if (elementTop <= windowTop && elementBottom >= windowTop) {
        $(".nayami").addClass('menu_hover'); 
    } else {
        $(".nayami").removeClass("menu_hover"); 
    }
});






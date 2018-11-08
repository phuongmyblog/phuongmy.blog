$(".changecolor a").each(function () {
    var o = $(this).attr("data-color");
    $(this).css("background-color", o), $(this).click(function () {
        return $(".meta-post a,.post-meta a,.comments .comment .comment-actions a,.index .post h2 a:hover,.PMS-lkbb-widget a:hover,fa.fa-heart.animated.infinite.pulse,.comments a").css("color", o),
$(".back-top,#navigation-menu,#navigation-menu.fixed,.multitab-widget li a.multitab-widget-current,.recent-title > h2,a.readmore,.social-sec,.showpagePoint,.comments h4,.showpageNum a:hover, .showpage a:hover,.multitab-widget li a.multitab-widget-current").css("background-color", o), $(".showpagePoint,.featuresliderpost .widget > h2,.multitab-widget,.multitab-widget li,#header-top,.item .post-title,.PMS-lkbb-widget a:hover").css("border-color", o), $(".code-giu-nguyen-khi-chuyen-mau").hover(function () {
            $(this).css("background-color", o)
        }, function () {
            $(this).css("background-color", "#f4f4f4")
        }), $(".chua-them").hover(function () {
            $(this).css("background-color", o)
        }, function () {
            $(this).css("border-color", "#eee")
        }), $(".chua-them").each(function () {
            $(this).css("border-color", o)
        }, function () {
            $(this).css("color", "#fff!important")
        }), $(".chua-them").hover(function () {
            $(this).css("color", o)
        }, function () {
            $(this).css("background-color", "#fff")
        }), !1
    })
});
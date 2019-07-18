var wrap = $(".wrap");

// フェード
$(function(){
    $('.fade').css({
        opacity: 0,
        transform: 'translateY(50px)',
        transition: 600+"ms"
    });

    $(window).scroll(function (){
        $('.fade').each(function　(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowheight = $(window).height();

            if (scroll > position - windowheight + windowheight/7) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

//オンロード
$(function(){
    var onloadOpen = $(".onload-open");
    var onloadLogo = $(".onload-open__logo");
    onloadOpen.css({
        opacity :0,
        position: 'fixed'
        });
    onloadLogo.css('opacity','1');
    onloadOpen.delay(500).css('visibility','hidden');
});

// メニュー
$(function() {
    var dot = $(".menu__left__dot");
    var menuItem = $(".openmenu__list__item");
    var copyright = $(".openmenu__copyright");
    var menuLogo = $(".menu__logo,.menu__sub");
    var menuBack = $("#openmenu-back");
    var menu = $(".menu");

    // 回転
    $("#menuCircle").hover(function() {
        $(this).removeClass("mouse-out");
        $(this).addClass("mouse-on");
    }, function() {
        $(this).removeClass("mouse-on");
        $(this).addClass("mouse-out");
    });

    // オープン
    $("#menuCircle").click(function() {
            $(this).toggleClass("circle-size");
            menuBack.toggleClass("open");
            dot.toggleClass("dot");
            menuLogo.toggleClass("menu-font-color");
            wrap.toggleClass("scroll");

            menuItem.each(function(i) {
                setTimeout(function() {
                    menuItem.eq(i).toggleClass("active");
                }, 100 * i);
            });
            copyright.toggleClass("active");

            if( menu.hasClass("menu-width") ){
                $(this).delay(1000).queue(function(next) {
                menu.removeClass('menu-width');
                    next();
                });
            } else {
                menu.addClass("menu-width");
            };
    });
});

// フォーム
$(function() {
    var labelName = $("#namelabel");
    var inputName = $("#nameinput");
    var labelAdd = $("#addlabel");
    var inputAdd = $("#addinput");
    var widthBorder1 = $(".width-border:nth-of-type(1)");
    var widthBorder2 = $(".width-border:nth-of-type(2)");


    inputName.focusin(function(e) {
        labelName.addClass("input-click");
        widthBorder1.css('transform', 'scaleX(1)');
    });
    inputName.focusout(function(e) {
        labelName.removeClass("input-click");
        widthBorder1.css('transform', 'scaleX(0)');
    });

    inputAdd.focusin(function(e) {
        labelAdd.addClass("input-click");
        widthBorder2.css('transform', 'scaleX(1)');
    })
    inputAdd.focusout(function(e) {
        labelAdd.removeClass("input-click");
        widthBorder2.css('transform', 'scaleX(0)');
    });
});

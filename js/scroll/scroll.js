$(function () {

    var headerHeight = $("header").innerHeight();

    function Anchor() {
        var obj = $(this);
        $("html, body").animate(
            {scrollTop: $(obj.attr("href")).offset().top-headerHeight}, 500)
    }

    $(window).scroll(function () {
        // Текущее положение относительно документа
        var position = $(document).scrollTop();
        // Высота шапки


        // Обнуляем все если шапка на своем месте
        if (position == 0) {
            $("header").removeClass("header--fixed visible");
            $(".promo").css({'margin-top': ""});
        }

        if (position > headerHeight) {
            $('header').addClass("hidden");
        }
        else

        // фикс: при скроле больше высоты меню и возврате меню появляется
        if (position < headerHeight) {
            $('header').removeClass("hidden");
        }

        if (position > 200) {
            $("header").removeClass("hidden");
            $("header").addClass("header--fixed visible");
            $(".promo").css({'margin-top': headerHeight});
        }


    })

    $("a").click(Anchor);

});
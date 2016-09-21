$(function () {

    // Верхний паддинг у блока promo
    var promo_paddingTop = parseInt($(".promo").css("padding-top"), 10);

    function Anchor() {
        var obj = $(this);
        $("html, body").animate(
            {scrollTop: $(obj.attr("href")).offset().top - promo_paddingTop}, 500)
    }

    $(window).scroll(function () {
        var position = $(document).scrollTop();
        var headerHeight = $("header").innerHeight();

        // Обнуляем все если шапка на своем месте
        if (position == 0) {
            $("header").removeClass("header--fixed hidden visible");
            $(".promo").css({'padding-top': promo_paddingTop});
        }

        if (position > headerHeight) {
            $('header').addClass("hidden");
        }

        if (position > 200) {
            $("header").removeClass("hidden");
            $("header").addClass("header--fixed visible");
            $(".promo").css({'padding-top': promo_paddingTop + headerHeight});
        }


        var featuresHeight = $(".features").height();
        // console.log("position: " + position);
        // console.log(headerHeight);

    })

    $("a").click(Anchor);

});
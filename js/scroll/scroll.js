$(function () {
    function Anchor() {
        var obj = $(this);
        $("html, body").animate(
            {scrollTop: $(obj.attr("href")).offset().top}, 500)
    };

    // function scrollHeader() {
    //     var scroll = scrollTop().offset().top;
    // }

    $("a").click(Anchor);

});
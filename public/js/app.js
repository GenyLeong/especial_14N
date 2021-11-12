$(function() {
    var o = {};
    var scope = $(window).height() - 100;
    $("#mapid").height(scope);

    (o.investigaciones_notas = new InvestigacionesNotas("")),
    o.investigaciones_notas.init();

    $(".popup").click(function(o) {
        var i = ($(window).width() - 650) / 2,
            e = ($(window).height() - 450) / 2,
            n = this.href,
            s = "status=1,width=650,height=450,top=" + e + ",left=" + i;
        return window.open(n, "twitter", s), !1;
    });
});
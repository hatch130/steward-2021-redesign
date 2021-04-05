var app = {};
app.global = {
    init: function() {
        console.log("load global functions"),
        app.global.loadHeader(),
        app.global.header(),
        app.global.hero(),
        app.global.dialog(),
        app.global.news()
    },
    header: function() {
        $(".alert-box .dismiss").click(function() {
            $(this).closest(".alert-box").hide()
        }),
        $(".header .menu-icon").click(function() {
            $(this).toggleClass("open"),
            $(".header, .header .menu").toggleClass("open")
        }),
        $(".header .language label").click(function() {
            $(this).closest(".language").toggleClass("open")
        }),
        $(".header .search-icon, .header .close").click(function() {
            $(".header .search-wrapper, .header .search-input").toggleClass("open")
        }),
        $(".menu-items .item > a").click(function() {
            $(this).next().hasClass("sub") && $(this).parent().toggleClass("open")
        })
    },
    hero: function() {
        $(".hero .toggle span").click(function() {
            var e = $(this).attr("data-toggleType");
            $(".hero .toggle span").removeClass("active"),
            $(this).addClass("active"),
            $(this).closest(".hero").attr("data-hero", e),
            $("[data-heroList]").removeClass("active"),
            $('[data-heroList="' + e + '"]').addClass("active")
        })
    },
    news: function() {
        $(".news .items").slick({
            slidesToShow: 1,
            variableWidth: !0,
            infinite: !1
        })
    },
    dialog: function() {
        $(".dialog").click(function(e) {
            e.target === e.currentTarget && $(this).closest(".dialog").fadeOut()
        }),
        $(".dialog .close span").click(function() {
            $(this).closest(".dialog").fadeOut()
        })
    },
    loadHeader: function() {
        console.log("loadHeader()")
    }
},
jQuery(document).ready(function(e) {
    app.global.init()
});

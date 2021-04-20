var app = {};
app.global = {
    init: function () {
        console.log("load global functions"),
            app.global.loadHeader(),
            app.global.header(),
            app.global.hero(),
            app.global.dialog(),
            app.global.news(),
            app.global.services();

        app.global.fixedHeader();

    },
    header: function () {
        $(".alert-box .dismiss").click(function () {
            $(this).closest(".alert-box").hide()
        }),
        $(".header .menu-icon").click(function () {
            $(this).toggleClass("open"),
                $(".header, body, .header .menu").toggleClass("open")
        }),
        $(".header .language label").click(function () {
            $(this).closest(".language").toggleClass("open")
        }),
        $(".header .search-icon, .header .close").click(function () {
            $(".header .search-wrapper, .header .search-input, .header .search-icon").toggleClass("open")
        }),
        $(".menu-items .item > a").click(function () {
            $(this).next().hasClass("sub") && $(this).parent().toggleClass("open")
        })
    },
    hero: function () {
        $(".hero .toggle span").click(function () {
            var e = $(this).attr("data-toggleType");
            $(".hero .toggle span").removeClass("active");
            $(this).addClass("active");
            $(this).closest(".hero").attr("data-hero", e);
            $("[data-heroList]").removeClass("active");
            $('[data-heroList="' + e + '"]').addClass("active");
        })
    },
    news: function () {
        $(".news .items").slick({
            slidesToShow: 1,
            variableWidth: !0,
            infinite: !1
        })
    },
    services: function () {
        $(".services-page .chars a").click(function (e) {
            $(".services-page .chars a").removeClass("active");
            $(this).addClass("active");
            var id = $(this).attr("href");

            $('html, body').animate({
                scrollTop: $(id).offset().top - 50
            }, 500);
        });

        $(".services-page .accordian a").click(function (e) {
            e.preventDefault();

            $(this).closest(".accordian").toggleClass("active");

        });
    },
    dialog: function () {
        $(".dialog").click(function (e) {
            e.target === e.currentTarget && $(this).closest(".dialog").fadeOut()
        }),
            $(".dialog .close span").click(function () {
                $(this).closest(".dialog").fadeOut()
            })
    },
    loadHeader: function () {
        console.log("loadHeader()")
    },
    fixedHeader: function () {
        var header_height = $('header.header').outerHeight();
        var sticky = $('header.header'),
            scroll = $(window).scrollTop();

        if (scroll >= header_height) {
            sticky.addClass('sticky');
            $(".header .alert-box").hide();
        } else {
            sticky.removeClass('sticky');
        }
    }
},
    jQuery(document).ready(function (e) {
        app.global.init()
    });

$(window).scroll(function () {
    app.global.fixedHeader();
});


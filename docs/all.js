var app = {};
app.global = {
    init: function () {
        app.global.loadHeader();
        app.global.header();
        app.global.hero();
        app.global.dialog();
        app.global.news();
        app.global.services();

        app.global.fixedHeader();

    },
    header: function () {
        $(".alert-box .dismiss").click(function () {
            $(this).closest(".alert-box").hide()
        });
        $(".header .menu-icon").click(function () {
            $(this).toggleClass("open"),
                $(".header, body, .header .menu").toggleClass("open")
        });
        $(".header .language label").click(function () {
            $(this).closest(".language").toggleClass("open")
        });
        $(".header .search-icon, .header .close").click(function () {
            $(".header .search-wrapper, .header .search-input, .header .search-icon").toggleClass("open")
        });
        $(".menu-items .item > a").click(function () {
            $(this).next().hasClass("sub") && $(this).parent().toggleClass("open")
        });
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
                scrollTop: $(id).offset().top - 230
            }, 500);
        });

        $(".services-page .accordian a").click(function (e) {
            e.preventDefault();

            $(this).closest(".accordian").toggleClass("active");

        });


        $('.module-accordian .accordian .title').click(function(){
            $('.accordian.active').not($(this).closest('.accordian')).removeClass('active').find('.content').slideUp();
            $(this).closest('.accordian').toggleClass('active').find('.content').slideToggle();
        });

        $(".module-awards.slider > div").slick({
            variableWidth: false,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            infinite: false,
            mobileFirst: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                  }
                }
            ]
        });

        if($(window).width() < 768){
            $(".hospital-page .awards > div").slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                infinite: false,
            });
        }

        $(".module-video .video-list").slick({
            infinite: false,
            variableWidth: false,
            nextArrow: '<button type="button" class="slick-next"><i class="icon-right-bold"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-right-bold"></i></button>',
            dots:true,
            mobileFirst: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                }
            ]
        });


        $(".module-testimonials .list").slick({
            infinite: false,
            nextArrow: '<button type="button" class="slick-next"><i class="icon-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-right"></i></button>'
        });

        $(".team-members .more").click(function(e){
            e.preventDefault();
            $(this).closest('.item').find('.text').toggleClass("open");
        })
        
        $(".team-members .load-more").click(function(e){
            e.preventDefault();
            $(this).closest('.team-members').find('.item').show();
            $(this).hide();
        })

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
            if(!sticky.hasClass('sticky')){
                sticky.addClass('sticky');
                sticky.animate({top: '0px'});
                $(".header .alert-box").hide();    
            }
        } else {
            sticky.removeClass('sticky').css("top","");;
        }
    }
},
    jQuery(document).ready(function (e) {
        app.global.init()
    });

$(window).scroll(function () {
    app.global.fixedHeader();
});


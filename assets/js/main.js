
        $(document).ready(function () {
            $('.slider-for').slick({
                autoplay: false,
                // slidesToShow: 1,
                autoplaySpeed: 10000,
                pauseOnFocus: true,
                fade: true,
                dots: true,
                arrows: false,
                asNavFor: '.slider-nav',
                cssEase: 'ease'
            });
            $('.slider-nav').slick({

                // slidesToScroll: 1,
                asNavFor: '.slider-for',
                slidesToShow: 4,
                focusOnSelect: !0
            });
            $(".slider-nav").stick_in_parent();
        });

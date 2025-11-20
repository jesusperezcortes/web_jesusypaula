$('.add-to-cart-btn').click(function(){
    var modalEl = document.getElementById('CartModal'); 
    var modal = new bootstrap.Modal(modalEl); 
    modal.show(); 

    setTimeout(function(){
        modal.hide();
    }, 2000);
});

    $('#menu-bar').click(function() {
        $('.navbar').toggleClass('active');
    });

    $(window).scroll(function() {
        $('.navbar').removeClass('active');
    });

    var $featuredImg = $('#featured-image');
    var $smallImgs = $('.small-Img');

    $smallImgs.click(function() {
        $featuredImg.attr('src', $(this).attr('src'));
        $smallImgs.removeClass('sm-card');
        $(this).addClass('sm-card');
    });

    var featuredSwiper = new Swiper(".featured-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    var brandSwiper = new Swiper(".brand-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 5,
            },
        },
    });
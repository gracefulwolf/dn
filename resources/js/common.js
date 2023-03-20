var dnUi ={};

$(function(){
    dnUi.tab();
    dnUi.acco();
    dnUi.scrollMove();
    dnUi.modal();
    dnUi.modalClose();
})


dnUi = {
    tab : function (){
        $(document).on('click', '.tab-btn',  function(e){
            e.preventDefault();
            var $tab = $(this).parent('.tab-menu').data('ui-tab');
            var tabIndex = $(this).index();
            
            if (!$(this).hasClass('on')) {
                $(this).siblings().removeClass('on')
                $(this).addClass('on');
                $('#'+$tab).find('> .tab-cont').removeClass('on');
                $('#'+$tab).find('> .tab-cont').eq(tabIndex).addClass('on');
            }
        })
    },
    acco: function(){
        $(document).on('click', '.acoo-btn',  function(e){
            e.preventDefault();
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).next().stop().slideUp();
            } else {
                $(this).next().siblings('.acco-cont').stop().slideUp(300);
                $(this).siblings('.acoo-btn').removeClass('on');
                $(this).addClass('on');
                $(this).next().stop().slideDown(300);
            }
        })
    },

    scrollMove: function (){
        var offsetTop = $(window).scrollTop()
        if (offsetTop > 50) {
            $('.top-nav').addClass('on')
        } else {
            $('.top-nav').removeClass('on')
        }
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 50) {
                $('.top-nav').addClass('on')
            } else {
                $('.top-nav').removeClass('on')
            }
        })
        $("nav a").click(function(event){         
	        event.preventDefault();
	        $('html,body').animate({scrollTop:$(this.hash).offset().top - 55}, 500);
	    });
    },

    modal: function (){
        $(document).on('click', '[data-modal]', function(e){
            e.preventDefault();
            var winW = $(window).width();
            var modal = $(this).data('modal');
            var dim = '<div class="dim"></div>'
            $('body').prepend(dim);
            if (winW < 750) {
                $('html').css('overflow-y', 'hidden')
            }
            setTimeout(function(){
                $('#'+modal).addClass('on');
                $('.dim').addClass('on');

            },100);
        })
    },
    modalClose : function(modal){
        $(document).on('click', '.modal .btn-close', function(){
            var $modal = $(this).parents('.modal');

            $modal.stop().animate({
                opacity:0
            },200, function(){
                $modal.removeClass('on');
                $modal.removeAttr('style');
                $('html').css('overflow-y', '')
            });
            $('.dim').stop().animate({
                opacity:0
            },200, function(){
                $('.dim').remove();
            })
            
        })
    },
}
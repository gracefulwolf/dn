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
        
        $(window).on('scroll',function(e) {
            var winScl = $(window).scrollTop();
            var winHg = $(window).height();
            var fixedBtn = $('.fixed-btn');
            var gnbWarp = $('.gnb-wrap');
            if (winScl >= 0) {
                fixedBtn.addClass('on')
                if (winScl + winHg > $('.btn-wrap.bottom').offset().top + 50) {
                    fixedBtn.removeClass('on')
                }
            }  else {
                fixedBtn.removeClass('on')
            }
            if (winScl > 55) {
                gnbWarp.css({
                    'background':'#fff',
                    'transition':'all 0.3s',
                    'box-shadow': '0 2px 10px 0 rgba(0, 0, 0, 0.08)'
                })
            }else {
                gnbWarp.css({
                    'background':'transparent',
                    'box-shadow':'none',
                })
            }
        })
		
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
            if (!$('#'+modal).hasClass('on')) {
                $('#'+modal).addClass('on');
                $('.dim').addClass('on');
            }
            
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
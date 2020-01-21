$(document).ready(function (){
   
    // NiceScrol function
    function niceScrollfunc(){
        $("body").niceScroll({
        cursorcolor: "#333",
        cursorborderradius: 0,
        cursorborder: 'none',
        zindex: 300,
        cursorwidth: 8,
        scrollspeed: 85, // scrolling speed
        mousescrollstep: 24, // scrolling speed with mouse wheel (pixel)
        cursorminheight: 100
    });
    }
    
    function owl_Carousel(){
        $("#owl-carousel1").owlCarousel({
            items: 4,
            nav: true,
            dots: false,
            navText: ['<div class="team__button-l slider-tgl__btn-l"><a class="p-relative"></a></div>', '<div class="team__button-r slider-tgl__btn-r"><a class="p-relative"></a> </div>']
     });
    }
    
      
    
     
    
    
    
    niceScrollfunc();
    owl_Carousel()
})
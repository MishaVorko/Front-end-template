$(document).ready(function (){
   
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
    
    
    
    niceScrollfunc()
})
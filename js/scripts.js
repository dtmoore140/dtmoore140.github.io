$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var top_of_object = $(this).offset().top + 800;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the top of the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

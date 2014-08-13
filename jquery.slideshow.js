(function($){  
 $.fn.slideshow = function(options) {  
 
    var defaults = {in_speed:4000};
    var options = $.extend(defaults, options);
 
    return this.each(function() {
      
    function FuncName(){
    var box_slide = $('#box_slide');  
    var $img_attuale = box_slide.children('img.attuale');
    var $img_next = $img_attuale.next('img');
    var $puls_att = box_slide.find('li.sfondo');
    var $puls_succ = $puls_att.next('ol li');
    imgsucc =  $img_next.length;
    if(imgsucc==0){
    $img_next = $img_attuale.siblings('img:first');
    $puls_succ = $puls_att.siblings('ol li:first');
    }
    $img_attuale.removeClass('attuale').fadeOut(1000);
    $puls_att.removeClass('sfondo');
    $img_next.addClass('attuale').fadeIn(1000);
    $puls_succ.addClass('sfondo');   
    };
    
    $(this).children('img').eq(0).show();
    $(this).find('ol.indicators li').eq(0).addClass('sfondo');;
    setInterval(FuncName ,options.in_speed);

    });
  
  
 };  
})(jQuery);

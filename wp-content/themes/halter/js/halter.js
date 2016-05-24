jQuery(document).ready(function(){

  //jQuery('.top-nav ul.menu li').last().css({'border' : 'none', 'margin-right' : '0px'}); 
  jQuery('.top-nav ul.menu li').last().css({'border' : 'none', 'margin-right' : '0px', 'padding-right' : '0px'}); 
  
  jQuery('#homeslider').cycle({ 
    fx: 'fade'
  });
    
});  

function onAfter(curr, next, opts) {
    //jQuery('#intslideprev').hide();
    //jQuery('#intslidenext').hide();
    
    var index = opts.currSlide;
    jQuery('#intslideprev')[index == 0 ? 'fadeOut' : 'fadeIn']();
    jQuery('#intslidenext')[index == opts.slideCount - 1 ? 'fadeOut' : 'fadeIn']();
}

function onBefore(curr, next, opts) {
    //jQuery('#intslideprev').hide('slow');
    //jQuery('#intslidenext').hide('slow');
    jQuery('#intslideprev').hide();
    jQuery('#intslidenext').hide();
}
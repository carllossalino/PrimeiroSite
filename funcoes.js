
/******************INICIO*****************/
//Menu com efeito de rolagem scroll
$('nav a, div a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffaset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
    	scrollTop: targetOffaset -79
    }, 500);
});
/******************FIM********************/
/******************INICIO*****************/
//Menu com efeito scroll nav.black

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$('nav, #navbarNav').addClass('black');

	}
	else{
		$('nav, #navbarNav').removeClass('black');
	}
});

/******************FIM********************/
/******************INICIO*****************/
//Botão de voltar no top mobile

$(document).ready(function(){

    $('.box').hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>48){
            $('.box').fadeIn();
        }
        else{
            $('.box').fadeOut();
        }
    });

    $('.box').click(function(){
        $('html,body').animate({
            scrollTop: 0
        });
    });
});
/******************FIM********************/
/******************INICIO*****************/
//Items animado com scroll

debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);

    };

};

(function() {
    var $target = $('.anime'),
    animationClass = 'anime-start';
    offset = $(window).height() * 3.9/4;

    function animescroll() {
        var documentTop = $(document).scrollTop();

       $target.each(function() {
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop -offset) {
            $(this).addClass(animationClass);
        }
        else{
            $(this).removeClass(animationClass);
        }
       })
    }
    animescroll();
    $(document).scroll(debounce(function(){
        animescroll();
      
    },150));

}());
/******************FIM********************/
/******************INICIO*****************/
$(window).ready(function(){
    $('div #my_image').on('click',function(){
      var src= $(this).attr('src');
        $("#model-img").attr('src',src);
        $("#joes").modal('show');
    });   
});

/******************FIM********************/

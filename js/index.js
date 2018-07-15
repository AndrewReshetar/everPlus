$(window).scroll(function(){
    if ($(window).scrollTop() >= 450) {
        $('header').addClass('scroll');
        $('header nav ul li').addClass('navscroll');
        $('.logo').addClass('logoscroll');
    }
    else {
        $('header').removeClass('scroll');
        $('header nav ul li').removeClass('navscroll');
        $('.logo').removeClass('logoscroll');
    }
});




$("#portfolioScroll").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
});

$("#aboutusScroll").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
});

$("#homeScroll").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
});

document.getElementById('regbutton').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'; 
});


$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#pageNav').toggleClass('hideMenuDropdown');
		$('.enjoyTheCold').toggleClass('navDarken');
		$('div#nav-icon').toggleClass('navDarkenBurger');		
		$('.menuWordText').toggleClass('navDarken');
	});
});


//ADD JS THAT CLOSES MENU ON CLICK
//ADD CSS TO MAKE li text centered





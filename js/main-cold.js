$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#pageNav').toggleClass('hideMenuDropdown');
		$('.enjoyTheCold').toggleClass('navDarken');
		$('div#nav-icon').toggleClass('navDarkenBurger');		
		$('.menuWordText').toggleClass('navDarken');
	});
});

$('a[href="#keepCoolNav"], a[href="#loveTravelNav"], a[href="#exploreNewPlacesNav"], a[href="#contactUsNav"]').
attr('onclick', "$('#nav-icon').click()"); //Onclick Menu Hider


$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#pageNav').toggleClass('hideMenuDropdown');
		$('.enjoyTheCold').toggleClass('navDarken');
		$('div#nav-icon').toggleClass('navDarkenBurger');		
		$('.menuWordText').toggleClass('navDarken');
	});
});

$('a[href="#keepCoolAnchor"], a[href="#loveTravelAnchor"], a[href="#exploreNewPlacesAnchor"], a[href="#contactUsAnchor"]').
attr('onclick', "$('#nav-icon').click()"); //Onclick Menu Hider


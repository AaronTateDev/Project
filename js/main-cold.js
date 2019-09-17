$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		if($('#pageNav').hasClass('hideMenuDropdown') == true) {
			$('#pageNav').removeClass('hideMenuDropdown');
		}else {
			$('#pageNav').addClass('hideMenuDropdown');
		}
	});
});

console.log("justice");
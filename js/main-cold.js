$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#pageNav').toggleClass('hideMenuDropdown');
		/*if($('#pageNav').hasClass('hideMenuDropdown') == false) {
			$('#pageNav').removeClass('hideMenuDropdown');
		}else {
			$('#pageNav').addClass('hideMenuDropdown');
		}*/
	});
});

console.log("justice");
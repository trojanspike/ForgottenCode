(function(){
	"use strict"

$('#theme-container button[type="submit"], #theme-container input[type="submit"]').live('click', function(event){
		alert('disbaled in preview mode');
		event.preventDefault();
	});
$('#theme-container a').live('click', function(){
	
	$.getJSON('core/parse.php', {
		ajax	:	'get_new_page',
		theme	:	GET_theme,
		target	:	$(this).attr('href')}, 
	function(json){
		if(json.status === true){
		$('#theme-container').html(json.content);
		} else { alert(json.message); }
		});
	return false;
});


$('#theme-bar-hide').live('click', function(event){
	$('#theme-changer-container').animate({
		marginLeft	:	- 96+'%'
	}, 850);
	$(this).attr('id', 'theme-bar-hidden').html('&gt;&gt;&gt;');
	event.preventDefault();
});

$('#theme-bar-hidden').live('click', function(event){
	$('#theme-changer-container').animate({
		marginLeft	:	- 0+'%'
	}, 850);
	$(this).attr('id', 'theme-bar-hide').html('&lt;&lt;&lt;');
	event.preventDefault();
});

})();
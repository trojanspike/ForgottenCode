(function(){
	"use strict"
	var dateObj = new Date();
	$(window).load(function(){
		$('body').addClass('hours-'+dateObj.getHours());
	});
})();

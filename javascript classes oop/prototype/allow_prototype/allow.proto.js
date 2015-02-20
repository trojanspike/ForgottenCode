(function(){

	function allow_p_type(){
		var testVar = 'hello world';

		this.method1 = function(){
			alert(testVar);
		};

	};

window.allow_p_type = allow_p_type;

})();
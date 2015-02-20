(function(){

	function no_p_type(){
		var testVar = 'hello world';
		return {
			method1 : function(){
				alert(testVar);
			},

			/*
			To allow the use of prototype in this sort of class structure 
			you would make a prototype method
			 */
			addProto : function(){
				// logic here, 
			}
		}

	};

window.no_p_type = no_p_type;

})();
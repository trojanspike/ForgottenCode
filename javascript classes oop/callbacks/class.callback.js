(function(){
/***************/
	
	function callBacks(){
		/* here we just se a couple of vars */
		var _self = this;
		var _privateVar = 'My private var';
		this.variable = 'Some variable';
		this.errors = ['err1', 'err2', 'err3', 'err4'];

		this.callback1 = function(call){
			// here we catch the callback function that was passed and
			// add the data to be passed back
			// we use call(prams-we-want), the main thins is that it matching the pram
			// we use in the opening of this function(call)
			call(_self.errors, 'added data');
			return this;
		};

	};

/***************/
window.callBacks = callBacks;
})();


var varTest = new callBacks();
// Note that if you have a prototype that takes a call back and you need the 
// public class variables : i.e , array / string etc
// You need to make an instance of the class to get them.
callBacks.prototype.returnVar = function(call){
	call(calls.variable);
};

// Private variables can't be retrieved from the class
callBacks.prototype.tryPrivVar = function(call){
	call(_privateVar);
};
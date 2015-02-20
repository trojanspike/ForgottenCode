// local storage
(function(){

	function pubPrivConst(pram){
		var self = this;
		this.passedPram = pram;
		/* this.var are public variables accessable from the new created object*/
		// e.g alert(ppc.publicVar);
		this.publicVar = 'Im a public variable';


		/*
		private variables can't be called from the new created object
		e.g alert(ppc.privateVar); , will give an error
		,
		The variable can be called and used from methods in the class
		 */
		var privateVar = 'Im a private variable';

		/* Private function not able to be ran fron new created object */
		// for ppc.private_init(); , will do nothing , but would work if
		// it was called from a method within the script
		function privateinit(){
			alert(self.passedPram);
		};
		

		/*
		To have a function similar to a PHP construct run you could create it as a private function
		and run it straight away e.g I'll call mine init
		 */
		this.errors = false;
		init();
		function init(){
			if(typeof(self.passedPram) === 'object'){
				alert('only string allowed');
				self.errors = true;
				// then set an error var to true; making it public for in the html scripts also
			}
		};


			/* Public method able to be ran fron new created object */
			this.publicinit = function(){
				alert(self.passedPram);
				return this; // for chaining
			};

			this.someMethod = function(){
				/*
				you can check the error value in the method
				 */
				if(self.errors === false){
					// do some stuff , waste of time doing it if there are errors.
				}
			};

			function somePrivFunction(){
				if(self.errors === false){
					// do some stuff , waste of time doing it if there are errors.
				}
			};

	}; /* pubPrivConst */

// here we put the function into a window.variable for us to access ,
// we don't make a new classname here because we want the construct in the webpage.
window.pubPrivConst = pubPrivConst;	

}());
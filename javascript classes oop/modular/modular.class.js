(function(){
/************************/


// myModule is the main class
	function myModule(){
		var main = this; // to access the main class vars + methods
		// you can have an init() , construct function here aswell as in the inner modules
		

		this.errors = false;
		
		init();
		function init(){
			if(!window.jQuery){
				alert('no jQuery');
				// and set a var to error : main.errors = true;
			}
		};

		return { /* return container for modules */


			/****************************************************************************/
			/****************************************************************************/
			/***********------ MODULE 1 -----------**************************************/
			/****************************************************************************/
			// module1 is an inner class
			module1 : function(){ 
					var self = this; // to access this class vars etc


				// with this JS class structure prototype will not be 
				// usable
				return {/* contaienr for module 1 methods */
					module1_method1 : function(){

					},

					module1_method2 : function(){

					}
				}/* contaienr for module 1 methods end */
			} /* contaienr for module 1 end*/,
			/****************************************************************************/
			/****************************************************************************/

			
			/****************************************************************************/
			/****************************************************************************/
			/***********------ MODULE 2 -----------**************************************/
			/****************************************************************************/
			module2 : function(){
				var self = this; // to access this class vars etc


			// with this JS class structure prototype is usable
				
				this.module2_method1 = function(){

				};

				this.module2_method2 = function(){

				};

			}
			/****************************************************************************/
			/****************************************************************************/	


		} /* return container for modules end*/

}		


// HERE we set a new mymodules to a window variable for
// us to access the modules contained within
window.myModules = new myModule();

/************************/
})();
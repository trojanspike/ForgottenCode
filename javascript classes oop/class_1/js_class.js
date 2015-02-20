/*
Put the JS in a container so that the var names etc
don't affect any others made by other scripts
 */
(function(window, document){
/* What to take into script?*/


	/* Now set the class name - we call this myJsClass */
	var myJsClass = function(){
		/* inside this function we are able to get to what we took in , ie window & document */
		/* lets set them to something else */
		this.myWindow = window;
		/* OR */
		var myDocument = document;

		this.myVariable = 'My set variable';
		/* The : this ' keyword applies it's cointaining function */
		/* Note that the current ' this ' would be overwritten when a new method | function is created
		So we will set a variable to target the main ' this ' from inner methods | function */

		var self = this;

		/* there are a couple of ways to set methods | functions inside Js class , 
		I will show how they are done below */

		var myMethods = {
			Method1 : function(target){
				target.innerHTML ='hello world , I\'m the method var myMethods from the myMethods variable : set var -'+self.myVariable;
				/* Chaining methods in JS like in jQuery : $.(target).addClass('hi').removeClass('bye'); 
			would be done here , */
			return this; /* using return this lets us chain methods */
			/* Note that ' this ' refers to the current method , not the main class */
			},

			Method2 : function(target, pram){
				target.innerHTML ='hello world , I\'m the method var myMethods from the myMethods variable- ' +pram;
				/* un chained */
			}

		};
		/* set the methods as an object that will be returned to the class */

		/* */
		return myMethods;
		/**/

		/* We can also do it as shown below */
		/* i prefer this */
		/* for below to work you need to comment out the about return myMethods; */
		return {
			Method1 : function(target){
				target.innerHTML = 'hello world , I\'m the method obj Method1 from the return {} object';
			return this;
			},

			Method2 : function(target, pram){
				target.innerHTML ='hello world , I\'m the method obj Method2 from the return {} object - ' +pram;
				/* un chained */
			}
		} /* return */		

	}; /* end - class */

/* Now we want to set it up for us to use */
/* adding it to the window would do for this because we don't need the construct */

window.myClass = new myJsClass(); /* we add the class variable to the window object for direct access */
/* I will show in a different script how to use the Class construct */


/* What to take into script also in closing of the script*/
})(window, document);
/*
Close Js container
 */	
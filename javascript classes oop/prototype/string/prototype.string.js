(function(){




})();


/*
Prototyping a regular JS abject 
 */

// here we will add a function to String object making letters go
// in reverse

// we use prototype on the main window.String
// and not , new String();

String.prototype.reverseIt = function(){
	// this key word world be the string
	// note that all stings in the webpage auto
	// get the String JS abject.
	
	var newRev = '', i;
	for(i = this.length; i>=0; i--){
		newRev += this.substr(i, 1);
	}
	return newRev;
};
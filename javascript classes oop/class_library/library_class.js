
/*

Quick example of how you would go about making you own 
Library for Js .
 */



(function(window, document){

/* All this is done using jQuery / prototype etc */
	function my_lib_class(){
		var self = this;
		this.target;

		return {
			targ : function(type, ident){
			switch(type){
				// target id
				case 'id':
					self.target =  document.getElementById(ident);
				break;

				// target classes
				case 'class':

				break;

				// target tags
				case 'tag':

				 // etc

				break;
					}
			return this;		
			} /* target : */,

			html : function(html){
				self.target.innerHTML = html;
				return this;
			} /* html */
		} 	

}



window.myLib = new my_lib_class();

})(window, document);
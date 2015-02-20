(function(window, document){

	function myCanvas(target){
		var _self = this, 
		_date = new Date();
		this.canvas = document.getElementById(target);
		this.ctx = this.canvas.getContext('2d');
		this.pointer = {};

		// canvas click event - Could use this to select & move objects
		this.canvas.addEventListener('click', function(event){
			// you would do the in a func - _some_func();
			_self.pointer.x = event.offsetX;
			_self.pointer.y = event.offsetY;
			alert('Mouse X in canvas = '+event.offsetX+' , mouse Y in canvas ='+event.offsetY);
			console.log(_self.pointer);
		},false);
		// id , pos, width, z-index
		this.addedImages = [];

		this.addImage = function(src, obj, callback){
			var img = new Image();
			img.src = src;
			
			var _imgObj = {
				id:'img_'+_date.getTime(),
				img : img,
				posX : (typeof obj.posX === 'undefined')?0:obj.posX,
				posY : (typeof obj.posY === 'undefined')?0:obj.posY
			}

			img.onload = function(){
				var imW = (typeof obj.imgW === 'undefined')?img.width:obj.imgW;
				var imH = (typeof obj.imgH === 'undefined')?img.height:obj.imgH;
				_imgObj.imgW = imW;
				_imgObj.imgH = imH;

				_drawImg(img, _imgObj.posX, _imgObj.posY, imW, imH);
				_self.addedImages.push(_imgObj);

				if(typeof callback !== 'undefined'){
					callback(_imgObj);
					}
			}
		} /* addImage */

		this.animate = function(id, posX, posY){
			// build it all up as an image? or just draw them all again ?
			// move vars needed - image / pos from & pos to
			// X-pos first / then Y - moving toward all together
			
			var MOV = {}, i=0, interv;
			for(i;i<_self.addedImages.length;++i){
				if(_self.addedImages[i].id === id){
					MOV.img = _self.addedImages[i].img;
					MOV.imgW = _self.addedImages[i].imgW;
					MOV.imgH = _self.addedImages[i].imgH;
					MOV.fromX = _self.addedImages[i].posX;
					MOV.fromY = _self.addedImages[i].posY;
					// Now we have some the basic data we need to move
				}
			}
			var X = MOV.fromX, Y = MOV.fromY;
			interv = setInterval(function(){

				// update main image upject -
				_clear();
				// X - then Y
				
				// lil bit of maths here -
				// get curr & target - 
				//  -- thinking 
				if(X !== posX){
					X += 2;
				} else {
					Y += 2;
				}
					// have to draw them all from the main object -
					// yes - if main object is updated - mult images / etc will
					// be able to be moved - along with a callback here
					// 
					_drawImg(MOV.img, X, Y, MOV.imgW, MOV.imgH);

				// if it's at the target - clear interval
				if(X === posX && Y === posY){
					// callback if !== undefined
					clearInterval(interv);
				}	
			}, 24);
		} /* animate */

		/********************* Private func ***************/
		function _drawImg(img, posX, posY, imW, imH){
			_self.ctx.drawImage(img, posX, posY, imW, imH);
		}
		function _clear(){
			_self.ctx.clearRect(0, 0, _self.canvas.width, _self.canvas.height);
		}
		/********************************************/
	}

window.myCanvas = myCanvas;	
})(window, document);
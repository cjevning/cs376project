

var flashTimer;
var message;
var imageToFlash = document.getElementById("message-div");
var flashMessageFor;
var flashMessageTimer;
var q_num;
var obj = new flashForRange('value');
var valueSelected;
// int counter;

var imageIsVisible;
var imageIsFlashing;

window.onload = function(){
	
	valueSelected = false;


	message = "zrywarybarualwuealaerpara";
	q_num = document.getElementById("q_num").innerHTML;


	imageToFlash = document.getElementById("message-div");

	// Flash message ever 1000microseconds
	setInterval(flashmessage, 150);
	var submitButton = document.getElementById("submit-btn");
	submitButton.disabled = true;

	setTimeout(function(){submitButton.disabled = false;}, 10000);
	
}

function flashmessage(){
	// console.log(q_num);
	if (q_num == 1 || q_num == 2){
		imageToFlash.style.display = "block";
		imageToFlash.innerHTML = message +" ";
		imageToFlash.innerHTML = "plqqer ublcu arepa lselsdkfl";
		setTimeout(function(){imageToFlash.innerHTML = message;}, 30);
		setTimeout(function(){imageToFlash.innerHTML = "asfeld asdfwvk fjewo iaflse";}, 90);
	} else if(q_num == 3 || q_num == 4){
		i = 1;


		var currCheckBox = document.getElementById(q_num + "_"+i);
		var rate_value;
		var target_value = document.getElementById("target_value").innerHTML;
		console.log(target_value);
		// Get current value
		while (currCheckBox){
			if (currCheckBox.checked) {
			  rate_value = currCheckBox.value;
			  console.log(rate_value);
			  valueSelected = true;
			  break;
			} else{
				i += 1;
				currCheckBox = document.getElementById(q_num+"_"+i);
			}
		}
		if (rate_value != target_value){
			message = "asd change no bad incorrectf"
			console.log(target_value);
		} else{
			message = "da good yes correct nicejob"
		}

		// Update block to flash corresponding message
		imageToFlash.style.display = "block";
		imageToFlash.innerHTML = message +" ";
		imageToFlash.innerHTML = "plqqer ublcu arepa lselsdkfl";
		setTimeout(function(){imageToFlash.innerHTML = message;}, 40);
		setTimeout(function(){imageToFlash.innerHTML = "asfeld asdfwvk fjewo iaflse";}, 50);


	}
		
}







function flashForRange(rangeId) {
	this.rangeSlider = document.getElementById(rangeId);
	this.isActive = false;
	// console.log(rangeId);
	// console.log(this.rangeSlider);
	if (!this.rangeSlider) return;
	obj = this;
	this.rangeSlider.onmousedown = function(event){ obj.mouseDown(); }
	document.body.mouseup = function(event){ this.mouseUp(event); }
}

flashForRange.prototype.mouseDown = function(event){
	this.isActive = true;

	// To handle slider action
	this.rangeSlider.onmousemove = function(event) {obj.mouseMove(event);}
    document.body.onmouseup = function(event){obj.mouseUp(event);}
}

flashForRange.prototype.mouseMove = function(event){

	var slider=document.getElementById("slider-value");
	if (this.rangeSlider == document.activeElement && this.isActive) {
		slider.innerHTML = "Value: " + this.rangeSlider.value;
		handleSliderOutput(this.rangeSlider.value);
	}
	document.body.onmouseup = function(event) {obj.mouseUp(event);}
 	
}

flashForRange.prototype.mouseUp = function(event){
	this.isActive = false;
}

function handleSliderOutput(value){
	// console.log(value);
	targetValue = document.getElementById("target_value");
	console.log(target_value.innerHTML);
	if(value < target_value.innerHTML){
		message = "zq more greater add increase";
	}else if (value > target_value.innerHTML){
		message= "aless smaller decrease reduce";
	}else{
		message = "perfectwonderfulgreatawesome";
	}


}


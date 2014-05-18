







var options = [];
var posOptions = [];
var negOptions = [];
var timeInterval =100;
var recentOptions = [];
var recentStimOptions = [];

var numRecentOptsToStore = 3;
var counter = 0;
var stimcounter = 0;
var numRegOpts;
var numStim;
var numOptions;
var targetValue;
var stateIsPositive = false;
var stimProbability = 10;
var test;




window.onload = function(){

	var q_type;
	if (document.getElementById("q_category")){
		q_type = document.getElementById("q_category").innerHTML;
	}
	if (document.getElementById("target_value")){
		targetValue = document.getElementById("target_value");
	}
	// obj = new flashForRange('value');
	if (q_type == "range") test = new flashForRange("value");
	else if (q_type == "select") flashForSelect();



	var numOptionsElem = document.getElementById("num-image");
	numRegOpts = parseInt(numOptionsElem.innerHTML);

	// var numOptionsElem = document.getElementById("num-positive");
	numStim = parseInt(document.getElementById("num-stim").innerHTML);
	numOptions = numRegOpts;

	for (i=0; i<numRegOpts; i++){
		var id = "cycle-"+i;
		console.log("getting id:" + id);
		options[i] = document.getElementById(id);
		options[i].style.display = "none";
	}

	for (i=0; i<numStim; i++){
		var id = "pos-"+i;
		posOptions[i] = document.getElementById(id);
		id = "neg-" + i;
		negOptions[i] = document.getElementById(id);
	}





	// changeStimulis(true);
	// setInterval(function(){flashRandomStimuli()}, timeInterval);
	setInterval(function(){flashStim()}, timeInterval);

	
}


function flashStim(){
	var isStimulis =Math.floor((Math.random() * stimProbability));
	console.log(isStimulis);
	if (isStimulis != 0){
		flashStimulis(false);
	} else{
		flashStimulis(true);
	}


}

function flashStimulis(shouldBeStim){

	if (!shouldBeStim){
		counter++;
		var optionToFlash=Math.floor((Math.random() * numOptions));
		

		while (recentOptions.indexOf(optionToFlash) >= 0 ){
			optionToFlash = Math.floor((Math.random() * numOptions));
		}
		recentOptions[counter % numRecentOptsToStore] = optionToFlash;


		options[optionToFlash].style.display = "block";
		setTimeout(function(){options[optionToFlash].style.display = "none"}, timeInterval);
	} else{
		stimcounter++;
		var optionToFlash=Math.floor((Math.random() * numStim));
		while (recentStimOptions.indexOf(optionToFlash) >= 0 ){
			optionToFlash = Math.floor((Math.random() * numStim));
		}
		recentStimOptions[stimcounter % numRecentOptsToStore] = optionToFlash;
		if (stateIsPositive){
			posOptions[optionToFlash].style.display = "block";
			setTimeout(function(){posOptions[optionToFlash%numStim].style.display = "none"}, timeInterval);
		} else{
			negOptions[optionToFlash].style.display = "block";
			setTimeout(function(){negOptions[optionToFlash%numStim].style.display = "none"}, timeInterval);
		}
	}
}



function flashRandomStimuli(){
	counter++; 
	var optionToFlash=Math.floor((Math.random() * numStim));
	while (recentOptions.indexOf(optionToFlash) >= 0 ){
		optionToFlash = Math.floor((Math.random() * numOptions));
	}
	recentOptions[counter % numRecentOptsToStore] = optionToFlash;
	options[optionToFlash].style.display = "block";
	setTimeout(function(){options[optionToFlash].style.display = "none"}, timeInterval);
}

function changeStimulis(isPositive){
	if (stateIsPositive == isPositive){
		console.log("state is already that way");
		return;
	}

	var i = 0;
	stateIsPositive = isPositive;
	
	console.log("changing Stimulis");

	// if (isPositive){
	// 	console.log("Makeing posivite");
	// 	for (i; i<(numStim); i++){
	// 		var id = "pos-"+i;
	// 		console.log("getting id:" + id);
	// 		if (document.getElementById(id)){
	// 			options[i+numRegOpts-1] = document.getElementById(id);
	// 		}
	// 	}
	// } 
	// else{
	// 	console.log("Makeing negative");
	// 	for (i; i<(numStim); i++){
	// 		var id = "neg-"+i;
	// 		console.log("getting id:" + id);
	// 		if (document.getElementById(id)){
	// 			options[i+numRegOpts-1] = document.getElementById(id);
	// 		}
	// 	}
	// }

	// numOptions = numRegOpts + numStim - 1;

}


function flashForRange(rangeId) {
	this.rangeSlider = document.getElementById(rangeId);
	console.log(this.rangeSlider);
	this.isActive = false;
	if (!this.rangeSlider) return;
	obj = this;
	this.rangeSlider.onmousedown = function(event){ obj.mouseDown(); };
	document.body.mouseup = function(event){ this.mouseUp(event); };
}

flashForRange.prototype.mouseDown = function(event){
	this.isActive = true;

	// To handle slider action
	this.rangeSlider.onmousemove = function(event) {obj.mouseMove(event);}
    document.body.onmouseup = function(event){obj.mouseUp(event);}
}

flashForRange.prototype.mouseMove = function(event){
	// console.log("got here");
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
	console.log(target_value.innerHTML);
	if(value < target_value.innerHTML){
		changeStimulis(true);
	}else if (value > target_value.innerHTML){
		changeStimulis(false);
	}
}

function flashForSelect(){
	i = 1;
	var currCheckBox = document.getElementById(q_num + "_"+i);
	var target_value = document.getElementById("target_value").innerHTML;
	var rate_value;

	// Get current value
	while (currCheckBox){
		if (currCheckBox.checked) {
		  rate_value = currCheckBox.value;
		  console.log(rate_value);
		  break;
		} else{
			i += 1;
			currCheckBox = document.getElementById(q_num+"_"+i);
		}
	}
	if (rate_value != targetValue){
		changeStimulis(false);
	} else{
		changeStimulis(true);
	}
}


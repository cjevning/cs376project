


var options = [];
var posOptions = [];
var negOptions = [];
var timeInterval =100;
var recentOptions = [];
var recentStimOptions = [];

var numRecentOptsToStore = 3;
var numRecentStimToStore = 3;
var NUM_STIM_TYPES = 0;

var counter = 0;
var stimcounter = 0;
var numRegOpts;
var numStim;
var numOptions;
var targetValue;
var stateIsPositive = false;
var stimProbability = 10;
var test;

var isNegativeTest = false;
var isStandardStimulis = false;
var q_type;
var testType;



window.onload = function(){
	console.log("Initializing");
	if (document.getElementById("q_category")){
		q_type = document.getElementById("q_category").innerHTML;
	}

	if (document.getElementById("target_value")){
		targetValue = document.getElementById("target_value").innerHTML;
	}

	if (document.getElementById("test_type")){
		testType = document.getElementById("test_type").innerHTML;
		console.log("test type: " + testType);
		switch(parseInt(testType)) {
			case 0: //control
				stimProbability = 100000;
			    break;
			case 1: // standardStimulis (positive)
				isStandardStimulis = true;
				changeStimulis(true);
				break;
			case 2: // dynamic stimulis
			    break;
			case 3:
				isNegativeTest = true;
				break;
			default:   
		}
	} else{
		testType = 0;
		isNegativeTest = false;
	}

	if (q_type == "range") test = new flashForRange("value");

	// Initialize constants
	var numOptionsElem = document.getElementById("num-image");
	numRegOpts = parseInt(numOptionsElem.innerHTML);
	numStim = parseInt(document.getElementById("num-stim").innerHTML);
	numOptions = numRegOpts;
	numRecentOptsToStore = numRegOpts/(2.5);
	numRecentStimToStore = numStim/(2.5);

	// Disable start button
	var submitButton = document.getElementById("submit-btn");
	submitButton.disabled = true;
	setTimeout(function(){submitButton.disabled = false;}, 5000);

	// Populate Images: control
	for (i=0; i<numRegOpts; i++){
		var id = "cycle-"+i;
		options[i] = document.getElementById(id);
		options[i].style.display = "none";
	}

	// Populate Images: stimuli
	for (i=0; i<numStim; i++){
		var id = "pos-"+i;
		posOptions[i] = document.getElementById(id);
		id = "neg-" + i;
		negOptions[i] = document.getElementById(id);
	}

	setInterval(function(){flashStim()}, timeInterval);
	
}



// Randomly generates stimuli based on globally defined probability
function flashStim(){
	if (q_type == "choice") flashForSelect();

	var isStimulis =Math.floor((Math.random() * stimProbability * 100));
	if (isStimulis >= 100){
		flashStimulis(false);
	} else{
		flashStimulis(true);
	}


}

function flashStimulis(shouldBeStim){

	// counter used to make sure the same images are not repeated
	if (!shouldBeStim){
		counter++;
		var optionToFlash=Math.floor((Math.random() * numOptions));
		

		while (recentOptions.indexOf(optionToFlash) >= 0 ){
			optionToFlash = Math.floor((Math.random() * numOptions));
		}
		recentOptions[counter % numRecentOptsToStore] = optionToFlash;


		options[optionToFlash].style.display = "block";
		setTimeout(function(){options[optionToFlash].style.display = "none"}, timeInterval);
	} 
	// separate counter used to make sure the same stimuli are not repeated
	else{
		stimcounter++;
		var optionToFlash=Math.floor((Math.random() * numStim));
		while (recentStimOptions.indexOf(optionToFlash) >= 0 ){
			optionToFlash = Math.floor((Math.random() * numStim));
		}
		recentStimOptions[stimcounter % numRecentStimToStore] = optionToFlash;

		// Shows positive or negative img based on current state
		if (stateIsPositive){
			console.log("flashing positive");
			posOptions[optionToFlash].style.display = "block";
			setTimeout(function(){posOptions[optionToFlash%numStim].style.display = "none"}, timeInterval);
		} else{
			console.log("flashing negative");

			negOptions[optionToFlash].style.display = "block";
			setTimeout(function(){negOptions[optionToFlash%numStim].style.display = "none"}, timeInterval);
		}
	}
}




function changeStimulis(isPositive){
	if (stateIsPositive == isPositive){
		return;
	}

	console.log("reerse state");
	stateIsPositive = isPositive;
}


function flashForRange(rangeId) {
	this.rangeSlider = document.getElementById(rangeId);
	// console.log(this.rangeSlider);
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
	target = parseInt(document.getElementById("target_value").innerHTML);


	if (!testType) return;// control
	if (isStandardStimulis) {
		changeStimulis(true);
		return;
	}

	if (isNegativeTest){
		changeStimulis(false);
		stimProbability = Math.abs(1.0*target/(1.0*target - value))*1;
		// console.log("stimProbability: " + stimProbability);
		stimProbability *= stimProbability;
		stimProbability += 5;
		return;
	}

	console.log("changing slider value. value:" + value + "  target: " + target);
	if(value < target){
		changeStimulis(true);
	}else if (value > target){
		changeStimulis(false);
	}


}

function flashForSelect(){
	// console.log("choice")

	if (!testType) return;
	if (isStandardStimulis) {
		changeStimulis(true);
		return;
	}
	i = 1;
	q_num = document.getElementById("q_num").innerHTML;
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
		stimProbability = 20;
	} else{
		changeStimulis(true);
	}
}


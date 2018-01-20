var wordbank = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
"Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",
"Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde",
"Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark",
"Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
"Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands",
"Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia",
"Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala",
"Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary",
"Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
"Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos",
"Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
"Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania",
"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco",
"Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia",
"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama",
"Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar",
"Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino",
"Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
"Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis",
"St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland",
"Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
"Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda",
"Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela",
"Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

var guesses=7;
var options = [];
var done = false;
var correct = false;



function getWord(arr){
	var word = arr[Math.floor(Math.random()*arr.length)];
	word = word.toLowerCase();
	return word;
}

function isContainedIn(letter,word,options){
	var adresses = [];
	for (var i=0; i<(word.length-1); i++){
		if (word[i] === letter) {
			adresses.push(i);
			}
		}	
	if (adresses.length = 0){
		return false;
	}
	else{
		for (var j=0; j<adresses.length;j++){
			options[j]= letter;
			return options;
		}
	}
}
function displayWord(word){
	var emptyArr=[];
	for (var i=0;i<word.length;i++){
		emptyArr.push('_')
	}
	return emptyArr;
}

// function guessesLeft(){
// 	return guesses;
// }
// function updateGuesses(){
// 	guesses --;
// }
// function resetGuesses(){
// 	guesses = 6;
// }
function isDone(){
	done =true;
}
function createOptions(word){
	console.log(word);
	for (var i =0;i< word.length ; i++){
		options.push('_')

	}
	return options;
}
function incorrectAnswer(){
	guesses = guesses-1;
}
// function updateOptions(key, word){
// 	console.log(this);
// 	var update = isContainedIn(key,word);
// 	if (update){
// 		for (var i = 0;i<update.length;i++){
// 			//overwriting the original element.  update[i]: index, key: character
// 			options[update[i]] = key;
// 		}
// 	}
// }

	var word = getWord(wordbank);
	var blanks = createOptions(word);
//var userText = document.getElementById("user-text");
//console.log(userText);
// document.onkeyup = function(event){
// 	//choose word and assign to local variable
// 	//console.log(wordbank);
// 	console.log(blanks);

// 	if (guesses !== 0 || done === false){
		
// 		//create the ------ based on # of letters in mystery word
		
// 		console.log(blanks);
// 		//storing the user input in variable w/ key listener and loggin it to console

// 		console.log(event.key);
// 		console.log('you chose '+ event.key);

// 		//checking to see if the guess is right,
// 		if (isContainedIn(event.key,word,blanks)){
// 			console.log(blanks);
			
// 			//conditional to check if all the letters have been guessed.  if so done is now true

// 		}else{ //if guess is incorrect, guesses are updated and displayed
// 			updateGuesses();
// 			console.log('you have '+guessesLeft()+' guesses left');
// 		}
// 		if (isContainedIn('_',word)===false){
// 			isDone();

// 		}
// 		var html = 
// 			'<p> you chose: '+event.key+'</p>';
// 			'<p> progress: '+options+'</p>';
// 			'<p> guesses: '+guesses+'</p>';



// 	}

// }

document.onkeyup = function(event){

    //choose word and assign to local variable
    for (var i = 0; i < word.length; i++){
        if (event.key == word[i]){
            options[i] = event.key;
            correct = true;
        }
        // else {
        // 	// console.log(guesses);
        //  //    incorrectAnswer();
        //  //    console.log(guesses);
        //     if (guesses === 0){
        //         //isDone();
        //     }
        // }
        if (options.join("") === word ) {
            isDone();
        }
    }
    if (correct ===false){
    	incorrectAnswer();
    }
    correct = false;



    var html =
        '<p><h3> you chose: '+ event.key +'</h3></p>' +
        '<p><h3> progress: '+ options +'</h3></p>' +
        '<p><h3> guesses: '+ guesses +'</h3></p>'+
        '<p><h3> done: '+ done +'</h3></p>'
        document.getElementById("game").innerHTML = html;

}
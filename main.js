$(document).ready(function(){
	
	var threeLetters = commonWords.filter(function(word){
		return word.length >= 3

	}) 
	var chooseRandomWord =  
	  threeLetters[Math.floor(Math.random() * threeLetters.length -1 )];
	

	console.log(chooseRandomWord)

	function letterLength(arr) {
		let word = ""
		arr.map(function(item){
			word += "_"
		})
		$('#wordBlank').html(word)
	}

	var char = ""

	var tries = 9

	var guessWord = '' 
	for(let i = 0; i < chooseRandomWord.length; i++){
		guessWord += '_'
	}
	$('#wordBlank').html(guessWord)

	var guesses = [] 

	$("#guess").on('change',function(){
		char = $('#guess').val()
		char = char.toLowerCase()
		guesses.push(char)
		$("#letters").html(`${guesses} `)

		tries --

		for (i = 0; i < guessWord.length; i++) { 
  			if (chooseRandomWord.charAt(i) === char) {
  				wordArr = guessWord.split("")
  				wordArr[i] = char
  				guessWord = wordArr.join("")

  			}
  			$('#wordBlank').html(guessWord)
  			var results = ""

			if (tries >= 0 && chooseRandomWord === guessWord) {
			  results = "You won!"
			  break;

			}else if(tries > 0 && chooseRandomWord !== guessWord){
				results = "Guess again!"
				$('#guess').val('')

			} else {
			  results = `Game over! The word was "${chooseRandomWord}"`
			}
		
		}

		$('#turns').html(`Turns Left: ${tries}`)
		$("#results").html(results)
	})

	

})


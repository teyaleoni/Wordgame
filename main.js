$(document).ready(function(){
	function chooseRandomWord(arr) {
	  return arr[Math.floor(Math.random() * arr.length -1 )];
	}

	var threeLetters = commonWords.filter(function(word){
		return word.length >= 3

	}) 

	function letterLength(arr) {
		let word = ""
		arr.map(function(item){
			word += "_"
		})
		$('#wordBlank').html(word)
	}

	var wordArr = chooseRandomWord(threeLetters).split("")
	
	letterLength(wordArr)

	console.log(wordArr)

	var char = ""

	var tries = 9


	var guesses = [] //this is one letter only
	$("#guess").on('change',function(){
		char = $('#guess').val()
		char = char.toLowerCase()
		var guessWord = wordArr.map(function(){
			return "_"
		})
		guesses.push(char)
		$("#letters").html(guesses)

		console.log(guessWord)

		

		for (i = 0; i < chooseRandomWord.length; i++) { 
  			if ( wordArr[i] === char) {
  				guessWord[i] = char
  				$('#wordBlank').html(guessWord.join(''))

  			}
  			var results = ""
			if ( chooseRandomWord === guessWord) {
			  results = "You won!"
			}else if(chooseRandomWord !== guessWord){
				results = "Guess again!"
			} else {
			  results = "That wasn't the word, try again!"
			}
		}

		$('#turns').html(`Turns Left: ${tries}`)
		tries --

		$("#results").html(results)
	})

	

})


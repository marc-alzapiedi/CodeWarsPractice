// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    
    let sCase = s.toLowerCase()
    while(/(.).*\1/.test(sCase)){
        let arr = Array.from(sCase)
        let newArr = arr.filter(char => 
            char !== /(.).*\1/.exec(sCase)[1]
        )
        sCase = newArr.toString()
        console.log(sCase)

        

    }
    // console.log(s[s.indexOf(sCase)], sCase[0])

    if(sCase.length > 1){

        if (sCase[0] !== s[s.indexOf(sCase[0])]){
            return(sCase[0].toUpperCase())
        }
        return(sCase[0])
    }


    if(sCase !== s[s.indexOf(sCase)]){
        return(sCase.toUpperCase())
    }

    return(sCase)
    // Add your code here
}

console.log(firstNonRepeatingLetter("Hi, this is a replication of a letter case"))
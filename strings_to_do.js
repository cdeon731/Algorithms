// Remove Blanks
function removeBlanks(string){
    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            newString += string[i]
        }
    }
    return newString
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

// Get Digits
function getDigits(string){
    let numberString = ""
    for(let char in string){
        if(!isNaN(string[char])){
            numberString += string[char]
            console.log(numberString)
        }
    }
    return Number(numberString)
}

// console.log(getDigits("abc8c0d1ngd0j0!8"))
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// Acronyms
function acronym(string){
    let array = string.split(' ')
    let newString = ""
    for(let word in array){
        if(array[word].length > 0){
            newString += array[word][0].toUpperCase()
        }
    }
    return newString
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "))
// console.log(acronym("Live from New York, it's Saturday Night!"))

// Count Non-Spaces
function countNonSpaces(string){
    let count = 0
    for(let char in string){
        if(string[char] != " "){
            count++
        }
    }
    return count
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))
// console.log(countNonSpaces("Hello world !"))

// Remove Shorter Strings
function removeShorterStrings(array, value){
    let newArray = []
    let newIndex = 0
    for(let val in array){
        if(array[val].length >= value){
            newArray[newIndex++] = array[val]
        }
    }
    return newArray
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
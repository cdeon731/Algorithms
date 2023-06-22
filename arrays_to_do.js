// PUSH FRONT
function pushFront(array, value){
    for(let i = array.length; i >= 0; i--){
        array[i] = array[i-1];
    }
    array[0] = value;
    return array
}

// console.log(pushFront([5, 7, 2, 3], 8))
// console.log(pushFront([99], 7))

// POP FRONT
function popFront(array){
    let value =  array[0]
    for(let i = 0; i < array.length; i++){
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    console.log(array)
    return value
}

// console.log(popFront([0, 5, 10, 15]))
// console.log(popFront([4, 5, 7, 9]))

// INSERT AT
function insertAt(array, index, value){
    for(let i = array.length; i >= index; i--){
        array[i] = array[i-1]
    }
    array[index] = value
    return array
}

// console.log(insertAt([100,200,5], 2, 311))
// console.log(insertAt([9,33,7], 1, 42))

// BONUS: REMOVE AT
function removeAt(array, index){
    let value = array[index]
    for(let i = index; i < array.length; i++){
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    console.log(array)
    return value
}

// console.log(removeAt([1000,3,204,77], 1))
// console.log(removeAt([8,20,55,44,98], 3))

// BONUS: SWAP PAIRS
function swapPairs(array){
    for(let i = 0; i < array.length; i+=2){
        if(array[i+1] == null){
            break
        }
        else{
            let evenValue = array[i]
            array[i] = array[i+1]
            array[i+1] = evenValue
        }
    }
    return array
}

// console.log(swapPairs([1,2,3,4]))
// console.log(swapPairs(["Brendan",true,42]))

// BONUS: REMOVE DUPLICATES
function removeDupes(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i + 1]){
            value = i 
            for(let i = value; i < array.length; i++){
                array[i] = array[i+1]
            }
            array.length = array.length - 1
            i -= 1 // repeats the same index in the initial for loop
        }
    }
    return array
}

// console.log(removeDupes([-2,-2,3.14,5,5,10]))
// console.log(removeDupes([9,19,19,19,19,19,29]))
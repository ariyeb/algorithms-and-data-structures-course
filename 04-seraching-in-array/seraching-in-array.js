function simpleSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}
// O(n)

// console.log(simpleSearch([2, 7, 3, 4, 1, 0], 4))

function binarySearch(arr, val) {
    if (arr.length === 0) return -1;
    let leftpointer = 0, rightPointer = arr.length - 1, guessIndex = Math.floor((rightPointer) / 2);

    while (arr[guessIndex] !== val && leftpointer <= rightPointer) {
        console.log(leftpointer, guessIndex, rightPointer);
        if (arr[guessIndex] < val) leftpointer = guessIndex + 1;
        else rightPointer = guessIndex - 1;
        guessIndex = Math.floor((rightPointer - leftpointer) / 2) + leftpointer;
    }

    return arr[guessIndex] === val ? guessIndex : -1;
}

console.log(binarySearch([2, 4, 6, 8, 10, 17, 26], 6));;

// O(log n)
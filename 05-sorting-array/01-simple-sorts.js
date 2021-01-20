function swapTwoelementsInArray(arr, i1, i2) {
    const el1Val = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = el1Val;
}
// function swapTwoelementsInArray(arr, i1, i2) {
//     [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
// }

function bubbleSort(arr) {
    let isSwap = true;
    for (let i1 = arr.length - 1; i1 >= 0 && isSwap; i1--) {
        isSwap = false;
        for (let i2 = 0; i2 < i1; i2++) {
            if (arr[i2] > arr[i2 + 1]) {
                swapTwoelementsInArray(arr, i2, i2 + 1);
                isSwap = true;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i1 = 0; i1 < arr.length - 1; i1++) {
        console.log(arr);
        let minValIndex = i1;
        for (let i2 = i1 + 1; i2 < arr.length; i2++) {
            if (arr[i2] < arr[minValIndex]) minValIndex = i2;
        }
        if (minValIndex !== i1) swapTwoelementsInArray(arr, i1, minValIndex);
    }
    return arr;
}

function insertionSort(arr) {
    for (let i1 = 1; i1 < arr.length; i1++) {
        console.log(arr);
        let currentVal = arr[i1];
        let i2 = i1 - 1;
        for (; i2 >= 0 && arr[i2] > currentVal; i2--) {
            arr[i2 + 1] = arr[i2];
        }
        arr[i2 + 1] = currentVal;
    }
    return arr;
}

// console.log(bubbleSort([7, 2, 5, 9, 6]));
// console.log(selectionSort([7, 2, 5, 9, 6]));
// console.log(insertionSort([7, 2, 5, 9, 6]));

// Algorithm 	Time Complexity(Best) 	Time Complexity(Average) 	Time Complexity(Worst) 	Space Complexity
// Bubble Sort 	    O(n) 	            O(n**2) 	                    O(n**2) 	                O(1)
// Insertion Sort 	O(n) 	            O(n**2) 	                    O(n**2) 	                O(1)
// Selection Sort 	O(n**2)             O(n**2) 	                    O(n**2) 	                O(1)







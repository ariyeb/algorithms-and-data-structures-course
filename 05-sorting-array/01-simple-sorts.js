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

console.log(bubbleSort([7, 2, 5, 9, 6]));


2, 5, 6, 7, 9;

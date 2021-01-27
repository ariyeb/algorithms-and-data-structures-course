function swapTwoelementsInArray(arr, i1, i2) {
    const el1Val = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = el1Val;
}

function mergeTwoSortedArrays(arr1, arr2) {
    let i1 = 0, i2 = 0;
    const sortedarr = [];
    while (i1 !== arr1.length || i2 !== arr2.length) {
        if (
            (i2 === arr2.length || arr1[i1] <= arr2[i2]) &&
            i1 < arr1.length
        ) {
            sortedarr.push(arr1[i1]);
            i1++;
            continue;
        }

        if (
            (i1 === arr1.length || arr2[i2] < arr1[i1]) &&
            i2 < arr2.length
        ) {
            sortedarr.push(arr2[i2]);
            i2++;
        }
    }
    return sortedarr;
}
// console.log(mergeTwoSortedArrays([3, 6, 8], [1, 5, 9, 18]));


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const halfArrLen = Math.floor(arr.length / 2);
    const sortedHalf1 = mergeSort(arr.slice(0, halfArrLen));
    const sortedHalf2 = mergeSort(arr.slice(halfArrLen));
    console.log(sortedHalf1, sortedHalf2);

    return mergeTwoSortedArrays(sortedHalf1, sortedHalf2);
}

// console.log(mergeSort([2, 6, 9, 5, 18, 4, 23, 7]));


// 8, 4, 2, 10, 5, 7
// 8, 4, 2,    10, 5, 7

// 8,    4, 2,        10,    5, 7

// []  [8],    [4],    [2],        [10],  []          [5],   [7]

// [8]  ,  [2,4],             [10]    , [5,7]

// [2,4,8],    [5,7,10]

// [2,4,5,7,8,10]

// Time Complexity (Best) 	Time Complexity (Average) 	Time Complexity (Worst)
// O(n log n) 	            O(n log n) 	                O(n log n) 	  

// הפונקציה "ציר" בוחר באלמנט הראשון כציר ועוברת על כל האלמנטים במערך
// לפונקציה יש משתנה של מיקום הציר וכל פעם שהיא מגיעה לאלמנט שקטן מהציר
// היא מחליפה בין אותו האלמנט לאלמנט שבמיקום הציר
// מיקום הציר תמיד באלמנט האחרון שהוחלף
// ולפני החילוף הוא עובר לאלמנט הראשון שגדול מהציר
// בסוף מתבצע חילוף בין האלמנט הראשון(הציר) לאלמנט שבמיקום הציר
// שהוא האלמנט האחרון שקטן מהציר
// הפונקציה מחזירה את המיקום הסופי של הציר

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
    if (arr.length <= 1) return 0;

    let pivotPosition = startIndex;
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < arr[startIndex]) {
            pivotPosition++;
            swapTwoelementsInArray(arr, i, pivotPosition);
        }
    }

    if (pivotPosition === startIndex) return startIndex;

    swapTwoelementsInArray(arr, startIndex, pivotPosition);
    return pivotPosition;
}
let arr = [4, 7, 3, 6, 1, 5, 2];
// console.log(pivot(arr));
// console.log(arr);

function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex < endIndex) {
        const pivotPosition = pivot(arr, startIndex, endIndex);
        quickSort(arr, 0, pivotPosition - 1);
        quickSort(arr, pivotPosition + 1, endIndex);
    }

    return arr;
}
// console.log(quickSort(arr));

// 3, 1, 2   |4|,  7, 6, 5m 
// 1,2   |3|          6,5,      |7|
// |1|,2                5 |6|,

// Time Complexity(Best) 	Time Complexity(Average) 	Time Complexity(Worst)
// O(n log n) 	            O(n log n) 	                O(n**n)

function getDigit(num, position) {
    const stringNum = String(num);
    const digit = parseInt(stringNum[stringNum.length - 1 - position]);
    return isNaN(digit) ? 0 : digit;
}

function getMaxdigits(numsArr) {
    let maxDigits = 0;
    for (let num of numsArr) {
        const digitsCount = String(num).length;
        if (digitsCount > maxDigits) maxDigits = digitsCount;
    }
    return maxDigits;
}

function radixSort(numsArr) {
    const maxDigitscount = getMaxdigits(numsArr);
    for (let digitPosition = 0; digitPosition < maxDigitscount; digitPosition++) {
        const digitsArr = [[], [], [], [], [], [], [], [], [], []];
        for (let num of numsArr) {
            const digit = getDigit(num, digitPosition);
            digitsArr[digit].push(num);
        }
        numsArr = [].concat(...digitsArr);
    }
    return numsArr;
}

// console.log(radixSort([3, 78, 54, 815, 20188, 23, 9, 321]));

// Time Complexity (Best) 	Time Complexity (Average) 	Time Complexity (Worst)
// O(nk) 	                O(nk) 	                    O(nk) 	 

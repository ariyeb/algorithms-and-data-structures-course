// צרו פונקציה שמקבלת מערך של מספרים ועוד פרמטר - מספר
// הפונקציה צריך לחשב מהו רצף האלמנטים שאורכו כמו המספר בעל הסכום הכי גבוה ולהחזיר את הסכום

const maxSubarraySum = (numsArray, subElementsCount) => {
    if (subElementsCount > numsArray.length) return null;
    let maxSum = 0;
    for (let i1 = 0, i2 = subElementsCount; i2 - 1 < numsArray.length; i1++, i2++) {
        const subArray = numsArray.slice(i1, i2);
        const subArraySum = subArray.reduce((a, b) => a + b);

        if (maxSum < subArraySum) {
            maxSum = subArraySum;
        }
    }

    return maxSum;
};
// O(n^2)


function maxSubarraySumSlidingWindow(numsArray, subElementsCount) {
    if (subElementsCount > numsArray.length) return null;

    let windowSum = 0;
    for (let i = 0; i < subElementsCount; i++)
        windowSum += numsArray[i];

    let maxSum = windowSum;

    for (let i = 1; i <= numsArray.length - subElementsCount; i++) {
        windowSum = windowSum - numsArray[i - 1] + numsArray[i + subElementsCount - 1];

        if (windowSum > maxSum) maxSum = windowSum;
    }

    return maxSum;
}
// O(n)


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 1));

console.log(maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 1));


// // כתבו פונקציה שמקבלת מערך של מספרים ומספר
// ובודקת מהו רצף המספרים הפנימי הקטן ביותר שהסכום שלו שלווה או גדול מהמספר ומחזירה את גודל הרצף הקטן;
// [1, 2, 5, 2, 8, 1, 5, 12, 3], 14 
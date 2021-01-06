// צרו פונקציה שמקבלת שני מערכים של מספרים שלמים חיוביים
// הפונקציה בודקת האם לכל(!!!!) אלמנט במערך הראשון יש מקבילה בריבוע במערך השני
// // [1, 4, 4][16, 1, 16]
// // [1, 4, 2][16, 1, 16]

function isSeconedArraySquared(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let num of arr1) {
        const squaredNum = num ** 2;
        const squaredNumIndex = arr2.indexOf(squaredNum);
        if (squaredNumIndex === -1) return false;
        arr2.splice(squaredNumIndex, 1);
    }

    return true;
}

// console.log(isSeconedArraySquared([1, 4, 4], [16, 16, 1]));
// console.log(isSeconedArraySquared([1, 4, 4], [16, 1, 1]));
// O(n^2)

function isSeconedArraySquaredSecondVersion(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const arr1FC = {};
    const arr2FC = {};
    for (let i = 0; i < arr1.length; i++) {
        arr1FC[arr1[i]] = (arr1FC[arr1[i]] || 0) + 1;
        arr2FC[arr2[i]] = (arr2FC[arr2[i]] || 0) + 1;
    }
    // console.log(arr1FC, arr2FC);
    for (let num in arr1FC) {
        if (!(num ** 2 in arr2FC)) return false;
        if (arr1FC[num] !== arr2FC[num ** 2]) return false;
    }
    return true;
}
// console.log(isSeconedArraySquaredSecondVersion([1, 4, 4], [16, 16, 1]));
// console.log(isSeconedArraySquaredSecondVersion([1, 4, 4], [16, 1, 1]));
// O(n)

// צרו פונקציה שמקבלת שתי מחרוזות ובודקת האם הן אנגרמות
// "aba" "aab" 

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const str1CharsCounter = {};
    const str2CharsCounter = {};

    for (let i = 0; i < str1.length; i++) {
        str1CharsCounter[str1[i]] = (str1CharsCounter[str1[i]] || 0) + 1;
        str2CharsCounter[str2[i]] = (str2CharsCounter[str2[i]] || 0) + 1;
    }

    for (let char in str1CharsCounter) {
        if (!(char in str2CharsCounter)) return false;
        if (str1CharsCounter[char] !== str2CharsCounter[char]) return false;
    }

    return true;
};

// צרו פונקציה שמקבלת מספר פרמטרים לא ידוע פרימטיביים ובודקת האם יש כפילות של אחד הפרמטרים

function areThereDuplicates(...args) {
    const FC = {};
    for (let arg of args) {
        if (FC[arg]) return true;
        FC[arg] = true;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 3, 2));
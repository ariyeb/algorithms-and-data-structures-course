function addupTo(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
// O(n)
// O(1) space

function addUpToVersion2(num) {
    return num * (num + 1) / 2;
}
// O(1)

// let t1 = Date.now();
// console.log(addupTo(10000000000));
// console.log("first addUpTo:", Date.now() - t1);
// t1 = Date.now();
// console.log(addUpToVersion2(10000000000));
// console.log("second addUpTo:", Date.now() - t1);

function getMulTable(num) {
    let result = "";
    for (let i1 = 1; i1 <= num; i1++) {
        for (let i2 = 1; i2 <= num; i2++) {
            result += i1 * i2 + " ";
        }
        result += "\n";
    }
    return result;
}

// O(n^2)
// O(n) space

function getMulTable(num) {
    let sum = 0;
    for (let i1 = 1; i1 <= num; i1++) {
        for (let i2 = 1; i2 <= num; i2++) {
            sum += i1 * i2;
        }
    }
    return sum;
}

// O(n^2)
// O(1) space

// console.log(getMulTable(15));

function logAtleast5Times(num) {
    const loopsCounter = Math.max(num, 5);
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
}
// O(n)

function logAtMost5Times(num) {
    const loopsCounter = Math.min(num, 5);
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
    for (let i = 0; i < loopsCounter; i++) {
        console.log(i);
    }
}
// O(1)

// O(log n)
//  log (8) = 3 => 2^3 = 8

// 2 1
// 4 2
// 8 3
// 16 4
// 32 5
// 64 6
// 128 7

// אובייקטים
// גישה הסרה הכנסה
// O(1)
// חיפוש
// O(n)

// Object.keys Object.values Object.entries
// O(n)
// hasOwnProperty
// O(1)

// מערכים
// הכנסה והוצאה
// push pop
// O(1)
// shift unshift
// O(n)
// קריאה
// O(1)
// concat
// O(n)
// slice splice
// O(n)
// sort
// O(n log n)
// forEach map filter
// O(n)

// space complexity
// פרימיטיביים
// O(1) space

//  מחרוזות אובייקטים ומערכים
// O(n) space

function returnNumsArray(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
// O(n) space


//  צרו פונקציה שמקבלת מערך בסדר עולה של מספרים שלמים ומחזירה אמת אם יש שני אלמנטים שסכומם אפס היא מחזירה מערך של שניהם

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (arr[left] === 0 || arr[right] === 0) return;
        else if (sum > 0) right--;
        else left++;
    }
}

console.log(sumZero([-3, -2, 0, 1, 2, 7]));

// צרו פונקציה שמקבלת שתי מחרוזות ומחזירה
// true
// במקרה שהמחרוזת השנייה מכילה את המחרוזת הראשונה באותו סדר תווים גם אם יש עוד תווים באמצע
// sing string true
// acc acabbb false
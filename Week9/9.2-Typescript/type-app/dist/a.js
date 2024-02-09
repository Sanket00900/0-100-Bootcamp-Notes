"use strict";
function findMax(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}
let num = [1, 2, 4, 5, 6];
console.log(`Max element : ${findMax(num)}`);

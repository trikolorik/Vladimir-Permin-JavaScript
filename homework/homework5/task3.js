function arrSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        }
    }
    return arr
}

console.log(arrSort([2, 5, 1, 3, 4]))
console.log(arrSort([12, 33, 3, 44, 100]))
console.log(arrSort([0, 1]))
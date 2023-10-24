function generateOrderedArray(count){
    let result = []
    for (let i = 0; i < count; i++){
        result[i] = i + 1
    }
    return result
}

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

let takeIndex = (array, n) =>
    array.indexOf(n) === -1 ? 'Элемент не найден' : array.indexOf(n)

let test1 = shuffle(generateOrderedArray(5))
let test2 = shuffle(generateOrderedArray(7))
let test3 = shuffle(generateOrderedArray(3))

console.log(test1, takeIndex(test1, 3))
console.log(test2, takeIndex(test2, 1))
console.log(test3, takeIndex(test3, 7))


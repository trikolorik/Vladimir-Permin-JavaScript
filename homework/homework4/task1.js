function getRandomFromSegment(n, m){
    let minimum = Math.min(n, m)    
    let maximum = Math.max(n, m)
    return Math.random() * (maximum - minimum) + minimum
}

function generateRandomArray(n, m, count){
    let result = []
    for (let i = 0; i < count; i++){
        result[i] = getRandomFromSegment(n, m)
    }
    return result
}

console.log(generateRandomArray(0, 100, 100))
console.log(generateRandomArray(2, 5, 50))
console.log(generateRandomArray(100, -5, 70))
console.log(generateRandomArray(-3, -10, 42))
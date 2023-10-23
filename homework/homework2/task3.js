function getRandomFromSegment(n, m){
    let minimum = Math.min(n, m)    
    let maximum = Math.max(n, m)
    return Math.random() * (maximum - minimum) + minimum
}

n = getRandomFromSegment(-10, 100)
m = getRandomFromSegment(-100, 10)

console.log(n, m)
console.log(n > m)
console.log(n < m)
console.log(n >= m)
console.log(n >= m)
console.log(n === m)
console.log(n !== m)
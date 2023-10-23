function getSquare(x1, y1, x2, y2){
    return Math.abs(x1 - x2) * Math.abs(y1 - y2)
}

console.log(getSquare(2, 3, 10, 5))
console.log(getSquare(10, 5, 2, 3))
console.log(getSquare(-5, 8, 10, 5))
console.log(getSquare(5, 8, 5, 5))
console.log(getSquare(8, 1, 5, 1))

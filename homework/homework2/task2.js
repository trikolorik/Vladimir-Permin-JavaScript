function getFraction(a, n){
    return Math.floor(a % 1 * 10 ** n)  //Math.floor() необходима, т.к. a % 1 возвращает значение с погрешностью
}

let a1 = getFraction(13.123456789, 5)
let b1 = getFraction(2.123, 5)
console.log(a1)
console.log(b1)
console.log(a1 > b1)
console.log(a1 < b1)
console.log(a1 >= b1)
console.log(a1 <= b1)
console.log(a1 === b1)
console.log(a1 !== b1)

let a2 = getFraction(13.890123, 2)
let b2 = getFraction(2.891564, 2)
console.log(a2)
console.log(b2)
console.log(a2 > b2)
console.log(a2 < b2)
console.log(a2 >= b2)
console.log(a2 <= b2)
console.log(a2 === b2)
console.log(a2 !== b2)


let a3 = getFraction(13.890123, 3)
let b3 = getFraction(2.891564, 3)
console.log(a3)
console.log(b3)
console.log(a3 > b3)
console.log(a3 < b3)
console.log(a3 >= b3)
console.log(a3 <= b3)
console.log(a3 === b3)
console.log(a3 !== b3)
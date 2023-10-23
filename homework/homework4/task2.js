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

  console.log(shuffle(generateOrderedArray(5)))
  console.log(shuffle(generateOrderedArray(7)))
  console.log(shuffle(generateOrderedArray(3)))
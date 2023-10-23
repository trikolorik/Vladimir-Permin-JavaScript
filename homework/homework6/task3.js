function filter(arr, key, value){
    let result = new Array
    for (let i = 0; i < arr.length; i++){
        if (arr[i][key] == value){
            result.push(arr[i])
        }
    }
    return result
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

console.log(filter(objects, 'name', 'Иван'))
function getOlderUserArray(arr){
    let maxAge = -1
    let olderUser = ''
    for (let i = 0; i < arr.length; i++){
        if (arr[i].age > maxAge){
            maxAge = arr[i].age
            olderUser = arr[i].name
        }
    }
    return olderUser
}

let allUsers = [
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

console.log(getOlderUserArray(allUsers))
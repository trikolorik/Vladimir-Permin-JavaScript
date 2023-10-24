function createStudentCard(student, tag){
    let studentCard = document.createElement(tag);
    let h2 = document.createElement('h2')
    let span = document.createElement('span')

    h2.textContent = student.name
    span.textContent = `Возраст ${student.age} лет`

    studentCard.append(h2, span)

    return studentCard
}

function createStudentsList(listArr){
    let studentsList = document.createElement('ul')

    for (let i = 0; i < listArr.length; i++){
        studentsList.append(createStudentCard(listArr[i], 'li'))
    }

    document.body.append(studentsList)
}

let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

const button = document.getElementById('show-button')

button.addEventListener('click', function() {
    createStudentsList(allStudents)
})



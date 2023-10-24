function createStudentCard(student){
    let studentCard = document.createElement('div');
    let h2 = document.createElement('h2')
    let span = document.createElement('span')

    h2.textContent = student.name
    span.textContent = `Возраст ${age} лет`

    studentCard.append(h2, span)
    document.body.append(studentCard);
}

let studentObj={
    name: 'Игорь',
    age: 17
}

createStudentCard(studentObj) 
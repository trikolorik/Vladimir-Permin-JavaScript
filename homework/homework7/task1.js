function createStudentCard(name, age){
    let studentCard = document.createElement('div');
    let h2 = document.createElement('h2')
    let span = document.createElement('span')

    h2.textContent = name
    span.textContent = 'Возраст:' + ' ' + age + ' ' + 'лет'

    studentCard.append(h2, span)
    document.body.append(studentCard);
}

createStudentCard('Игорь', 17);
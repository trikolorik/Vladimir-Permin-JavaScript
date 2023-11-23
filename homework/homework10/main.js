const students = [
    {
        name: 'Баязитов',
        surname: 'Егор',
        patronymic: 'Устинович',
        birthdate: new Date('1998-11-15'),
        yearOfBeginning: 2017,
        faculty: 'Матмех'
    },
    {
        name: 'Дронов',
        surname: 'Андрей',
        patronymic: 'Дмитриевич',
        birthdate: new Date('2001-03-19'),
        yearOfBeginning: 2022,
        faculty: 'ИРИТ'
    },
    {
        name: 'Пригожин',
        surname: 'Евгений',
        patronymic: 'Викторович',
        birthdate: new Date('2005-06-01'),
        yearOfBeginning: 2023,
        faculty: 'ИНМиТ'
    },
    {
        name: 'Байденчук',
        surname: 'Иосиф',
        patronymic: 'Робертович',
        birthdate: new Date('1942-11-20'),
        yearOfBeginning: 2017,
        faculty: 'УГИ'
    },
    {
        name: 'Светов',
        surname: 'Никита',
        patronymic: 'Максимович',
        birthdate: new Date('2004-09-18'),
        yearOfBeginning: 2022,
        faculty: 'Горный'
    },
];

// Функция для добавления нового студента
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefalt(); // Предотвращение стандартного поведения формы

    const form = document.getElementById('studentForm');


    students.push(result)
    // Валидация данных и добавление в массив
    const newStudent = {
        name: name,
        surname: surname,
        patronymic: patronymic,
        birthdate: birthday,
        yearOfBeginning: year,
        faculty: faculty
    };

    student.push(newStudent)
    // Очистка полей формы
});


// Функция для отображения студентов в таблице
function displayStudents() {
    // Отображение данных в таблице
    const tableBody = document.querySelector(".table-body")

    for (let i = 0; i < students.length; i++) {
        let td;
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        addElementToRow(td, tr, `${students[i].name} ${students[i].surname} ${students[i].patronymic}`);
        addElementToRow(td, tr, students[i].faculty);
        addElementToRow(td, tr, `${getCorrectDateAndAge(students[i].birthdate)}`);
        addElementToRow(td, tr, students.name);
    }
}

// Функция для применения фильтров
function applyFilters() {
    // Получение значений фильтров

    // Применение фильтров к массиву студентов и обновление таблицы
}

function addElementToRow(td, tr, el) {
    td = document.createElement('td');tr.appendChild(td);
    td.textContent = el;
}

function getCorrectDateAndAge(date) {
    const day = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = `${date.getMonth()}`.length === 1 ? `0${date.getMonth()}` : `${date.getMonth()}`;
    const year = date.getFullYear();
    const currentDate = new Date();
    // дописать логику определения словв "лет", "год", "года"
    const age = currentDate.getFullYear() - date.getFullYear();
    return `${day}.${month}.${year} (${age} ${wordToCorrectForm(age)})`;
}

function wordToCorrectForm(num) {
    const lastDigit = Number(num.toString().slice(-1));
    if (lastDigit === 1) {
        return 'год'
    }
    else if (lastDigit >= 2 && lastDigit <= 4 && lastDigit !== 12 && lastDigit !== 13 && lastDigit !== 14) {
        return 'года'
    }
    else {
        return 'лет'
    }
}

function 

displayStudents()
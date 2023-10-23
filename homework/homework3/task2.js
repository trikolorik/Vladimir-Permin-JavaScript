function nameToCorrectForm(name){
    return name[0].toUpperCase() + name.substring(1).toLowerCase()
}

userName = 'жеНя'
userSurname = 'ПриГОжиН'

correctUserName = nameToCorrectForm(userName)
correctUserSurname = nameToCorrectForm(userSurname)

console.log(correctUserName + ' ' + correctUserSurname)
console.log((userName == correctUserName || userSurname == correctUserSurname) ? 'Имя осталось без изменений' : 'Имя было преобразовано')
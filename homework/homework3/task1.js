function isPasswordCorrect(password){
    if ((password.includes('_') || password.includes('-')) && password.length >= 4){
        return 'Пароль надёжный' 
    }
    return 'Пароль недостаточно надёжный'   
}

console.log(isPasswordCorrect('1234-'))
console.log(isPasswordCorrect('4321_'))
console.log(isPasswordCorrect('qaz-xsw'))
console.log(isPasswordCorrect('_zxd'))

console.log(isPasswordCorrect('_-a'))
console.log(isPasswordCorrect('qaz'))
console.log(isPasswordCorrect('_-3'))
console.log(isPasswordCorrect('123456789'))
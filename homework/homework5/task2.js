function filter(emails, blackList){
    let result = new Array
    for (let i = 0; i < emails.length; i++){
        if (!blackList.includes(emails[i])){
            result.push(emails[i])
        }
    }
    return result
}

let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru','goodday@day.ru']

console.log(filter(whiteList, blackList))
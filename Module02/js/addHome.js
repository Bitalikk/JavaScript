'use stricts';
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let pass;


do {
    pass = prompt('Введите пароль');
    if(pass !== null) {
        if(passwords.includes(pass)) {
            alert('Добро пожаловать!');
            break;
        } else {
            if(attempts > 1) {
                attempts -= 1;
                alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
            } else {
                alert('У вас закончились попытки, аккаунт заблокирован!');
                break;
            }
        }
    }
}while (pass !== null);
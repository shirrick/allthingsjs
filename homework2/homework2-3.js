var userName = prompt('Кто здесь?', '');

if (userName == 'admin') {

    var pass = prompt('Пароль?', '');

    if (pass == 'passw0rd') {
        alert('Welcome home!');
    } else if (pass == null) {
        alert('Cancelled');
    } else {
        alert('Врёти! Wrong password');
    }

} else if (userName == null) { // (**)
    alert('Ну и не надо!');

} else {

    alert('Нет такого логина');

}

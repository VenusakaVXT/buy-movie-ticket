const btnSignIn = document.querySelector('.js-sign-in');
const userName = document.getElementById('js-account');
const passWord = document.getElementById('js-password');

function pressSignIn() {
    // Take data
    let userNameValue = userName.value;
    let passWordValue = passWord.value;

    // Put data in messageBox()
    topic = 'Save account?\nAccount';
    let formFirst = prompt(topic, userNameValue);
    topic = 'Save password?\nPassword';
    let formSecond = prompt(topic, passWordValue);
}

btnSignIn.addEventListener('click', pressSignIn);

if ((formFirst != null) && (formSecond != null)) {
    alert('Account saved!!!');
}
else {
    alert('Account not saved!!!');
}
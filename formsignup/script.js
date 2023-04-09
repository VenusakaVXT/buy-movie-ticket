const nameElement = document.getElementById('name');
const phoneElement = document.getElementById('number-phone');
const emailElement = document.getElementById('email');
const btnRegister = document.getElementById('btn-register');
const inputElement = document.querySelectorAll('.js-input-item');

// Press the register button
btnRegister.addEventListener('click', function() {
    Array.from(inputElement).map((element) => 
        element.classList.remove('success', 'error')
    );

    let isValid = checkValidate();
    if(isValid) {
        alert('Submission of registration successfully!!!');
    }
})

function checkValidate() {
    let nameValue = nameElement.value;
    let phoneValue = phoneElement.value;
    let emailValue = emailElement.value;
    let isCheck = true;

    // Name format
    if (nameValue == '') {
        setError(nameElement, 'Name cannot be left blank');
        isCheck = false;
    }
    else {
        setSuccess(nameElement);
    }

    // Phone format
    if (phoneValue == '') {
        setError(phoneElement, 'Phone number cannot be left blank');
        isCheck = false;
    }
    else if(!isPhone(phoneValue)) {
        setError(phoneElement, 'Phone number is not in the correct format');
        isCheck = false;
    }
    else {
        setSuccess(phoneElement);
    }

    // Email format
    if (emailValue == '') {
        setError(emailElement, 'Email cannot be left blank');
        isCheck = false;
    }
    else if(!isEmail(emailValue)) {
        setError(emailElement, 'Email is not in the correct format');
        isCheck = false;
    }
    else {
        setSuccess(emailElement);
    }

    return isCheck;
}

function setSuccess(element) {
    element.parentNode.classList.add('success');
}

function setError(element, message) {
    let parentElement = element.parentNode;
    parentElement.classList.add('error');
    parentElement.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
    test( email);
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
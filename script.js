const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const register = document.querySelector('.register');

//show success
function showSuccess(input) {
    input.parentElement.classList.add("register-control--success");
    input.parentElement.classList.remove("register-control--error");
}
//show error
function showError(input, mess) {
    const parentElement = input.parentElement;
    parentElement.classList.remove("register-control--error");
    parentElement.classList.add("register-control--error");
    parentElement.classList.remove("register-control--success");
    parentElement.querySelector(".error-message").innerHTML = mess;
}
//check inputfied leght

function checkLeght(input, min, max) {
    if (input.value.length < min && input.value.length > 0) {
        console.log("hello1")
        showError(input, `nhap hon ${min} ki tu`);
    } else if (input.value.length > max) {
        console.log("hello")
        showError(input, `nhap it hon ${max} ki tu`);
    } else if (input.value.length >= min && input.value.length <= max) {
        console.log("hello3")
        showSuccess(input);
    }
}

//check email 

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, `day khong phai email`);
    }
}

//flied required

function fliedRequired(arrInput) {
    arrInput.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `ban phai nhap vao`);
        } else {
            showSuccess(input);
        }
    })


}

//passwords match

function passwordMatch(input, password) {
    if (password) {
        if (input.value === password) {
            showSuccess(input);
        } else {
            showError(input, "pass nhap khong trung");
        }
    }
}



register.addEventListener('submit', function(event) {
    event.preventDefault();
    fliedRequired([username, email, password, confirmPassword]);
    checkEmail(email);
    checkLeght(password, 3, 5);
    checkLeght(username, 3, 5);
    passwordMatch(confirmPassword, password.value);
})
var baseUrl;
var imageDataUrl; 
function onload() {
    baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    reset();
    document.getElementById("success").innerHTML = "";
    document.getElementById('form').addEventListener("submit", validate);
}

function resetForm(event) {
    reset();
    for (let i = 0; i < 2; i++) {
        document.getElementsByTagName('input')[i].value = "";
    }
}
function reset() {
    for (let i = 0; i < document.getElementsByClassName('error').length; i++) {
        document.getElementsByClassName('error')[i].innerHTML = "";
    }
}

function validate(event) {
    reset();
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{9,})/;
    let noErr = true;
    event.preventDefault();

    let inp = event.target;
    if (inp[0].value == "") {
        document.getElementById("fname-err").innerHTML = "Email is empty."
        noErr = false;
    }
    else if (inp[1].value == "") {
        noErr = false;
        document.getElementById("pwd-err").innerHTML = "Password is empty."
    }
    
    if (noErr) {
        document.getElementById("success").innerHTML = "Signing In...";
        window.sessionStorage.setItem("email", inp[0].value);
        resetForm();
        window.location.replace(baseUrl + "/profile.html");
    }
}

onload();
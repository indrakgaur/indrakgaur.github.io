var baseUrl;
var imageDataUrl; 
function onload() {
    baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    reset();
    document.getElementById("success").innerHTML = "";
    document.getElementById('form').addEventListener("submit", validate);
    document.getElementById('fileInput').addEventListener('change', function (event) {
        
        var selectedFile = event.target.files[0];
    
        if (selectedFile) {
          
          var reader = new FileReader();
    
          
          reader.onload = function (e) {
            
             imageDataUrl = e.target.result;
            
          };
    
         
           reader.readAsDataURL(selectedFile);
        }
      });
}

function resetForm(event) {
    reset();
    for (let i = 0; i < 6; i++) {
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
        document.getElementById("fname-err").innerHTML = "First Name is empty."
        noErr = false;
    }
    else if (inp[1].value == "") {
        document.getElementById("lname-err").innerHTML = "Last Name is empty."
        noErr = false;
    }
    else if (inp[2].value == "") {
        noErr = false;
        document.getElementById("email-err").innerHTML = "Email is empty."
    }
    else if (!emailRegex.test(inp[2].value)) {
        noErr = false;
        document.getElementById("email-err").innerHTML = "Email not valid."
    }
    else if (inp[4].value == "") {
        noErr = false;
        document.getElementById("pwd-err").innerHTML = "Password is empty."
    }
    else if (!pwdRegex.test(inp[4].value)) {
        noErr = false;
        document.getElementById("pwd-err").innerHTML = "Your password does not follow the rules."
    }
    else if (inp[5].value == "") {
        noErr = false;
        document.getElementById("pwd2-err").innerHTML = "Confirm Password is empty."
    }
    else if (inp[4].value != inp[5].value) {
        noErr = false;
        document.getElementById("pwd2-err").innerHTML = "Passwords do not match."
    }

    if (noErr) {
        document.getElementById("success").innerHTML = "Signing In...";
         window.sessionStorage.setItem("name", inp[0].value + " " + inp[1].value );
         window.sessionStorage.setItem("email", inp[2].value);
         window.sessionStorage.setItem("profileImage", imageDataUrl);
        resetForm();
        window.location.replace(baseUrl + "/profile.html");
    }
}





onload();
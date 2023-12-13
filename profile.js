function onload() {
    let name = sessionStorage.getItem('name');
    let profileImage = sessionStorage.getItem('profileImage');
    let email = sessionStorage.getItem('email');
    let imageElement = document.querySelector(".image");
    let paraElement = document.querySelector("p");
    let headerElement = document.querySelector("h1");
     imageElement.src = profileImage;
    paraElement.innerHTML = email;
    headerElement.innerHTML = name;

    console.log(profileImage);

    document.getElementById('logoutbutton').addEventListener('click', function (event) {
        baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        window.location.replace(baseUrl + "/signin.html");
      });
}


onload();
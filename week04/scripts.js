function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCase();
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup",transformUpperCase);

function checkPasswordLength(){
    let password = document.getElementById("katalaluan").value;
    if(password.length < 5) {
        alert("Password must be more than 5 characters");
    }else {
        alert("Password accepted!")
    }
}

let elPassword = document.getElementById("katalaluan");
elPassword.onblur = checkPasswordLength;

function checkPasswordLength2(txt){
    if(txt.length < 5){
        alert ("Password must be more than 5 characters");
    } else {
        alert("Password accepted!");
    }
}

let elPassword2 = document.getElementById("katalaluan2");
elPassword2.addEventListener("blur", function(){
    let a = document.getElementById("katalaluan2");
    checkPasswordLength2(a.value);
});

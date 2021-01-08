document.getElementById('login_form').onsubmit = function() { 
    let un = document.getElementById('username');
    let pw = document.getElementById('password');
    let login_status = validateLogin(un.value, pw.value);
    if(login_status) {
        window.open("dashboard.html","_self");
    }
    else {
        un.value = "";
        pw.value = "";
        document.getElementById("error_message").innerHTML = "incorrect username or password"
        // alert("incorrect username or password");
    }
    return false;
};
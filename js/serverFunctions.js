function validateLogin(uname, password) {
    if (uname == "admin" && password == "admin123") {
        return true;
    }
    return false;
}
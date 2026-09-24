function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("loginError").textContent =
            "Invalid username or password.";
    }
}

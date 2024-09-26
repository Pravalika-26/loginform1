document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass123") {
        alert("Login successful!");
    } else {
        alert("Incorrect username or password!");
    }
});

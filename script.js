// Form Validation
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your login validation logic here
    // Example: Check email and password
    // Redirect to the homepage on success
    window.location.href = "homepage.html";
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your signup validation logic here
    // Example: Register the user
    // Redirect to the homepage on success
    window.location.href = "homepage.html";
});

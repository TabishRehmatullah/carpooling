// Form Validation
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
   
    window.location.href = "homepage.html";
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    window.location.href = "homepage.html";
});

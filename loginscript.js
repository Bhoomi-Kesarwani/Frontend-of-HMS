// Object to store registered users
const users = {};
let generatedOTP = null;

function showRegisterForm() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
}

function showLoginForm() {
  document.getElementById("register-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

function showForgotPasswordForm() {
  document.getElementById("register-container").style.display = "none";
  document.getElementById("login-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "block";
}

function register(event) {
  event.preventDefault();
  
  const staffId = document.getElementById("register-staff-id").value;
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  const phone = document.getElementById("register-phone").value;

  if (users[username]) {
    alert("You already have an account. Please log in.");
    showLoginForm();
  } else {
    users[username] = { staffId, password, phone };
    alert("Registration successful! Redirecting to homepage.");
    window.location.href = "home.html";
  }
}

function login(event) {
  event.preventDefault();
  
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (users[username] && users[username].password === password) {
    alert("Login successful! Redirecting to homepage.");
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function requestOTP(event) {
  event.preventDefault();
  
  const username = document.getElementById("forgot-username").value;
  const phone = document.getElementById("forgot-phone").value;

  if (users[username] && users[username].phone === phone) {
    generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    alert(`OTP generated: ${generatedOTP}`); // Display OTP for demo
    document.getElementById("otp-form").style.display = "block";
    document.getElementById("forgot-password-form").style.display = "none";
  } else {
    alert("Invalid username or mobile number.");
  }
}

function verifyOTP(event) {
  event.preventDefault();
  
  const otpInput = document.getElementById("otp-input").value;

  if (otpInput == generatedOTP) {
    alert("OTP verified. Please enter a new password.");
    document.getElementById("otp-form").style.display = "none";
    document.getElementById("new-password-form").style.display = "block";
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

function resetPassword(event) {
  event.preventDefault();
  
  const username = document.getElementById("forgot-username").value;
  const newPassword = document.getElementById("new-password").value;

  if (users[username]) {
    users[username].password = newPassword;
    alert("Password reset successful! You can now log in with your new password.");
    showLoginForm();
  }
}


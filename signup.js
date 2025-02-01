document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;
  
    if (password !== retypePassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    alert("Sign-up successful!");
    // Proceed with form submission or redirect as needed.
  });
  
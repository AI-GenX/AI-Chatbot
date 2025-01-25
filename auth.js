import { auth } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Login functionality
document.querySelector("#login-btn").addEventListener("click", async () => {
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to index.html
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
});

// Signup functionality
document.querySelector("#signup-btn").addEventListener("click", async () => {
  const name = document.querySelector("#signup-name").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
    window.location.href = "index.html"; // Redirect to index.html
  } catch (error) {
    alert(`Signup failed: ${error.message}`);
  }
});

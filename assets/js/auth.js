// Singleton UserManager to handle user data
class UserManager {
    constructor() {
        if (UserManager.instance) {
            return UserManager.instance;
        }
        this.users = JSON.parse(localStorage.getItem("users")) || [];
        UserManager.instance = this;
    }

    getUser(username) {
        return this.users.find((user) => user.username === username);
    }

    addUser(username, password) {
        this.users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(this.users)); // Save to localStorage
    }

    saveSignedInUser(username) {
        localStorage.setItem("signedInUser", username); // Save signed-in user
    }

    getSignedInUser() {
        return localStorage.getItem("signedInUser");
    }

    logOut() {
        localStorage.removeItem("signedInUser");
    }
}

const userManager = new UserManager();

// Function to handle user registration
function registerUser(username, password) {
    if (!userManager.getUser(username)) {
        userManager.addUser(username, password);
        alert("Registration successful! Please sign in.");
        window.location.href = "signin.html"; // Redirect to sign-in page
    } else {
        alert("Username already exists! Please try another.");
    }
}

// Function that handle user sign-in
function signInUser(username, password) {
    const user = userManager.getUser(username);
    if (user && user.password === password) {
        userManager.saveSignedInUser(username);
        alert("Login successful! Redirecting to Home.");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}

// Function to log out the user
function logOutUser() {
    userManager.logOut();
    alert("Logged out successfully!");
    window.location.href = "signin.html";
}

// Show signed-in user info on all pages
document.addEventListener("DOMContentLoaded", () => {
    const userInfoDiv = document.getElementById("user-info");
    const username = userManager.getSignedInUser();

    if (userInfoDiv) {
        if (username) {
            userInfoDiv.innerHTML = `
                <span>Welcome, ${username}</span>
                <button id="logout">Logout</button>
            `;
            document.getElementById("logout").addEventListener("click", logOutUser);
        } else {
            userInfoDiv.innerHTML = `<a href="signin.html">Sign In / Register</a>`;
        }
    }
});

export { registerUser, signInUser, logOutUser };

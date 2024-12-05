// Singleton UserManager to handle user data
class UserManager {
    constructor() {
        if (UserManager.instance) {
            return UserManager.instance;
        }
        this.users = JSON.parse(localStorage.getItem("users")) || [];
        UserManager.instance = this;
    }

    // Get user by username
    getUser(username) {
        return this.users.find((user) => user.username === username);
    }

    // Add a new user
    addUser(username, password) {
        this.users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(this.users)); // Save users to localStorage
    }

    // Save the signed-in user
    saveSignedInUser(username) {
        localStorage.setItem("signedInUser", username); // Save signed-in user to localStorage
    }

    // Retrieve the signed-in user
    getSignedInUser() {
        return localStorage.getItem("signedInUser");
    }

    // Log out the user
    logOut() {
        localStorage.removeItem("signedInUser");
    }
}

// Create the singleton instance
const userManager = new UserManager();

// Function to handle user registration
function registerUser(username, password) {
    if (!userManager.getUser(username)) {
        userManager.addUser(username, password);
        alert("Registration successful! Please sign in.");
        window.location.href = "signin.html"; // Redirect to Sign In page
    } else {
        alert("Username already exists! Please try another.");
    }
}

// Function to handle user sign-in
function signInUser(username, password) {
    const user = userManager.getUser(username);
    if (user && user.password === password) {
        userManager.saveSignedInUser(username);
        alert("Login successful! Redirecting to Home.");
        window.location.href = "index.html"; // Redirect to Home page
    } else {
        alert("Invalid username or password!");
    }
}

// Function to log out the user
function logOutUser() {
    userManager.logOut();
    alert("Logged out successfully!");
    window.location.href = "signin.html"; // Redirect to Sign In page
}

// Show signed-in user info on all pages
document.addEventListener("DOMContentLoaded", () => {
    const userInfoDiv = document.getElementById("user-info");
    const username = userManager.getSignedInUser();

    if (userInfoDiv) {
        if (username) {
            // If user is signed in, display welcome message and Logout button
            userInfoDiv.innerHTML = `
                <span>Welcome, ${username}</span>
                <button id="logout" class="btn">Logout</button>
            `;
            document.getElementById("logout").addEventListener("click", logOutUser);
        } else {
            // If no user is signed in, show the Sign In/Register link
            userInfoDiv.innerHTML = `<a href="signin.html" class="btn">Sign In / Register</a>`;
        }
    }
});

export { registerUser, signInUser, logOutUser };

// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Dummy authentication, replace with your actual authentication logic
//     if (username === 'user' && password === 'password') {
//         document.getElementById('loginForm').style.display = 'none';
//         document.getElementById('securedContent').style.display = 'block';
//         document.getElementById('message').innerText = 'Login successful!';
//     } else {
//         document.getElementById('message').innerText = 'Invalid username or password';
//     }
// }

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const message = document.getElementById('message');
const registerMessage = document.getElementById('registerMessage');

// Dummy user data for demonstration
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        message.innerText = 'Login successful!';
        // Redirect to secured page or perform other actions after successful login
    } else {
        message.innerText = 'Invalid username or password';
    }
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    // Check if username already exists
    if (users.some(u => u.username === newUsername)) {
        registerMessage.innerText = 'Username already exists';
    } else {
        // Add new user to the list
        users.push({ username: newUsername, password: newPassword });
        registerMessage.innerText = 'Registration successful!';
    }
});


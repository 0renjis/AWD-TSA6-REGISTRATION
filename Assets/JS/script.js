document.addEventListener('DOMContentLoaded', function() {
    showLoginForm();

    document.getElementById('signup-link').addEventListener('click', function() {
        showSignupForm();
    });

    document.getElementById('login-link').addEventListener('click', function() {
        showLoginForm();
    });
});

function showLoginForm() {
    document.getElementById('form-container').innerHTML = `
        <form id="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="btn-container">
                <button type="submit" class="btn btn-primary">Log In</button>
                <a href="#" id="signup-link">Sign Up</a>
            </div>
        </form>
    `;
}

function showSignupForm() {
    document.getElementById('form-container').innerHTML = `
        <form id="signup-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="btn-container">
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <a href="#" id="login-link">Log In</a>
            </div>
        </form>
    `;
}

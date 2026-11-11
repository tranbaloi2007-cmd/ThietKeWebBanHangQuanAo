const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");
const switchText = document.getElementById("switch-text");
const message = document.getElementById("message");

let isLogin = true;

// Chuyển qua lại giữa đăng nhập và đăng ký
document.getElementById("show-register").addEventListener("click", () => {
    isLogin = false;
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    formTitle.textContent = "ĐĂNG KÝ";
    formDescription.textContent = "Tạo tài khoản FASHION STORE của bạn";

    switchText.innerHTML =
        'Đã có tài khoản? <button type="button" id="show-login">Đăng nhập</button>';

    message.textContent = "";

    document.getElementById("show-login").addEventListener("click", showLogin);
});

function showLogin() {
    isLogin = true;
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

    formTitle.textContent = "ĐĂNG NHẬP";
    formDescription.textContent = "Chào mừng bạn quay trở lại!";

    switchText.innerHTML =
        'Chưa có tài khoản? <button type="button" id="show-register">Đăng ký ngay</button>';

    message.textContent = "";

    document.getElementById("show-register").addEventListener("click", showRegister);
}

function showRegister() {
    isLogin = false;
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    formTitle.textContent = "ĐĂNG KÝ";
    formDescription.textContent = "Tạo tài khoản FASHION STORE của bạn";

    switchText.innerHTML =
        'Đã có tài khoản? <button type="button" id="show-login">Đăng nhập</button>';

    message.textContent = "";

    document.getElementById("show-login").addEventListener("click", showLogin);
}

// Đăng ký tài khoản
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim().toLowerCase();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Mật khẩu nhập lại không khớp!";
        return;
    }

    const users = JSON.parse(localStorage.getItem("fashionUsers")) || [];

    if (users.some(user => user.email === email)) {
        message.style.color = "red";
        message.textContent = "Email này đã được đăng ký!";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("fashionUsers", JSON.stringify(users));

    message.style.color = "green";
    message.textContent = "Đăng ký thành công! Hãy đăng nhập.";

    registerForm.reset();
});

// Đăng nhập tài khoản
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("fashionUsers")) || [];

    const user = users.find(
        item => item.email === email && item.password === password
    );

    if (user) {
        localStorage.setItem("fashionCurrentUser", JSON.stringify({
            name: user.name,
            email: user.email
        }));

        message.style.color = "green";
        message.textContent = "Đăng nhập thành công! Đang chuyển về trang chủ...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Email hoặc mật khẩu không chính xác!";
    }
});
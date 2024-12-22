// تبديل النماذج بين تسجيل الدخول وإنشاء حساب
document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// تبديل الوضع بين النهار والليل
const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('click', function () {
    document.body.classList.toggle('night-mode');
    const icon = themeToggler.querySelector('i');
    if (document.body.classList.contains('night-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

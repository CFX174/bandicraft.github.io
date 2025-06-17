// Archivo JS para futuras funciones
console.log("BandiCraft Network Website Loaded");
// Aquí puedes agregar más funciones de JavaScript según sea necesario
function toggleLogin() {
    document.getElementById('loginModal').style.display = 
        (document.getElementById('loginModal').style.display === 'block') ? 'none' : 'block';
}

function toggleRegister() {
    document.getElementById('registerModal').style.display = 
        (document.getElementById('registerModal').style.display === 'block') ? 'none' : 'block';
}

function register() {
    const user = document.getElementById('registerUser').value.trim();
    const pass = document.getElementById('registerPass').value.trim();
    const errorMsg = document.getElementById('registerError');

    if (!user || !pass) {
        errorMsg.textContent = 'Completa todos los campos.';
        return;
    }

    fetch('../php/register.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'username=' + encodeURIComponent(user) + '&password=' + encodeURIComponent(pass)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        if (data.includes('exitoso')) toggleRegister();
    });
}

function login() {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    const errorMsg = document.getElementById('loginError');

    if (!user || !pass) {
        errorMsg.textContent = 'Completa todos los campos.';
        return;
    }

    fetch('../php/login.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'username=' + encodeURIComponent(user) + '&password=' + encodeURIComponent(pass)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        if (data.includes('exitoso')) {
            document.getElementById('logout').style.display = 'inline';
            toggleLogin();
        }
    });
}

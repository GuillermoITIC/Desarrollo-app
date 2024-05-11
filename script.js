function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin" && password === "password") {
        alert("Has iniciado sesión exitosamente.");
        document.getElementById('loginPage').classList.add('hidden');
        toggleMenu(); // Muestra el menú principal después del inicio de sesión
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

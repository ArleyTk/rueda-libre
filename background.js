const btnTema = document.getElementById('btn-tema')
const icono = btnTema.querySelector('i')

function aplicarTema(oscuro) {
    document.body.classList.toggle('dark-mode', oscuro);
    icono.classList.toggle('fa-moon', !oscuro)
    icono.classList.toggle('fa-sun', oscuro);
}

// aplicarTema(localStorage.getItem('tema') === 'oscuro');

btnTema.addEventListener('click', () => {
    const oscuro = !document.body.classList.contains('dark-mode');
    aplicarTema(oscuro);
    localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
});

document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');

    var usuario = sessionStorage.getItem('Usuario');
    document.getElementById('nomeUser').textContent = usuario;
});
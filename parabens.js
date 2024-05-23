document.addEventListener('DOMContentLoaded', function(){
    var usuario = sessionStorage.getItem('Usuario');
    document.getElementById('nomeUser').textContent = 'Seja muito bem vindo ' + usuario + '!';
});
document.addEventListener('DOMContentLoaded', function(){
    var usuario = sessionStorage.getItem('Usuario');
    if(usuario){
        document.getElementById('nomeUser').textContent = 'Seja muito bem vindo ' + usuario + '!';
    }

    var formulario = document.getElementById('form');
    
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'entrar.html';
        });
    }
});
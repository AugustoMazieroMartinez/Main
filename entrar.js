document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.form-error').value = '';
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;

        fetch(`https://664e79e7fafad45dfae02a8d.mockapi.io/linguagem/ac2_9?email=${usuario}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            const user = data.find(u => u.senha === senha);
            if(usuario){
                console.log("Usuário Encontrado: ", user);

                sessionStorage.setItem('Usuário', user.usuario);
            } 
            else{
                document.getElementById('nome-error').textContent = "Senha Incorreta!";
            }
        })
        .catch((error) => {
            console.error('Erro na Requisição: ', error);
            document.getElementById('nome-error').textContent = 'Usuário não Encontrado';
        });
    });
});
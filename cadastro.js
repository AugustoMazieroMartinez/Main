document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.form-error').value = '';

    function validar(){
        var nome = document.getElementById('nomeCompleto').value;
        var usuario = document.getElementById('usuario').value;
        var senha = document.getElementById('senha').value;

        if(!nome || !usuario || !senha){
            document.getElementById('nome-error').textContent = 'Por Favor Preencha Todos os Campos!';
            return false;
        }

        var user = {
            "nome": nome,
            "usuario": usuario,
            "senha": senha
        }
        console.log('final')
        return usuario;
    }
    document.querySelector('.botao').addEventListener('click', function(event){
        event.preventDefault();
        let resp = validar();
        console.log(JSON.stringify(resp, null, 2));
        if(resp){
            fetch(`https://664e79e7fafad45dfae02a8d.mockapi.io/linguagem/ac2_9`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resp)});
        }
    });
});
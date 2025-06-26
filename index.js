function adicionarConvidado(){
    const name = document.getElementById('name').value.trim();

    if(name === ''){

        alert('Digite um nome para adicionar a lista!');
       
    }else {
        const listaConvidados = document.getElementById('lista-convidados');

        const convidadoItem = document.createElement('li');

        convidadoItem.innerText = `${name}`;

        listaConvidados.appendChild(convidadoItem);

        document.getElementById('name').value = '';
    }
}
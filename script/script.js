const caixaTexto = document.querySelector('.caixaTexto');
const listaItens = document.querySelector('#lista-itens');
const btnAdicionar = document.querySelector('.btnAdicionar');


// ADICIONAR E REMOVER //
// A TAREFA AO CLICAR NO BOTAO OU APERTANDO ENTER //

btnAdicionar.addEventListener('click', function() {
    const textoItens = caixaTexto.value;
    caixaTexto.value = '';
    listaItens.appendChild(adicionarTarefa(textoItens));
    caixaTexto.focus();

});

caixaTexto.addEventListener('keyup', function(e) {
    let key = e.keyCode;
    if (key == 13) {
        const textoItens = caixaTexto.value;
        caixaTexto.value = '';
        listaItens.appendChild(adicionarTarefa(textoItens));
        caixaTexto.focus();
    }
});


function adicionarTarefa(textoItens) {

    const elementoLI = document.createElement('li');

    const elementoSPAN = document.createElement('span');
    elementoSPAN.setAttribute('id', 'item');
    elementoSPAN.textContent = textoItens;

    const elementoDIV = document.createElement('div');

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('btnRemover')
    btnRemover.textContent = '🗑️';
    btnRemover.addEventListener('click', function() {
        elementoLI.remove();
    });

    elementoLI.className = 'naoRealizada';
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(elementoDIV);
    elementoDIV.appendChild(btnRemover);

    //SEMPRE QUE UM ITEM DA LISTA FOR CLICADO PELO MOUSE/
    //ALTERA O MARCADOR A COR DA FONTE E RISCA O TEXTO//

    elementoLI.addEventListener('click', function() {
        if (elementoSPAN.id === 'item') {
            if (this.className === 'naoRealizada') {
                this.className = 'realizada'
            } else {
                this.className = 'naoRealizada'
            }
        }
    });

    return elementoLI;

}
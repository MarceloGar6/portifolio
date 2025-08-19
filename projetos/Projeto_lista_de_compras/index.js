const inputItens= document.getElementById("input-item");
const clickBotao = document.getElementById("adicionar-item");
const listaItens = document.getElementById("lista-de-compras");
const formulario = document.getElementById("formulario");
let contador = 0;

function adicionarItem(event) {event.preventDefault();
    if (inputItens.value === "") {
        alert("Por favor, insira um item.");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItem = document.createElement("div");
    containerItem.classList.add("lista-item-container");
    const imputCheckbox = document.createElement("input");
    imputCheckbox.type = "checkbox";
    imputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.textContent = inputItens.value;

imputCheckbox.addEventListener("click", function() {
    if (imputCheckbox.checked) {
        nomeItem.style.textDecoration = "line-through";
    } else {
        nomeItem.style.textDecoration = "none";
    }
});

    containerItem.appendChild(imputCheckbox);
    containerItem.appendChild(nomeItem);

    itemDaLista.appendChild(containerItem);
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const data = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.textContent = `${diaDaSemana}, ${data} às ${horaAtual}`;
    itemDaLista.appendChild(itemData);
    listaItens.appendChild(itemDaLista);

    inputItens.value = "";
    verificarListaVazia();
}

clickBotao.addEventListener("click", (evento) => {
    adicionarItem(evento);
})

formulario.addEventListener('submit', function(event) {
    adicionarItem(event);
});


const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

function verificarListaVazia() {
    if (listaItens.children.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}


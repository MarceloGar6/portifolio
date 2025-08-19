let listaDeNumeros = [];

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10+1);
    let quantidadeNumeros = listaDeNumeros.length;
    if(quantidadeNumeros < 10) {
        if(listaDeNumeros.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
            listaDeNumeros.push(numeroEscolhido);
            return numeroEscolhido;
        }
    } else{
        listaDeNumeros = [];
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
let tentativas = 0;
let numeroSecreto = gerarNumeroAleatorio();

function apresentarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function apresentarTextoInicial(){
    apresentarTexto('h1', "Jogo do chute");
    apresentarTexto('p', "Escolha um número de 1 a 10");
    console.log(listaDeNumeros);
}

apresentarTextoInicial();

function reiniciarJogo() {
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    apresentarTextoInicial();
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('numeroChute').removeAttribute('disabled');
}

function verificarChute(){
    tentativas++;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        apresentarTexto('h1', 'ACERTOU!');
        apresentarTexto('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('numeroChute').setAttribute('disabled', true);
    }else if (chute > numeroSecreto){
        apresentarTexto('p', 'O numero secreto é menor');
    }else {
        apresentarTexto('p', 'O numero secreto é maior');
    }
}

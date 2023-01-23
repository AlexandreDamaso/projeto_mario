/*
OBJETIVO 01:
quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer
    - passo 01 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
    - passo 02 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 03 - dar um jeito de pegar o elemento da madal no JS
    - passo 04 - abrir a modal na tela
*/
console.log('Mostrar o document', document);
// Passo - 01
const botaoTrailer = document.querySelector('.trailer'); 
console.log('Peguei o Botão Trailer', botaoTrailer);

// Passo - 03
const modal = document.querySelector('.modal'); 
console.log('Mostrar a Modal', modal);

// Passo - 02
// Passo - 04
botaoTrailer.addEventListener("click", () => {
    console.log("Clicou no botão Veja o Trailer");
    modal.classList.add("aberto")
});

/*
OBJETIVO 02:
quando o usuário clicar no X, devemos fechar a modal
- passo 01 - dar um jeito de pegar o elemento de fechar a modal usando o JS
- passo 02 - dar um jeito de identificar quando o usuário clicar no X
- passo 04 - fechar a modal na tela
*/

// Passo - 01
const botaoFecharModal = document.querySelector('.fechar-modal'); 
console.log('Peguei o botão Fechar Modal', botaoFecharModal);

// Passo - 02
botaoFecharModal.addEventListener("click", () => {
    console.log("Clicou no botão Fechar o Trailer");
    modal.classList.remove("aberto")
});



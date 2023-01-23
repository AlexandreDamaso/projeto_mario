const botaoTrailer = document.querySelector('.trailer'); 
const modal = document.querySelector('.modal'); 
const botaoFecharModal = document.querySelector('.fechar-modal');

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
});



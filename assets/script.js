/*
document.addEventListener('DOMContentLoaded', function() {
    const modalFoto = document.querySelector('.modalFoto');
    const modalJanela = document.querySelector('.modalJanela');
    const modalBalao = document.querySelector('.modalBalao');
    const iconeFechar = document.querySelector('.iconeFechar');
    const iconeAumentar = document.querySelector('.iconeAumentar');

    // Começa com o modalBalao visível
    modalBalao.classList.remove('hidden');

    // Alterna a visibilidade entre modalJanela e modalBalao ao clicar na foto
    modalFoto.addEventListener('click', function() {
        modalJanela.classList.toggle('hidden');
        modalBalao.classList.toggle('hidden');
    });

    // Fecha o modalJanela e exibe o modalBalao ao clicar no botão fechar
    iconeFechar.addEventListener('click', function() {
        modalJanela.classList.add('hidden');
        modalBalao.classList.remove('hidden');
    });

    // Alterna o tamanho e centraliza o modal ao clicar no botão aumentar
    iconeAumentar.addEventListener('click', function() {
        if (window.innerWidth >= 769) { // Verifica se a tela é maior que 769px
            modalJanela.classList.toggle('telaCheia');
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const modalFoto = document.querySelector('.modalFoto');
    const modalJanela = document.querySelector('.modalJanela');
    const modalBalao = document.querySelector('.modalBalao');
    const iconeFechar = document.querySelector('.iconeFechar');
    const iconeAumentar = document.querySelector('.iconeAumentar');

    // Elementos começam Visíveis
    modalBalao.classList.remove('hidden');

    // Alterna a visibilidade dos Elementos
    modalFoto.addEventListener('click', function() {
        modalJanela.classList.toggle('hidden');
        modalBalao.classList.toggle('hidden');
    });

    // Fecha o modalJanela e exibe o modalBalao ao clicar no botão fechar
    iconeFechar.addEventListener('click', function() {
        modalJanela.classList.add('hidden');
        modalBalao.classList.remove('hidden');
    });

    // Alterna o Tamanho da Janela
    iconeAumentar.addEventListener('click', function() {
        if (window.innerWidth >= 769) {
            // Verifica se a tela é maior que 769px
            modalJanela.classList.toggle('telaCheia');
        }
    });
});
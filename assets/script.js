document.addEventListener('DOMContentLoaded', function() {
    const modalFoto = document.querySelector('.modalFoto');
    const modalJanela = document.querySelector('.modalJanela');
    const modalBalao = document.querySelector('.modalBalao');
    const modalFechar = document.querySelector('.modalFechar');

    // Começa com o modalBalao visível
    modalBalao.classList.remove('hidden');

    // Alterna a visibilidade entre modalJanela e modalBalao ao clicar na foto
    modalFoto.addEventListener('click', function() {
        modalJanela.classList.toggle('hidden');
        modalBalao.classList.toggle('hidden');
    });

    // Fecha o modalJanela e exibe o modalBalao ao clicar no botão fechar
    modalFechar.addEventListener('click', function() {
        modalJanela.classList.add('hidden');
        modalBalao.classList.remove('hidden');
    });
});
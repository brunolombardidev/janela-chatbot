document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const modal = document.getElementById('modal');
    const iconeFechar = document.getElementById('iconeFechar');
    const iconeAumentar = document.getElementById('iconeAumentar');
    
    let isFullScreen = false; // Estado para o tamanho da tela

    // Função para abrir o modal com fade in
    avatar.addEventListener('click', function() {
        modal.style.opacity = 0;
        modal.classList.remove('hidden');
        
        // Faz o fade in
        setTimeout(() => {
            modal.style.transition = 'opacity 1s ease';
            modal.style.opacity = 1;
        }, 10); // Timeout pequeno para garantir a remoção da classe hidden antes de aplicar a transição
    });

    // Função para fechar o modal com fade out
    iconeFechar.addEventListener('click', function() {
        modal.style.transition = 'opacity 1s ease';
        modal.style.opacity = 0;
        
        // Após o fade out, adiciona a classe hidden
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 1000); // Duração do fade out antes de ocultar o modal
    });

    // Função para alternar o tamanho do modal com uma transição suave
    iconeAumentar.addEventListener('click', function() {
        // Verifica se a tela é maior que 768px
        if (window.innerWidth > 768) {
            if (isFullScreen) {
                modal.style.transition = 'width 1s ease, height 1s ease';
                modal.style.width = '350px';
                modal.style.height = '60%';
            } else {
                modal.style.transition = 'width 1s ease, height 1s ease';
                modal.style.width = '97vw';
                modal.style.height = '95vh';
            }
            isFullScreen = !isFullScreen; // Inverte o estado
        }
    });
});
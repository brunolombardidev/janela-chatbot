document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const modal = document.getElementById('modal');
    const iconeFechar = document.getElementById('iconeFechar');
    const iconeAumentar = document.getElementById('iconeAumentar');
    
    let isFullScreen = false; // Estado para o tamanho da tela

    // Abrir modal com fade in
    avatar.addEventListener('click', function() {
        modal.style.opacity = 0;
        modal.classList.remove('hidden');
        
        // Faz FadeIn
        setTimeout(() => {
            modal.style.transition = 'opacity 1s ease';
            modal.style.opacity = 1;
        }, 10); // Garante remoção do hidden para transição
    });

    // Função para fechar o modal com fade out
    iconeFechar.addEventListener('click', function() {
        modal.style.transition = 'opacity 1s ease';
        modal.style.opacity = 0;
        
        // Após o fade out, adiciona a classe hidden
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 1000); // Duração do FadeOut antes de ocultar
    });

    // Alterna tamanho do modal e troca o ícone
    iconeAumentar.addEventListener('click', function() {
        // Verifica tela maior que 768px
        if (window.innerWidth > 768) {
            if (isFullScreen) {
                modal.style.transition = 'width 1s ease, height 1s ease';
                modal.style.width = '350px';
                modal.style.height = '80%';
                
                // Volta para o ícone de tela cheia original
                iconeAumentar.src = './assets/img/icon-telacheia1.png';
            } else {
                modal.style.transition = 'width 1s ease, height 1s ease';
                modal.style.width = '97vw';
                modal.style.height = '95vh';
                
                // Troca o ícone para o de minimizado
                iconeAumentar.src = './assets/img/icon-telacheia2.png';
            }
            isFullScreen = !isFullScreen; // Inverte o estado
        }
    });
});